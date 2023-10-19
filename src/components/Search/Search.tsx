import styles from './Search.module.css';
import { BiSearchAlt } from 'react-icons/bi';
//import { Component } from 'react';
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

// export default class Seacrh extends Component {
//   name: string;
//   model: string;
//   manufacturer: string;
//   constructor(props: ISearchString) {
//     super(props);
//     this.name = props.name;
//     this.model = props.model;
//     this.manufacturer = props.manufacturer;
//   }

//   render() {
//     return (
//           <div className={styles['search-section']}>
//             <input
//               type="text"
//               className={styles['search-input']}
//               value={searchString}
//               placeholder="enter your request"
//               onChange={(e) => setSearchString(e.target.value)}
//               onKeyUp={(e) => e.code === 'Enter' && searchStringQuery(searchString)}
//             ></input>
//             <button className={styles['search-button']} onClick={() => searchStringQuery(searchString)}>
//               <BiSearchAlt className={styles['search-icon']}></BiSearchAlt>
//             </button>
//           </div>
//         );
//   }
// }