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
} from '@ionic/react';

/* Firebase */
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../src/firebase-config';

/* CSS */
import styled from 'styled-components';

//* Form validation */
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

/* React */
import { useHistory } from 'react-router-dom';

interface IFormInput {
  email: any;
  password: any;
}

const schema = yup
  .object({
    email: yup.string().email().required('Please enter your email'),
  })
  .required();

const ForgotPassword = () => {
  const [presentAlert] = useIonAlert();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      history.push('/auth');
      presentAlert({
        header: 'Password Reset',
        message:
          'Please check your email to reset your password \n You may need to check your spam.',
        buttons: ['OK'],
      });
    } catch (error) {
      presentAlert({
        header: 'Error',
        message: 'Please try again...',
        buttons: ['OK'],
      });
    }
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Forgot Password</IonCardTitle>
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
                </IonList>
                <IonButton
                  type='submit'
                  className='ion-margin-vertical'
                  expand='full'
                >
                  Reset Password
                </IonButton>
              </form>
              <IonGrid className='ion-padding-top'>
                <IonRow className='ion-justify-content-center ion-align-items-center'>
                  <IonCol>
                    <IonButton routerLink='/auth' fill='clear' expand='full'>
                      back to login
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
export default ForgotPassword;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
