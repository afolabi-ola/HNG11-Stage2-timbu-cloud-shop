import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className='logo'>
      <p>Flexmart</p>
      <p className='logo-icon'>
        <FontAwesomeIcon icon={faShoppingCart} />
      </p>
    </div>
  );
};

export default Logo;
