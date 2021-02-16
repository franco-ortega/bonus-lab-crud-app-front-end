export const getMice = () => {
  return fetch('https://calm-falls-24000.herokuapp.com/api/v1/mice/', {
    method: 'GET',
  })
    .then(res => res.json());
};
