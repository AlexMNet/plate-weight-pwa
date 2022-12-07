import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonAlert,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { barbell, cogSharp, trophy, fitnessOutline } from 'ionicons/icons';

import type { RootState } from './redux/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateNotification } from './redux/features/plateSlice';
import { useEffect } from 'react';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import EditAvatar from './components/EditAvatar';
import EditName from './components/EditName';
import EditEmail from './components/EditEmail';

const MainTabs: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const { updatesAvailable } = useSelector((state: RootState) => state.plate);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateApp = () => {
      dispatch(setUpdateNotification(false));
      window.location.reload();
    };

    if (updatesAvailable) {
      presentAlert({
        backdropDismiss: false,
        header: 'New Updates Available!',
        subHeader: '😎💪',
        buttons: [
          {
            text: 'Update',
            role: 'confirm',
            handler: () => updateApp(),
          },
        ],
      });
    }
  }, [updatesAvailable, dispatch, presentAlert]);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/home/tab1'>
          <Tab1 />
        </Route>
        <Route exact path='/home/tab2'>
          <Tab2 />
        </Route>
        <Route path='/home/tab3'>
          <Tab3 />
        </Route>
        <Route path='/home/tab4'>
          <Tab4 />
        </Route>
        <Route path='/home/settings/avatar' component={EditAvatar} />
        <Route path='/home/settings/name' component={EditName} />
        <Route path='/home/settings/email' component={EditEmail} />
        <Route exact path='/home'>
          <Redirect to='/home/tab1' />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href='/home/tab1'>
          <IonIcon icon={barbell} />
          <IonLabel>Calculator</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab2' href='/home/tab2'>
          <IonIcon icon={trophy} />
          <IonLabel>1 Rep Max</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab4' href='/home/tab4'>
          <IonIcon icon={fitnessOutline} />
          <IonLabel>Workouts</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab3' href='/home/tab3'>
          <IonIcon icon={cogSharp} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
