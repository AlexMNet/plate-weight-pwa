import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonTitle,
  IonToolbar,
  IonNote,
} from '@ionic/react';

import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import { updateUser, setUserLoading } from '../redux/features/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/app/store';

interface EditNameProps {
  displayName: string;
}

interface IFormInput {
  name: string;
}

const schema = yup
  .object({
    name: yup.string().required('Please enter your name'),
  })
  .required();

const EditName: React.FC<EditNameProps> = ({ displayName }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLoading } = useSelector((state: RootState) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const user = auth.currentUser;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    dispatch(setUserLoading(true));
    if (user !== null) {
      updateProfile(user, {
        displayName: data.name,
      })
        .then(() => {
          dispatch(updateUser({ displayName: data.name }));
          history.push('/home/tab3');
          dispatch(setUserLoading(false));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Name</IonTitle>
          {userLoading && (
            <IonProgressBar type='indeterminate' color='primary' />
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem className='ion-invalid'>
              <IonLabel>Display Name: </IonLabel>
              <Controller
                render={({ field }) => (
                  <IonInput
                    placeholder={displayName}
                    clearOnEdit
                    clearInput
                    onIonBlur={() => field.onBlur()}
                    onIonChange={(e) => field.onChange(e.detail.value)}
                  />
                )}
                name='name'
                control={control}
              />
              <IonNote slot='error'>{errors.name?.message}</IonNote>
            </IonItem>
          </IonList>

          <IonButton type='submit'>Change</IonButton>
        </form>
      </IonContent>
    </>
  );
};
export default EditName;
