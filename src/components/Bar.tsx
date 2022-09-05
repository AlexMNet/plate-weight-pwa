import styled from 'styled-components';
import Plate from './Plate';

const Bar: React.FC = () => {
  return (
    <Wrapper>
      <Barbell>
        <BarLeft>
          <Plate color='#0F52BA' width='15px' height='65px' />
          <Plate color='#FCF55F' width='15px' height='65px' />
          <Plate color='#009E60' width='15px' height='65px' />
          <Plate color='#880808' width='9px' height='43px' />
          <Plate color='#FAF9F6' width='9px' height='33px' />
          <Plate color='#000000' width='6px' height='25px' />
        </BarLeft>
        <BarRight>
          <Plate color='#0F52BA' width='15px' height='65px' />
          <Plate color='#FCF55F' width='15px' height='65px' />
          <Plate color='#009E60' width='15px' height='65px' />
          <Plate color='#880808' width='9px' height='43px' />
          <Plate color='#FAF9F6' width='9px' height='33px' />
          <Plate color='#000000' width='6px' height='25px' />
        </BarRight>
      </Barbell>
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
  padding: 100px 0;
`;

const Barbell = styled.div`
  width: 20rem;
  height: 0.31rem;
  background-color: #595959;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
