import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartPage.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../CartItem/CartItem';
import Summary from '../Summary/Summary';

const CartPage = ({ cart }) => {
  console.log(cart);
  return (
    <div className='cart-page'>
      <div className='home'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>
          <a href='home'>Home</a>
        </span>
      </div>
      <h1>Shopping Cart</h1>
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
    </div>
  );
};
export default CartPage;
