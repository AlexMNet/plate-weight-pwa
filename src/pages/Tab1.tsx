import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Bar from '../components/Bar';
import PlateBadgeDisplay from '../components/PlateBadgeDisplay';
import FabMenu from '../components/FabMenu';
import InputDisplay from '../components/InputDisplay';
import styled from 'styled-components';
import Timer from '../components/Timer';

const Tab1: React.FC = () => {
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
        <FabMenu />
        <Timer />
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
