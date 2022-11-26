/* Ionic Framework */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonNote,
  useIonAlert,
  IonIcon,
} from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

/* Firebase */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../src/firebase-config';
import { FirebaseError } from 'firebase/app';

/* CSS */
import styled from 'styled-components';

/* React */
import { useState } from 'react';

/* Form validation */
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
  email: any;
  password: any;
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

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState('Login');
  const [presentAlert] = useIonAlert();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (form === 'Login') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const user = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/user-not-found') {
            presentAlert({
              header: 'Login Error',
              message: 'Email or password is incorrect',
              buttons: ['OK'],
            });
          } else {
            presentAlert('Email or Password is incorrect');
          }
        }
      }
    } else {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/email-already-in-use') {
            presentAlert({
              header: 'Registration Error',
              message: 'Email already in use',
              buttons: ['OK'],
            });
          } else {
            presentAlert('Something Went Wrong!');
          }
        }
      }
    }
  };

  const changeFormType = () => {
    if (form === 'Login') {
      setForm('Register');
    } else {
      setForm('Login');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>{form === 'Login' ? 'Login' : 'Register'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                {form === 'Login' ? 'Login' : 'Register'}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <IonList>
                  <IonItem className='ion-margin-vertical ion-invalid'>
                    <IonLabel>Email:</IonLabel>
                    <Controller
                      render={({ field }) => (
                        <IonInput
                          type='email'
                          {...field}
                          onIonBlur={() => field.onBlur()}
                          onIonChange={(e) => field.onChange(e.detail.value)}
                        />
                      )}
                      control={control}
                      name='email'
                    />
                    <IonNote slot='error'>{errors.email?.message}</IonNote>
                  </IonItem>
                  <IonItem className='ion-margin-vertical ion-invalid'>
                    <IonLabel>Password:</IonLabel>
                    <Controller
                      render={({ field }) => (
                        <IonInput
                          type={showPassword ? 'text' : 'password'}
                          {...field}
                          onIonBlur={() => field.onBlur()}
                          onIonChange={(e) => field.onChange(e.detail.value)}
                        />
                      )}
                      control={control}
                      name='password'
                    />
                    <IonButton
                      color={showPassword ? 'primary' : 'medium'}
                      fill='clear'
                      onClick={handleShowPassword}
                    >
                      <IonIcon
                        icon={showPassword ? eyeOutline : eyeOffOutline}
                      />
                    </IonButton>
                    <IonNote slot='error'>{errors.password?.message}</IonNote>
                  </IonItem>
                </IonList>
                <IonButton
                  type='submit'
                  className='ion-margin-vertical'
                  expand='full'
                >
                  {form === 'Login' ? 'Login' : 'Register'}
                </IonButton>

                <IonButton
                  routerLink='/forgot-password'
                  fill='clear'
                  expand='full'
                >
                  <small>Forgot password?</small>
                </IonButton>
              </form>
              <IonGrid className='ion-padding-top'>
                <IonRow className='ion-justify-content-center ion-align-items-center'>
                  <IonCol>
                    <IonButton
                      onClick={changeFormType}
                      fill='clear'
                      expand='full'
                    >
                      {form === 'Login' ? 'Register' : 'Login'}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </Container>
      </IonContent>
    </IonPage>
  );
};
export default Auth;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
