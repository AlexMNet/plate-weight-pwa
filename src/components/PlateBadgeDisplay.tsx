import styled from 'styled-components';
import { IonButton, IonBadge, IonLabel } from '@ionic/react';

interface PlateProps {
  plateData: any;
}

const PlateBadgeDisplay: React.FC<PlateProps> = ({ plateData }) => {
  let plateNumbers = [];
  if (plateData.length > 1) {
    plateNumbers = plateData[plateData.length - 1];
    console.log(plateNumbers);
  }
  return (
    <Wrapper>
      {/* 45lb Plates */}
      {plateNumbers.fortyFive ? (
        <IonButton size='small' color='primary'>
          <Label>45lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.fortyFive}
          </IonBadge>
        </IonButton>
      ) : null}
      {/* 35lb Plates */}
      {plateNumbers.thirtyFive ? (
        <IonButton size='small' color='warning'>
          <Label>35lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.thirtyFive}
          </IonBadge>
        </IonButton>
      ) : null}
      {/* 25lb Plates */}
      {plateNumbers.twentyFive ? (
        <IonButton size='small' color='success'>
          <Label>25lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.twentyFive}
          </IonBadge>
        </IonButton>
      ) : null}
      {/* 10lb Plates */}
      {plateNumbers.ten ? (
        <IonButton size='small' color='dark'>
          <Label>10lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.ten}
          </IonBadge>
        </IonButton>
      ) : null}
      {/* 5lb Plates */}
      {plateNumbers.five ? (
        <IonButton size='small' color='danger'>
          <Label>5lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.five}
          </IonBadge>
        </IonButton>
      ) : null}
      {/* 2.5lb Plates */}
      {plateNumbers.five ? (
        <IonButton size='small' color='light'>
          <Label>2.5lb</Label>
          <IonBadge color='danger' slot='end'>
            {plateNumbers.twoPointFive}
          </IonBadge>
        </IonButton>
      ) : null}
    </Wrapper>
  );
};

export default PlateBadgeDisplay;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible !important;
  flex-wrap: wrap;
`;

const Label = styled(IonLabel)`
  margin-inline-end: 10px;
`;
