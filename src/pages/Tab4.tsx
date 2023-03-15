import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="fade">
        <IonToolbar>
          <IonTitle>Workouts coming soon...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 className="text-4xl md:text-6xl text-center py-3 font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-blue-500">
          Workout Log
        </h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
