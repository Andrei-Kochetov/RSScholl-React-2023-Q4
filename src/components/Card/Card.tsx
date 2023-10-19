import styles from './Card.module.css';
import { Component } from 'react';

interface ICardProps {
  name: string;
  model: string;
  manufacturer: string;
}

export default class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <h2>{this.props.name}</h2>
        <h4>{this.props.model}</h4>
        <h4>{this.props.manufacturer}</h4>
      </div>
    );
  }
}
