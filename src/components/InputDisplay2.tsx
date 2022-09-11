import styled from 'styled-components';
import {
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/react';
import { closeCircleOutline } from 'ionicons/icons';
import percentages from '../utils/data/percentages';
import './InputDisplay2.css';
import { getPlateComponentData } from '../utils/functions';

// Redux
import type { RootState } from '../redux/app/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  setInputWeight,
  setPlateData,
  setPercentage,
  setFinalWeight,
  reset,
} from '../redux/features/plateSlice';
import { percentageOfInputWeight } from '../utils/functions';

const InputDisplay2: React.FC<any> = () => {
  const { inputWeight, percentage, finalWeight } = useSelector(
    (state: RootState) => state.plate
  );
  const dispatch = useDispatch();

  const onInputWeightChange = (e: any) => {
    dispatch(setInputWeight(e.target.value!));
    if (e.target.value === '') {
      dispatch(reset());
    }
  };

  const handleOnClick = () => {
    const weight = percentageOfInputWeight(inputWeight, percentage);
    dispatch(setFinalWeight(weight));
    const data = getPlateComponentData(weight);
    dispatch(setPlateData(data));
  };

  const handlePercentageChange = (value: string) => {
    dispatch(setPercentage(value));
    const weight = percentageOfInputWeight(inputWeight, value);
    dispatch(setFinalWeight(weight));
    const data = getPlateComponentData(weight);
    dispatch(setPlateData(data));
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={inputWeight}
          type='text'
          inputMode='numeric'
          placeholder='LBS'
          size={3}
          onIonChange={(e: any) => onInputWeightChange(e)}
        ></Input>
        <IonButton onClick={() => dispatch(reset())} fill='clear'>
          <IonIcon icon={closeCircleOutline} />
        </IonButton>
      </InputWrapper>
      <StyledIonSelect
        interface='popover'
        value={percentage}
        placeholder='Percentage'
        onIonChange={(e) => handlePercentageChange(e.target.value)}
      >
        {percentages.map((percentage) => (
          <IonSelectOption key={percentage.value} value={percentage.value}>
            {percentage.label}
          </IonSelectOption>
        ))}
      </StyledIonSelect>
      <IonButton onClick={() => handleOnClick()}>Calc</IonButton>
      {Number(inputWeight) !== finalWeight && (
        <IonText color='warning'>
          <p>
            Final Weight: <span>{finalWeight}</span>{' '}
          </p>
        </IonText>
      )}
    </Wrapper>
  );
};

export default InputDisplay2;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 65px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledIonSelect = styled(IonSelect)`
  && {
    width: 150px;
    margin: 0 auto;
  }
`;

const Input = styled(IonInput)<{ value: string }>`
  font-size: 110px;

  /* &:after {
    content: ${(props) => (props.value.length > 0 ? 'lbs' : '')};
    font-size: 24px;
  } */
`;
