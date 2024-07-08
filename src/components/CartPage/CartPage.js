import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartPage.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  return (
    <div className='cart-page'>
      <div className='home'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>
          <a href='home'>Home</a>
        </span>
      </div>
      <h1>Shopping Cart</h1>
      {/* Add your cart page content here */}
    </div>
  );
};
export default CartPage;
