import styles from './Search.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { Component } from 'react';

interface ISearchString {
  searchString: string;
  setSearchString(searchString: string): void;
  searchStringQuery(searchString: string): void;
  disabled: boolean;
}

export default class Search extends Component<ISearchString> {
  constructor(props: ISearchString) {
    super(props);
  }

  render() {
    const { searchString, setSearchString, searchStringQuery, disabled } = this.props;

    return (
      <div className={styles['search-section']}>
        <input
          type="text"
          className={styles['search-input']}
          value={searchString}
          placeholder="enter your request"
          disabled={disabled}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyUp={(e) => e.code === 'Enter' && searchStringQuery(searchString)}
        ></input>
        <button className={styles['search-button']} onClick={() => searchStringQuery(searchString)} disabled={disabled}>
          <BiSearchAlt className={styles['search-icon']}></BiSearchAlt>
        </button>
      </div>
    );
  }
}
