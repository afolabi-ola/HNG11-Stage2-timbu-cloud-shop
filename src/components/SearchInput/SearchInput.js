import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ searchPlaceholder }) => {
  return (
    <div className='search-input'>
      <FontAwesomeIcon icon={faSearch} />
      <input type='text' placeholder={searchPlaceholder} />
    </div>
  );
};

export default SearchInput;
