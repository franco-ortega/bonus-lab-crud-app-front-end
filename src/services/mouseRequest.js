const url = 'https://calm-falls-24000.herokuapp.com/api/v1/mice';

export const mouseRequest = (method, data, id, idDelete) => {
  console.log(data);
  console.log(id);

  if(method === 'GET') {
    return fetch(url, {
      method: `${method}`,
    })
      .then(res => res.json());
  } else if(method === 'POST'){
    return fetch(url, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json());
  } else if(method === 'PUT'){
    return fetch(`${url}/${id}`, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json());
  } else if(method === 'DELETE') {
    return fetch(`${url}/${idDelete}`, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json());
  }
};




export const getMice = () => {
  return fetch('https://calm-falls-24000.herokuapp.com/api/v1/mice/', {
    method: 'GET',
  })
    .then(res => res.json());
};





