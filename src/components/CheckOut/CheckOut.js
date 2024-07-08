import './CheckOut.css';
import Logo from '../Logo/Logo';
import Summary from '../Summary/Summary';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

const CheckOut = () => {
  return (
    <div className='checkout-page'>
      <div className='checkout-nav'>
        <div className='checkoutlogo'>
          <Logo />
        </div>
        <div className='checkoutheadtext'>
          <h1>Checkout</h1>
        </div>
      </div>

      <div className='checkout-body'>
        <div className='checkout-sub1'>
          <div className='checkout-address'>
            <h1>Shipping Address</h1>
            <Button width='12em'>Add Shipping Address</Button>
          </div>
          <div className='checkout-delivery-option'>
            <h1>Delivery Option</h1>
            <div className='options'>
              <p>
                <input type='radio' name='delivery' id='delivery-same-day' />
                <label htmlFor='same day delivery'>Same Day Delivery</label>
              </p>
              <p>
                <input type='radio' name='delivery' id='delivery-three-day' />
                <label htmlFor='delivery between 3 business days'>
                  Delivery Between 3 Business Days
                </label>
              </p>
            </div>
          </div>

          <div className='payment'>
            <h1>Payment Method</h1>
            <p>
              <input type='radio' name='payment' id='mastercard' />
              <label htmlFor='pay with masterCard'>Pay With MasterCard</label>
            </p>
            <p>
              <input type='radio' name='payment' id='visa' />
              <label htmlFor='pay with visa'>Pay With Visa</label>
            </p>
            <p>
              <input type='radio' name='payment' id='verve' />
              <label htmlFor='pay with verve'>Pay With Verve</label>
            </p>
            <p>
              <input type='radio' name='payment' id='interswitch' />
              <label htmlFor='pay with interswitch'>Pay With Interswitch</label>
            </p>
          </div>
        </div>
        <div className='checkout-summarty'>
          <Summary sumBtnText='Place Order'/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckOut;
