import styles from './Card.module.css';

interface ICardProps {
  name: string;
  model: string;
  manufacturer: string;
}

export default function Card({ name, model, manufacturer }: ICardProps) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <h4>{model}</h4>
      <h4>{manufacturer}</h4>
    </div>
  );
}
