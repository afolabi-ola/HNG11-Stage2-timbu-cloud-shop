import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <div className='all-categories'>
        <p>
          <a href='AllCategories'>All Categories</a>
        </p>
        <FontAwesomeIcon icon={faBars} className='all-categories-icon' />
        <p>
          <a href='ComputerAndAccessories'>Computer And Accessories</a>
        </p>
      </div>
      <p>
        <a href='Electronics'>Electronics</a>
      </p>
      <p>
        <a href='PhonesAndTablets'>Phones And Tablets</a>
      </p>
      <p>
        <a href='HomeAppliances'>Home Appliances</a>
      </p>
    </div>
  );
};

export default BottomNav;
