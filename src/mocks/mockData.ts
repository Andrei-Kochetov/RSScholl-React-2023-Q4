export const mockCards = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];

export const mockCardDescription = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  location: {
    name: 'Citadel of Ricks',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

export const mockSearchString = '';

// export function mockGetCardDescription(cardId: string) {
//   let isMadeRequest: boolean;
//    fetch(
//     `https://rickandmortyapi.com/api/character/${cardId}`
//   ).then((response) => {
//     if (response.status) {
//       isMadeRequest = true
//     } else {
//       isMadeRequest = false
//     }
//     console.log(response.status, 'status')
//     return response
//   }).then(resp=>resp.json())
//   .then(resp=> console.log(resp, 'resp'));

// }
