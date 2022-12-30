import { IonProgressBar } from '@ionic/react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { setOffline } from '../redux/features/systemSlice';

const Splash = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>plate calculator</h1>
      <IonProgressBar type='indeterminate' />
      <div className='ion-margin-top'>
        <IonButton onClick={() => dispatch(setOffline(true))}>
          Use Offline
        </IonButton>
      </div>
    </Wrapper>
  );
};
export default Splash;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
