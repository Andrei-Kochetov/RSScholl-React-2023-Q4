import { /* expect ,*/ test } from 'vitest';
import { render/*,  screen */ } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './components/Spinner';

test('adds 1 + 2 to equal 3', () => {
  render(<Spinner />);
});
