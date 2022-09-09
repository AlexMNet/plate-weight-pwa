import styled from 'styled-components';
import Plate from './Plate';

interface PlateProps {
  plateData: any;
}

const Bar: React.FC<PlateProps> = ({ plateData }) => {
  console.log(plateData || []);
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
