import styles from './ErrorButton.module.css';
import { Component } from 'react';

export default class ErrorButton extends Component {
  state = { hasError: false };

  handlerClick() {
    return () => this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      throw new Error('Custom error');
    }

    return (
      <button onClick={this.handlerClick} className={styles['error-button']}>
        Error button
      </button>
    );
  }
}
