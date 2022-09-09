import { useState } from 'react';
import styled from 'styled-components';
import { IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
// import { useKeyboardState } from '@ionic/react-hooks/keyboard';
import percentages from '../utils/data/percentages';
import './InputDisplay2.css';

const InputDisplay2: React.FC<any> = ({ handleOnClick }) => {
  //   const { isOpen, keyboardHeight } = useKeyboardState();
  const [inputWeight, setInputWeight] = useState<string | number>('');
  const [percetage, setPercentage] = useState<string | number>('');
  console.log(inputWeight);

  const onInputWeightChange = (e: any) => {
    setInputWeight(e.target.value!);
  };

  //   const handleOnClick = () => {
  //     console.log(getPlateComponentData(inputWeight));
  //   };

  return (
    <Wrapper>
      <Input
        value={inputWeight}
        type='text'
        inputMode='numeric'
        placeholder='LBS'
        onIonChange={(e) => onInputWeightChange(e)}
      ></Input>
      <StyledIonSelect interface='popover' value={100} placeholder='Percentage'>
        {percentages.map((percentage) => (
          <IonSelectOption key={percentage.value} value={percentage.value}>
            {percentage.label}
          </IonSelectOption>
        ))}
      </StyledIonSelect>
      <IonButton onClick={() => handleOnClick(inputWeight)}>Calc</IonButton>
    </Wrapper>
  );
};

export default InputDisplay2;

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

const Input = styled(IonInput)`
  font-size: 110px;
`;
