import { IonProgressBar } from '@ionic/react';
import styled from 'styled-components';

const Splash = () => {
  return (
    <Wrapper>
      <h1>plate calculator</h1>
      <IonProgressBar type='indeterminate' />
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
