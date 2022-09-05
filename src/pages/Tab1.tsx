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

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>Plate Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='container'>
          <WeightDisplay />
          <Bar />
          <PlateBadgeDisplay />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
