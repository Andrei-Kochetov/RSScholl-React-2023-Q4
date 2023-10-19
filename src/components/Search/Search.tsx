import styles from './Search.module.css';
import { BiSearchAlt } from 'react-icons/bi';

interface ISearchString {
  searchString: string;
  setSearchString(searchString: string): void;
  searchStringQuery(searchString: string): void;
}

export default function Seacrh({
  searchString,
  setSearchString,
  searchStringQuery,
}: ISearchString) {
  return (
    <div className={styles['search-section']}>
      <input
        type="text"
        className={styles['search-input']}
        value={searchString}
        placeholder="enter your request"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyUp={(e) => e.code === 'Enter' && searchStringQuery(searchString)}
      ></input>
      <button className={styles['search-button']} onClick={() => searchStringQuery(searchString)}>
        <BiSearchAlt className={styles['search-icon']}></BiSearchAlt>
      </button>
    </div>
  );
}
