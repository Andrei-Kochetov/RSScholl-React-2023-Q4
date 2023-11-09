import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/character/1', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        location: {
          name: 'Citadel of Ricks',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      // {
      //   id: 2,
      //   name: 'Morty Smith',
      //   status: 'Alive',
      //   species: 'Human',
      //   gender: 'Male',
      //   location: {
      //     name: 'Citadel of Ricks',
      //   },
      //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      // },
    ]);
  }),
  http.get('https://rickandmortyapi.com/api/character/', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        location: {
          name: 'Citadel of Ricks',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        location: {
          name: 'Citadel of Ricks',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
    ]);
  }),
];
