import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, redirect } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

  return (
    <div className='logo-overall'>
      <div className='icon1'>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className='logo'>
        <p>Flexmart</p>
        <p className='logo-icon'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </p>
      </div>
      <div className='icon2'>
        <FontAwesomeIcon icon={faUser} />
      </div>
      {/* <div className='icon3'>
        <FontAwesomeIcon onClick={() => navigate('/cart')} icon={faShoppingCart} />
      </div> */}
    </div>
  );
};

export default Logo;
