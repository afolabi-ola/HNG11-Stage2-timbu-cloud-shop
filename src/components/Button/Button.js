import './Button.css';
import { useNavigate, redirect } from 'react-router-dom';


const Button = ({
  children,
  bgColor = '#000000',
  color = '#ffffff',
  width = '5em',
  height = '100%',
  link
}) => {
  console.log(link);
  const styles = {
    backgroundColor: bgColor,
    color: color,
    width: width,
    height: height,
  };

    const navigate = useNavigate();
  return (
    <div className='button'>
      <button onClick={() => navigate(link)} style={styles}>
        {children}
      </button>
    </div>
  );
};

export default Button;
