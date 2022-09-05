// import styled from 'styled-components';

interface PlateProps {
  color: string;
  width: string;
  height: string;
}

const Plate: React.FC<PlateProps> = ({ color, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        border: '1px solid gray',
        borderRadius: '3px',
      }}
    />
  );
};

export default Plate;

// const StyledPlate = styled.div`
//   background-color: ${(props) => props.color};
//   width: 15px;
//   height: 65px;
//   border-color: grey;
//   border-width: 1px;
//   border-radius: 3px;
// `;
