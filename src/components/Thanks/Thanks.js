import Button from '../Button/Button';
import './Thanks.css';

const Thanks = () => {
  return (
    <div className='thanks'>
      <div className='thank-symbol'>
        <p>&#10003;</p>
      </div>
      <div className='thanks-text'>
        <div>
          <p>Your Order Has Been Placed Successfully</p>
          <p> Thanks For Your Patronage</p>
        </div>
      </div>
      <div className='thanks-btn'>
        <div>
          <Button width='90%' height='3em0' text='Back To Homepage'>
            Back To Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
