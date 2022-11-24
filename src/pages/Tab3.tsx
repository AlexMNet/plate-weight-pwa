import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonRow,
  IonNavLink,
  IonNav,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/app/store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import EditName from './EditName';

const Tab3: React.FC = () => {
  const history = useHistory();
  const { user } = useSelector((state: RootState) => state.auth);

  const logout = async () => {
    await signOut(auth);
    history.push('/');
  };

  return (
    <IonPage>
      <IonNav
        root={() => {
          return (
            <>
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
                        alt="Silhouette of a person's head"
                        src='https://ionicframework.com/docs/img/demos/avatar.svg'
                      />
                    </IonAvatar>
                  </IonRow>
                  <IonRow className='ion-justify-content-center ion-margin-top'>
                    <IonButton
                      fill='clear'
                      onClick={() => alert('Functionality coming soon...')}
                    >
                      Add/Change Photo
                    </IonButton>
                  </IonRow>
                </IonGrid>
                <IonList lines='full'>
                  <IonItem>
                    <IonNavLink
                      routerDirection='forward'
                      component={() => (
                        <EditName
                          displayName={user.displayName || 'Enter Your Name'}
                        />
                      )}
                    >
                      Display Name: {user.displayName || 'Enter Your name'}
                    </IonNavLink>
                  </IonItem>
                  <IonItem>
                    <IonLabel>email: {user.userEmail}</IonLabel>
                  </IonItem>
                </IonList>
              </IonContent>
            </>
          );
        }}
      />
    </IonPage>
  );
};

export default Tab3;
