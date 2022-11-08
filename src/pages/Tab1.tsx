import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react';
import Bar from '../components/Bar';
import PlateBadgeDisplay from '../components/PlateBadgeDisplay';
import InputDisplay from '../components/InputDisplay';
import styled from 'styled-components';
import { useEffect } from 'react';
import type { RootState } from '../redux/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateNotification } from '../redux/features/plateSlice';

const Tab1: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const { updatesAvailable } = useSelector((state: RootState) => state.plate);
  const dispatch = useDispatch();

  const updateApp = () => {
    dispatch(setUpdateNotification(false));
    window.location.reload();
  };

  useEffect(() => {
    if (updatesAvailable) {
      presentAlert({
        backdropDismiss: false,
        header: 'New Updates Available!',
        subHeader: '😎💪',
        buttons: [
          {
            text: 'Update',
            role: 'confirm',
            handler: () => updateApp(),
          },
        ],
      });
    }
  }, [updatesAvailable]);

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Plate Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false} fullscreen>
        <Container>
          <InputDisplay />
          <Bar />
          <PlateBadgeDisplay />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
