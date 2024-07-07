import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='overall-footer'>
      <div className='footer'>
        <div className='footer-list'>
          <div className='list-cont'>
            <h3>About Flexmart</h3>
            <ul>
              <li>
                <a href='contact us'>Contact Us</a>
              </li>
              <li>
                <a href='about us'>About Us</a>
              </li>
              <li>
                <a href='privacypolicy'>Privacy Policy</a>
              </li>
              <li>
                <a href='termsandcondition'>Terms & Conditions</a>
              </li>
              <li>
                <a href='officialstore'>Official Store</a>
              </li>
            </ul>
          </div>
          <div className='list-cont'>
            <h3>Payment</h3>
            <ul>
              <li>
                <a href='mastercard'>MasterCard</a>
              </li>
              <li>
                <a href='verve'>Verve</a>
              </li>
              <li>
                <a href='visa'>Visa</a>
              </li>
              <li>
                <a href='interswitch'>Interswitch</a>
              </li>
              <li>
                <a href='wallet'>Wallet</a>
              </li>
            </ul>
          </div>
          <div className='list-cont'>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href='servicecenter'>Service Center</a>
              </li>
              <li>
                <a href='reportaproduct'>Report A Product</a>
              </li>
              <li>
                <a href='returnpolicy'>Return Policy</a>
              </li>
              <li>
                <a href='faqs'>FAQs</a>
              </li>
              <li>
                <a href='digitalservices'>Digital Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-social-media'>
          <div>
            <h3>Join Us On</h3>
            <div className='social-media-icons'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faFacebookF} size='2x' />
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faXTwitter} size='2x' />
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
