import './SubmitButton.css';
const SubmitButton = ({ buttonText }) => {
  return (
    <div className='submit-button'>
      <input type='submit' value={buttonText} />
    </div>
  );
};

export default SubmitButton;
