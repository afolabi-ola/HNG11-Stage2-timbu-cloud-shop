import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/Header/Header';
import Cart from '../pages/cart';
import CheckOutPage from '../pages/checkoutPage';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Header />,
      },
    ],
  },
  {
    path: '/cart',
    element: <Cart />,
    children: [
      {
        path: '/cart',
        element: <Header />,
      },
    ],
  },
  {
    path: '/checkoutPage',
    element: <CheckOutPage />,
  },
]);

export default router;
