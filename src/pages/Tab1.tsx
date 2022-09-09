import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
// import WeightDisplay from '../components/WeightDisplay';
import Bar from '../components/Bar';
import PlateBadgeDisplay from '../components/PlateBadgeDisplay';
// import InputDisplay from '../components/InputDisplay';
import InputDisplay2 from '../components/InputDisplay2';
import styled from 'styled-components';
import { getPlateComponentData } from '../utils/functions';

const Tab1: React.FC = () => {
  const [plateData, setPlateData] = useState<any>([]);
  console.log(plateData);

  const handleOnClick = (value: any) => {
    setPlateData(getPlateComponentData(value));
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Plate Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container>
          <InputDisplay2 handleOnClick={handleOnClick} />
          <Bar plateData={plateData} />
          <PlateBadgeDisplay plateData={plateData} />
          {/* <WeightDisplay /> */}
          {/* <InputDisplay /> */}
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
