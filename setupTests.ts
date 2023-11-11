import '@testing-library/jest-dom';
import { beforeAll, afterAll } from 'vitest';
import { server } from './src/mocks/node';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
