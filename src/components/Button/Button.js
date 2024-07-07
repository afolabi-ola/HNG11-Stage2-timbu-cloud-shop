import './Button.css';

const Button = ({
  children,
  bgColor = '#000000',
  color = '#ffffff',
  width = '5em',
}) => {
  const styles = {
    backgroundColor: bgColor,
    color: color,
    width: width,
  };

  return (
    <div className='button'>
      <button style={styles}>{children}</button>
    </div>
  );
};

export default Button;
