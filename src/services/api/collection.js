import { BASE_URL } from './users';

export const fetchCollections = () => {
  return fetch(`${BASE_URL}/api/collections`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch collections.');
      }
    })
    .then((data) => {
      return data.collections;
    });
};
