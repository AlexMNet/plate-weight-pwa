import { useSelector, useDispatch } from 'react-redux';
import { IonChip, IonIcon, IonLabel } from '@ionic/react';

import { timerOutline, close } from 'ionicons/icons';
import type { RootState } from '../redux/app/store';

import { useEffect } from 'react';

import { decreaseTimeByOne, resetTimer } from '../redux/features/timerSlice';

import { secondsToMMSS } from '../utils/functions';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const { time, showTimer } = useSelector((state: RootState) => state.timer);

  useEffect(() => {
    time > 0 &&
      setTimeout(() => {
        dispatch(decreaseTimeByOne());
      }, 1000);
  }, [time, dispatch]);

  if (!showTimer) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        left: '50%',
        transform: 'translate(-50%)',
      }}
    >
      <IonChip>
        <IonIcon color='primary' icon={timerOutline} />
        <IonLabel
          className='ion-margin-end ion-margin-start'
          style={{ fontFamily: 'lato', fontSize: '1.2rem' }}
        >
          {time === 0 ? 'Time Up!' : secondsToMMSS(time)}
        </IonLabel>
        <IonIcon
          color='danger'
          icon={close}
          onClick={() => {
            dispatch(resetTimer());
          }}
        />
      </IonChip>
    </div>
  );
};

export default Timer;
