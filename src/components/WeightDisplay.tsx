import { IonGrid, IonRow, IonCol, IonContent, IonText } from '@ionic/react';

const WeightDisplay: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
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
      </IonGrid>
    </IonContent>
  );
};
export default WeightDisplay;
