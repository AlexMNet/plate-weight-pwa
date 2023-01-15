import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  useIonActionSheet,
} from '@ionic/react';
import { add, calculatorOutline, timerOutline } from 'ionicons/icons';
import type { OverlayEventDetail } from '@ionic/core';

import { useState } from 'react';

import { setShowTimer, setTime } from '../redux/features/timerSlice';
import { useDispatch } from 'react-redux';

const FabMenu: React.FC = () => {
  const [presentSheet] = useIonActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();
  const dispatch = useDispatch();

  return (
    <IonFab slot='fixed' horizontal='end' vertical='bottom'>
      <IonFabButton color='light'>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side='top'>
        <IonFabButton
          color='primary'
          onClick={() => {
            presentSheet({
              header: 'Timer',
              buttons: [
                {
                  text: '00:30',
                  data: {
                    time: 30,
                  },
                },
                {
                  text: '1:00',
                  data: {
                    time: 60,
                  },
                },
                {
                  text: '1:30',
                  data: {
                    time: 90,
                  },
                },
                {
                  text: '2:00',
                  data: {
                    time: 120,
                  },
                },
                {
                  text: '2:30',
                  data: {
                    time: 150,
                  },
                },
                {
                  text: '3:00',
                  data: {
                    time: 180,
                  },
                },
                {
                  text: '3:30',
                  data: {
                    time: 210,
                  },
                },
                {
                  text: '4:00',
                  data: {
                    time: 240,
                  },
                },
                {
                  text: '4:30',
                  data: {
                    time: 270,
                  },
                },
                {
                  text: '5:00',
                  data: {
                    time: 300,
                  },
                },
                {
                  text: 'Cancel',
                  role: 'cancel',
                  data: {
                    action: 'cancel',
                  },
                },
              ],
              onDidDismiss: ({ detail }) => {
                setResult(detail);
                if (detail.data) {
                  dispatch(setShowTimer(true));
                  dispatch(setTime(detail.data.time));
                }
              },
            });
          }}
        >
          <IonIcon icon={timerOutline}></IonIcon>
        </IonFabButton>
        {/* TODO: Add one rep max to tab 1 as well */}
        {/* <IonFabButton color='primary'>
          <IonIcon icon={calculatorOutline}></IonIcon>
        </IonFabButton> */}
      </IonFabList>
    </IonFab>
  );
};

export default FabMenu;
