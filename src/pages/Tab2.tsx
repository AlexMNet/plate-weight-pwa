import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
  IonList,
  IonGrid,
  IonRow,
  IonButton,
} from '@ionic/react';
import { useState } from 'react';

interface IInputData {
  reps: string;
  weight: string;
}

const Tab2: React.FC = () => {
  const [inputData, setInputData] = useState<IInputData>({
    reps: '',
    weight: '',
  });
  const [max, setMax] = useState<string>('');

  const handleInputChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const calculateOneRepMax = () => {
    const kg: number = +inputData.weight / 2.2046;
    const max: number = kg / (1.0278 - 0.0278 * +inputData.reps);
    const result: string = (max * 2.2046).toFixed(1);

    setMax(result);
  };

  const clearInputs = () => {
    setInputData({ reps: '', weight: '' });
    setMax('');
  };

  return (
    <IonPage>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonTitle>1 Rep Max</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList style={{ maxWidth: '700px', margin: '16px auto' }}>
          <IonItem className='ion-margin'>
            <IonLabel position='floating'>Reps</IonLabel>
            <IonInput
              placeholder='Enter reps'
              type='number'
              inputMode='numeric'
              value={inputData.reps}
              name='reps'
              onIonChange={handleInputChange}
              clearInput={true}
            ></IonInput>
          </IonItem>
          <IonItem className='ion-margin'>
            <IonLabel position='floating'>Weight(lbs)</IonLabel>
            <IonInput
              placeholder='Enter weight'
              type='number'
              inputMode='numeric'
              value={inputData.weight}
              name='weight'
              onIonChange={handleInputChange}
              clearInput={true}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-margin'>
            <IonButton type='button' onClick={calculateOneRepMax}>
              Calculate
            </IonButton>
            <IonButton color='danger' type='button' onClick={clearInputs}>
              clear
            </IonButton>
          </IonRow>
        </IonGrid>
        {max && (
          <div className='ion-margin-top'>
            <div style={{ fontSize: '2rem' }} className='ion-text-center'>
              Your one rep max is
            </div>
            <div style={{ fontSize: '2.7rem' }} className='ion-text-center'>
              {max} lbs
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
