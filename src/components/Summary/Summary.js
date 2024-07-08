import Button from '../Button/Button';
import './Summary.css';

const Summary = ({ sumBtnText }) => {
  return (
    <div className='summary'>
      <div className='summary-nav'>
        <ul>
          <li>Summary</li>
          <li>2Items</li>
        </ul>
      </div>
      <div className='summary-subtotal'>
        <ul>
          <li>Subtotal</li>
          <li>#975,000</li>
        </ul>
      </div>
      <div className='summary-total'>
        <ul>
          <li>Total</li>
          <li>#975,000</li>
        </ul>
      </div>
      <div className='summary-btn'>
        <Button text='Proceed To Checkout' width='100%' height='2.5em'>
          {sumBtnText}
        </Button>
      </div>

      <div className='summary-pay-with'>
        <p>Pay With</p>
        <ul>
          <li>
            <img
              src='/images/visa_inc_logo.svg.png'
              alt='/images/visa_inc_logo.svg.png'
            />
          </li>
          <li>
            <img src='/images/Group.png' alt='/images/Group.png' />
          </li>
          <li>
            <img src='/images/VERVE 1.png' alt='/images/VERVE 1.png' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
