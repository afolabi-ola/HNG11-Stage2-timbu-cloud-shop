import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';


const CartItem = ({ item }) => {
  console.log(item);
  const handleClick = () => {
    console.log(true);
  };
  return (
    <div className='cartItem'>
      <div>
        <div className='cartNav'>
          <ul className='cart-nav-ul-one'>
            <li>Item Details</li>
          </ul>
          <ul className='cart-nav-ul-two'>
            <li>Quantity</li>
            <li>Price</li>
            <li>Action</li>
          </ul>
        </div>

        <div className='cartBody'>
          <div className='cartItemImage'>
            <div className='cart-img'>
              <img src={item.image} alt={item.image} />
            </div>
            <div className='cart-description'>
              <h2>{item.description}</h2>
            </div>
          </div>
          <div className='cart-info'>
            <div className='quantity-tab'>
              <button>-</button>
              <p>1</p>
              <button onClick={handleClick}>+</button>
            </div>
            <div className='cart-price-tab'>
              <p>#850,000</p>
            </div>
            <div className='action-tab'>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
