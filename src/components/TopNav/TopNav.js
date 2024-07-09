import './TopNav.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';



const TopNav = () => {
  return (
    <div className='top-nav'>
      <Logo />
      <Search />
      <div className='topnavbtn'>
        <Button bgColor='#ff0000' link='/cart' color='#ffffff' text='My Cart' width='7em' height='3em'>
          <span>My Cart</span>
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
