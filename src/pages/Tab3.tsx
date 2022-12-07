import {
  IonAvatar,
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

import React from 'react';
import { createBrowserHistory } from 'history';

import { useSelector } from 'react-redux';
import type { RootState } from '../redux/app/store';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Tab3: React.FC = () => {
  const history = createBrowserHistory();

  const { user } = useSelector((state: RootState) => state.auth);

  const logout = async () => {
    await signOut(auth);
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
          <IonButton onClick={logout} fill='clear' slot='end'>
            <IonIcon icon={logOutOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
            <IonAvatar style={{ height: '100px', width: '100px' }}>
              <img
                alt='User profile'
                src={
                  user.photoURL
                    ? user.photoURL
                    : 'https://ionicframework.com/docs/img/demos/avatar.svg'
                }
              />
            </IonAvatar>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-margin-top'>
            <IonButton
              fill='clear'
              routerLink='/home/settings/avatar'
              routerDirection='forward'
            >
              Add/Change Photo
            </IonButton>
          </IonRow>
        </IonGrid>
        <IonList lines='full'>
          <IonItem routerLink='/home/settings/name' routerDirection='forward'>
            <IonLabel>
              Display Name: {user.displayName || 'Enter Your name'}
            </IonLabel>
          </IonItem>
          <IonItem routerLink='/home/settings/email' routerDirection='forward'>
            <IonLabel>email: {user.userEmail}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
