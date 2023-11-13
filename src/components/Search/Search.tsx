import styles from './Search.module.css';
import searchIcon from '../../assets/search.png';
import { Context } from '../../context/context';
import { useContext } from 'react';
import { ISearchProps } from '../../types/interfaces';

export default function Search({ disabled }: ISearchProps) {
  const { searchString, setSearchString, setIsNewSearchCalled } =
    useContext(Context);

  function handlerKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    return event.code === 'Enter' && setIsNewSearchCalled(true);
  }

  function handlerClick() {
    setIsNewSearchCalled(true);
  }

  function handlerChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }

  return (
    <div className={styles['search-section']}>
      <input
        type="search"
        className={styles['search-input']}
        value={searchString}
        placeholder="search by name"
        disabled={disabled}
        onChange={handlerChange}
        onKeyUp={handlerKeyUp}
        data-testid={'input-search'}
      ></input>
      <button
        className={styles['search-button']}
        onClick={handlerClick}
        disabled={disabled}
        data-testid={'input-btn'}
      >
        <img
          className={styles['search-icon']}
          src={searchIcon}
          alt="search icon"
        ></img>
      </button>
    </div>
  );
}
