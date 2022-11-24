import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Auth from './components/Auth';
import MainTabs from './MainTabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './redux/app/store';
import { setUser } from './redux/features/authSlice';
import ForgotPassword from './components/ForgotPassword';
import Splash from './components/Splash';
import { useEffect } from 'react';

setupIonicReact();

const PrivateRoutes = () => {
  return (
    <IonReactRouter>
      <Route path='/home' component={MainTabs} />;
      <Route path='/' render={() => <Redirect to='/home/tab1' />} />;
    </IonReactRouter>
  );
};

const PublicRoutes = () => {
  return (
    <IonReactRouter>
      <Route path='/auth' component={Auth} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/' render={() => <Redirect to='/auth' />} />
    </IonReactRouter>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        setUser({
          userId: currentUser?.uid,
          userEmail: currentUser?.email,
          displayName: currentUser?.displayName,
          photoURL: currentUser?.photoURL,
          emailVerified: currentUser?.emailVerified,
        })
      );
    });
  }, [dispatch]);

  return user?.userId === null ? (
    <IonApp>
      <Splash />
    </IonApp>
  ) : (
    <IonApp>{user?.userId ? <PrivateRoutes /> : <PublicRoutes />}</IonApp>
  );
};

export default App;
