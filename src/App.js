import './App.css';
import Header from './components/Header/Header';
import TopBanner from './components/TopBanner/TopBanner';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
const App = () => {
  const topSellingProducts = [
    {
      id: 1,
      name: 'SAMSUNG Galaxy S21 Ultra 5G',
      price: '₦525,000',
      image: '/images/SamsungS21.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 2,
      name: 'SONY Headphone',
      price: '₦125,000',
      image: '/images/SonyHeadPhone.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 3,
      name: 'APPLE Macbook Pro 17',
      price: '₦850,000',
      image: '/images/AppleMacBook.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 4,
      name: 'HISENSE Smart Tv',
      price: '₦250,000',
      image: '/images/HisenseSmartTv.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 5,
      name: 'Electronic Standing Fan',
      price: '₦50,000',
      image: '/images/ElectronicStandingFan.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 6,
      name: 'HISENSE Air Conditioner',
      price: '₦125,000',
      image: '/images/HisenseAirConditioner.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 7,
      name: 'PANASONIC Microwave',
      price: '₦120,000',
      image: '/images/PanasonicMicroWave.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
    {
      id: 8,
      name: 'Solar Panel',
      price: '₦300,000',
      image: '/images/SolarPanel.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Top Selling Products',
    },
  ];

  const discountSales = [
    {
      id: 1,
      name: 'Industrial Freezer',
      price: '₦200,000',
      image: '/images/IndustrialFreezer.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 2,
      name: 'JBL Bluetooth Speaker',
      price: '₦120,000',
      image: '/images/JBLBluetoothSpeaker.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 3,
      name: 'PANASONIC Refrigerator',
      price: '₦850,000',
      image: '/images/PanasonicRefrigerator.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 4,
      name: 'PANASONIC Air Conditioner',
      price: '₦120,000',
      image: '/images/PanasonicAirConditioner.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 5,
      name: 'ITEL Vision 1',
      price: '₦40,000',
      image: '/images/ItelVision.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 6,
      name: 'SONY Audio Player',
      price: '₦70,000',
      image: '/images/SonyAudioPlayer.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 7,
      name: 'PANASONIC Washing Machine',
      price: '₦120,000',
      image: '/images/PanasonicWashingMachine.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
    {
      id: 8,
      name: 'Electric Cooker',
      price: '₦20,000',
      image: '/images/ElectricCooker.png',
      description: 'SAMSUNG Galaxy S21Ultra 5G',
      salesType: 'Discount Sales',
    },
  ];

  return (
    <div className='app'>
      <div className='top-section'>
        <Header />
        <TopBanner />
        <Products
          products={topSellingProducts}
          productHeading='Top Selling Products'
        />
        <Products products={discountSales} productHeading='Discount Sales' />
      </div>
      <Footer />
    </div>
  );
};

export default App;
