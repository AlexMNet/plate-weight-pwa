import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { barbell, cogSharp, trophy, fitnessOutline } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

const MainTabs: React.FC = () => {
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
