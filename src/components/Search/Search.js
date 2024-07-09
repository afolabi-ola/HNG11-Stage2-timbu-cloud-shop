import './Search.css';
import SearchInput from '../SearchInput/SearchInput';
// import SubmitButton from '../../SubmitButton/SubmitButton';
import SubmitButton from '../SubmitButton/SubmitButton';

const Search = () => {
  return (
    <form className='search'>
      <SearchInput searchPlaceholder='Search For Products, Brands And Categories' />
      <div className='searchbuttonwrap'>
        <SubmitButton buttonText='Search' />
      </div>
    </form>
  );
};

export default Search;
