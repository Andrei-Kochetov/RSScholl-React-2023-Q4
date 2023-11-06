import '@testing-library/jest-dom';
import { beforeAll, afterAll /* afterEach, beforeEach */ } from 'vitest';
import { server } from './src/mocks/node';
// import { drop } from "@mswjs/data";
// import { client } from "./ApolloClient";
// import { db } from "./mockServer/db";

beforeAll(() => {
  server.listen();
});

/* beforeEach(() => {
  return client.clearStore();
});

afterEach(() => {
  //drop(db);
  server.resetHandlers();
}); */

afterAll(() => {
  server.close();
});
