import './TopBanner.css';
const TopBanner = () => {
  return (
    <div className='top-banner'>
      <div className='bannner-text'>
        <h1>
          We Sell The Best Of The Best <span>Quality Products</span>
        </h1>
        <p>
          We Specialize In All Kind Of Products, Offering A Friendly Price That
          Meets Everyone's Needs And Budget.
        </p>
      </div>
      <div className='banner-image'>
        <img src='/images/Frame 560.png' alt='' />
      </div>
    </div>
  );
};

export default TopBanner;
