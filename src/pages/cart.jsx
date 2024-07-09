import CartPage from '../components/CartPage/CartPage';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const Cart = () => {
  const userCart = [
    {
      id: 1,
      name: 'Apple Macbook Pro 17',
      price: '₦1850,000',
      image: '/images/AppleMacBook.png',
      description: 'MACBOOK Pro 17 Inch APPLE M3',
      quantity: 2,
      total: '��1,700,000',
    },
    {
      id: 2,
      name: 'Sony Headphone',
      price: '��125,000',
      image: '/images/SonyHeadPhone.png',
      description: 'MACBOOK pro 17 inch APPLE M3',
      quantity: 1,
      total: '��125,000',
    },
  ];
  return (
    <div>
      <div className='top-section'>
        <Outlet />
        <CartPage cart={userCart} />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
