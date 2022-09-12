import { RingLoader } from 'react-spinners';
import './userform.css';

const LoadingIndicator = (props) => {
  const data = props.data;
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        flexWrap: 'wrap',
      }}
      className="loader"
    >
      <RingLoader color={'#fff'} size={100} loading />
    </div>
  );
};

export default LoadingIndicator;
