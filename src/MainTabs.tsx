import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { barbell, cogSharp, trophy } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/tab1'>
          <Tab1 />
        </Route>
        <Route exact path='/tab2'>
          <Tab2 />
        </Route>
        <Route path='/tab3'>
          <Tab3 />
        </Route>
        <Route exact path='/'>
          <Redirect to='/tab1' />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href='/tab1'>
          <IonIcon icon={barbell} />
          <IonLabel>Calculator</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab2' href='/tab2'>
          <IonIcon icon={trophy} />
          <IonLabel>1 Rep Max</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab3' href='/tab3'>
          <IonIcon icon={cogSharp} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
