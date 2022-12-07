import React, { useState } from 'react';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

import { auth } from '../firebase-config';
import {
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { createBrowserHistory } from 'history';

import { updateUser } from '../redux/features/authSlice';

import { useDispatch } from 'react-redux';

interface EditEmailProps {
  email: string;
}

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required('Please enter your email'),
    password: yup
      .string()
      .min(6, 'Password must be 6 or more characters')
      .required('Please enter you password'),
  })
  .required();

const EditEmail: React.FC<EditEmailProps> = ({ email }) => {
  const [present] = useIonToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = createBrowserHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const user = auth.currentUser;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    if (user && user.email) {
      const credential = EmailAuthProvider.credential(
        user.email,
        data.password
      );

      try {
        await reauthenticateWithCredential(user, credential);
        await updateEmail(user, data.email);
        dispatch(updateUser({ userEmail: data.email }));

        present({
          message: 'Email Successfully updated!',
          duration: 2000,
          position: 'top',
        });
        setLoading(false);
        history.go(-1);
      } catch (error) {
        setLoading(false);
        present({
          message: 'Something went wrong!',
          duration: 2000,
          position: 'top',
        });

        console.log(error);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Email</IonTitle>
          {loading && <IonProgressBar type='indeterminate' color='primary' />}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem className='ion-invalid'>
              <IonLabel>Old Email: </IonLabel>
              <IonInput value={user && user?.email} readonly={true} />

              <IonNote slot='error'>{errors.email?.message}</IonNote>
            </IonItem>
            <IonItem className='ion-invalid'>
              <IonLabel>Email: </IonLabel>
              <Controller
                render={({ field }) => (
                  <IonInput
                    placeholder={'Enter new email'}
                    clearOnEdit
                    clearInput
                    onIonBlur={() => field.onBlur()}
                    onIonChange={(e) => field.onChange(e.detail.value)}
                  />
                )}
                name='email'
                control={control}
              />
              <IonNote slot='error'>{errors.email?.message}</IonNote>
            </IonItem>
            <IonItem className='ion-invalid'>
              <IonLabel>Password: </IonLabel>
              <Controller
                render={({ field }) => (
                  <IonInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Confirm your password'}
                    clearOnEdit
                    clearInput
                    onIonBlur={() => field.onBlur()}
                    onIonChange={(e) => field.onChange(e.detail.value)}
                  />
                )}
                name='password'
                control={control}
              />
              <IonButton
                color={showPassword ? 'primary' : 'medium'}
                fill='clear'
                onClick={() => setShowPassword(!showPassword)}
              >
                <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline} />
              </IonButton>
              <IonNote slot='error'>{errors.password?.message}</IonNote>
            </IonItem>
          </IonList>
          <IonButton type='submit'>Change</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default EditEmail;
