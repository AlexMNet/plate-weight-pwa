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
  IonListHeader,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/app/store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Tab3: React.FC = () => {
  const history = useHistory();
  const { userEmail } = useSelector((state: RootState) => state.auth);

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
        <IonList>
          <IonListHeader>
            <IonLabel>Profile</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>email: {userEmail}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
