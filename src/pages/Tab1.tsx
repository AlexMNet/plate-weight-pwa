import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import WeightDisplay from '../components/WeightDisplay';
import Bar from '../components/Bar';
import PlateBadgeDisplay from '../components/PlateBadgeDisplay';
import InputDisplay from '../components/InputDisplay';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Plate Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          className='container'
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <WeightDisplay />
          <Bar />
          <PlateBadgeDisplay />
          <InputDisplay />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
