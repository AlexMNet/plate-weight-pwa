import styled from 'styled-components';
import { IonButton, IonBadge, IonLabel } from '@ionic/react';

const PlateBadgeDisplay: React.FC = () => {
  return (
    <Wrapper>
      <IonButton size='small' color='primary'>
        <Label>45lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
      <IonButton size='small' color='warning'>
        <Label>35lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
      <IonButton size='small' color='success'>
        <Label>25lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
      <IonButton size='small' color='danger'>
        <Label>10lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
      <IonButton size='small' color='dark'>
        <Label>5lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
      <IonButton size='small' color='light'>
        <Label>2.5lb</Label>
        <IonBadge color='danger' slot='end'>
          1
        </IonBadge>
      </IonButton>
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
