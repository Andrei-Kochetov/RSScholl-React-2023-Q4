import styles from './Card.module.css';

export default function Card({ name, model, manufacturer }: Record<string, string>) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <h4>{model}</h4>
      <h4>{manufacturer}</h4>
    </div>
  );
}
