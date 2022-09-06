import { IonRow, IonCol, IonText } from '@ionic/react';

const WeightDisplay: React.FC = () => {
  return (
    <div>
      <IonRow>
        <IonCol className='ion-text-center'>
          <IonText>
            <h1>215lbs</h1>
          </IonText>
          <IonText>
            <small>Target Weight</small>
          </IonText>
        </IonCol>
        <IonCol className='ion-text-center'>
          <IonText>
            <h1>215lbs</h1>
          </IonText>
          <IonText>
            <small>Final Weight</small>
          </IonText>
        </IonCol>
      </IonRow>
    </div>
  );
};
export default WeightDisplay;
