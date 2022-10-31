import styled from 'styled-components';
import Plate from './Plate';
import type { RootState } from '../redux/app/store';
import { add, remove } from 'ionicons/icons';
import { IonIcon, IonButton } from '@ionic/react';
import {
  addWeightByFive,
  removeWeightByFive,
} from '../redux/features/plateSlice';
import { useSelector, useDispatch } from 'react-redux';

const Bar: React.FC = () => {
  const dispatch = useDispatch();
  const { plateData } = useSelector((state: RootState) => state.plate);
  return (
    <Wrapper>
      <Barbell>
        <BarLeft>
          {plateData.map((plate: any, idx: any) => (
            <Plate
              key={idx}
              color={plate.color}
              width={plate.width}
              height={plate.height}
            />
          ))}
        </BarLeft>
        <BarRight>
          {plateData.map((plate: any, idx: any) => (
            <Plate
              key={idx}
              color={plate.color}
              width={plate.width}
              height={plate.height}
            />
          ))}
        </BarRight>
      </Barbell>
      {Object.keys(plateData).length > 0 && (
        <ButtonWrapper>
          <IonButton
            shape='round'
            color='light'
            onClick={() => dispatch(removeWeightByFive())}
          >
            <IonIcon icon={remove} size='large' style={{ fontSize: '64px' }} />
          </IonButton>
          <IonButton
            shape='round'
            color='light'
            onClick={() => {
              dispatch(addWeightByFive());
            }}
          >
            <IonIcon icon={add} size='large' style={{ fontSize: '64px' }} />
          </IonButton>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};
export default Bar;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0 50px 0;
  position: relative;
`;

const Barbell = styled.div`
  width: 20rem;
  height: 0.31rem;
  background-color: #595959;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const BarLeft = styled.div`
  width: calc(20rem / 3);
  height: 0.31rem;
  background-color: #595959;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
`;

const BarRight = styled.div`
  width: calc(20rem / 3);
  height: 0.31rem;
  background-color: #595959;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
