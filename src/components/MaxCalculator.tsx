import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
} from '@ionic/react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setRepModalOpen,
  setMaxWeight,
  setInputData,
  clearInputs,
} from '../redux/features/repMaxSlice';
import {
  setPlateData,
  setFinalWeight,
  setInputWeight,
} from '../redux/features/plateSlice';
import { getDataFromInput } from '../utils/functions';

const MaxCalculator: React.FC = () => {
  const dispatch = useDispatch();
  const { repModalOpen, maxWeight, inputData } = useSelector(
    (state: any) => state.repMax
  );

  const handleInputChange = (e: any) => {
    dispatch(setInputData({ ...inputData, [e.target.name]: e.target.value }));
  };

  const calculateOneRepMax = () => {
    const kg: number = +inputData.weight / 2.2046;
    const max: number = kg / (1.0278 - 0.0278 * +inputData.reps);
    const result: string = (max * 2.2046).toFixed(1);

    dispatch(setMaxWeight(result));
  };

  const setInputToMax = () => {
    dispatch(setInputWeight(Math.trunc(maxWeight) + ''));
    const data = getDataFromInput(maxWeight, '100');
    dispatch(setFinalWeight(data.finalWeight));
    dispatch(setPlateData(data.plateData));
    dispatch(setRepModalOpen(false));
  };

  return (
    <IonModal
      isOpen={repModalOpen}
      onDidDismiss={() => dispatch(setRepModalOpen(false))}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>1 Rep Max</IonTitle>
          <IonButtons slot='end'>
            <IonButton
              strong={true}
              onClick={() => dispatch(setRepModalOpen(false))}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList style={{ maxWidth: '700px', margin: '16px auto' }}>
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
        </IonList>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-margin'>
            <IonButton
              color='danger'
              type='button'
              onClick={() => dispatch(clearInputs())}
            >
              clear
            </IonButton>
            <IonButton type='button' onClick={calculateOneRepMax}>
              Calculate
            </IonButton>
          </IonRow>
        </IonGrid>
        {maxWeight && (
          <div className='ion-margin-top'>
            <div style={{ fontSize: '2rem' }} className='ion-text-center'>
              Your one rep max is
            </div>
            <div style={{ fontSize: '2.7rem' }} className='ion-text-center'>
              {maxWeight} lbs
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '16px',
              }}
            >
              <IonButton fill='outline' onClick={() => setInputToMax()}>
                Use This Weight
              </IonButton>
            </div>
          </div>
        )}
      </IonContent>
    </IonModal>
  );
};

export default MaxCalculator;
