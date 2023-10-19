import styles from './Card.module.css';
//import { Component } from 'react';

export default function Card({ name, model, manufacturer }: Record<string, string>) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <h4>{model}</h4>
      <h4>{manufacturer}</h4>
    </div>
  );
}

// export default class Card extends Component {
//   name: string;
//   model: string;
//   manufacturer: string;
//   constructor(props: Record<string, string>) {
//     super(props);
//     this.name = props.name;
//     this.model = props.model;
//     this.manufacturer = props.manufacturer;
//   }

//   render() {
//     return (
//       <div className={styles.card}>
//         <h2>{this.name}</h2>
//         <h4>{this.model}</h4>
//         <h4>{this.manufacturer}</h4>
//       </div>
//     );
//   }
// }
