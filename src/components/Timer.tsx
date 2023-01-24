import { useSelector, useDispatch } from 'react-redux';
import { IonChip, IonIcon, IonLabel, useIonToast } from '@ionic/react';

import { close, reloadOutline } from 'ionicons/icons';
import type { RootState } from '../redux/app/store';

import { useEffect } from 'react';

import {
  decreaseTimeByOne,
  resetTimer,
  setStartTimer,
  setShowTimerAlert,
} from '../redux/features/timerSlice';

import { secondsToMMSS } from '../utils/functions';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const [presentAlert] = useIonToast();
  const { time, showTimer, startTimer, showTimerAlert } = useSelector(
    (state: RootState) => state.timer
  );

  useEffect(() => {
    startTimer &&
      time > 0 &&
      setTimeout(() => {
        dispatch(decreaseTimeByOne());
      }, 1000);

    if (showTimerAlert) {
      presentAlert({
        header: 'Time Up!',
        message: 'Get Moving!💪',
        buttons: ['OK'],
        position: 'middle',
        onDidDismiss: () => {
          dispatch(setShowTimerAlert(false));
        },
      });
    }
  }, [time, dispatch, startTimer, showTimerAlert, presentAlert]);

  if (!showTimer) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 100,
      }}
    >
      <IonChip color='dark'>
        <IonIcon
          color='danger'
          icon={close}
          onClick={() => {
            dispatch(resetTimer());
          }}
        />
        <IonLabel
          className='ion-margin-end ion-margin-start'
          style={{ fontFamily: 'lato', fontSize: '1.2rem' }}
        >
          {time === 0 ? 'Time Up!' : secondsToMMSS(time)}
        </IonLabel>
        <IonIcon
          color='success'
          icon={reloadOutline}
          onClick={() => dispatch(setStartTimer(true))}
        />
      </IonChip>
    </div>
  );
};

export default Timer;
