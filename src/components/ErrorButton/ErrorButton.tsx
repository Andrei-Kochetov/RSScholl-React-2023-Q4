import { useState } from 'react';
import styles from './ErrorButton.module.css';
export default function ErrorButton() {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    throw new Error('Error');
  }
  return (
    <button onClick={() => setHasError(true)} className={styles['error-button']}>
      Error button
    </button>
  );
}
