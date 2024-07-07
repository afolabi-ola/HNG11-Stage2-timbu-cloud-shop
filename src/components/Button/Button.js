import './Button.css';

const Button = ({ children, bgColor = '#000000', color = '#ffffff' }) => {
  const styles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className='button'>
      <button style={styles}>{children}</button>{' '}
    </div>
  );
};

export default Button;
