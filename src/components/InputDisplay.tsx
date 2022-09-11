import styled from 'styled-components';
import { IonInput, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
// import { useKeyboardState } from '@ionic/react-hooks/keyboard';
import percentages from '../utils/data/percentages';

interface Props {
  isOpen: any;
  keyboardHeight: any;
}

const InputDisplay: React.FC = () => {
  // const { isOpen, keyboardHeight } = useKeyboardState();

  return null;

  // return (
  //   <Wrapper>
  //     <FormControl isOpen={isOpen} keyboardHeight={keyboardHeight}>
  //       <IonLabel>Weight (lbs)</IonLabel>
  //       <IonInput type='number' inputMode='numeric' placeholder='Weight' />
  //     </FormControl>
  //     <FormControl isOpen={isOpen} keyboardHeight={keyboardHeight}>
  //       <IonLabel>Percentage</IonLabel>
  //       <IonSelect value={100} placeholder='Percentage'>
  //         {percentages.map((percentage) => (
  //           <IonSelectOption key={percentage.value} value={percentage.value}>
  //             {percentage.label}
  //           </IonSelectOption>
  //         ))}
  //       </IonSelect>
  //     </FormControl>
  //   </Wrapper>
  // );
};

export default InputDisplay;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: auto auto;
  margin-bottom: 10px;
  text-align: center;
  /* gap: 10px; */
`;

const FormControl = styled.div<Props>`
  width: 100%;
  margin-top: ${(props) =>
    props.isOpen ? `${props.keyboardHeight * -1 - 200}px` : null};
  background-color: --ion-background-color;
  z-index: 100;
`;
