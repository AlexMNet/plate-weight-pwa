import { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
} from '@ionic/react';

import Bar from '../components/Bar';
import PlateBadgeDisplay from '../components/PlateBadgeDisplay';
import InputDisplay from '../components/InputDisplay';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { setOffline } from '../redux/features/systemSlice';

const Offline: React.FC = () => {
  const dispatch = useDispatch();
  const [connected, setConnected] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setConnected(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);

    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [connected]);

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Plate Calculator</IonTitle>
          <IonButtons slot='end'>
            <IonButton
              onClick={() => dispatch(setOffline(false))}
              disabled={!connected}
            >
              {connected ? 'Online' : 'Offline'}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false} fullscreen>
        <Container>
          {connected ? (
            <Banner color='green'>
              <div>You are connected to the internet</div>
              <IonButton
                fill='clear'
                color='success'
                onClick={() => dispatch(setOffline(false))}
              >
                Sign In
              </IonButton>
            </Banner>
          ) : (
            <Banner color='red'>
              <div>You are not connected to the internet</div>
            </Banner>
          )}
          <InputDisplay />
          <Bar />
          <PlateBadgeDisplay />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Offline;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div<{ color: string }>`
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  padding: 7px;
  margin: 10px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
