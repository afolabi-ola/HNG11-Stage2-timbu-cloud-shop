import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartPage.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../CartItem/CartItem';
import Summary from '../Summary/Summary';
import Button from '../Button/Button';

const CartPage = ({ cart }) => {
  console.log(cart);
  return (
    <div className='cart-page'>
      <div className='home'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>
          <a href='/'>Home</a>
        </span>
      </div>
      <h1 className='cart-heading'>Shopping Cart</h1>
      <h1 className='cart-heading-summary'>Summary (2 Items)</h1>
      <div className='cart-container'>
        <div className='cart-sub-cont'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className='cart-sub2-cont'>
          <Summary sumBtnText='Proceed To Checkout' />
        </div>
      </div>
      <div className='cart-summary-subtotal'>
        <ul>
          <li>Subtotal</li>
          <li>#975,000</li>
        </ul>
        <Button
          text='Proceed To Checkout'
          width='100%'
          link='/checkoutPage'
          height='3em'
        >
          Proceed To Checkout
        </Button>
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
export default CartPage;
