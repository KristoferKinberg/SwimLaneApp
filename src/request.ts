import data from './data.json';

export type APIPerson = {
  name: { first: string; last: string; title: string }
  login: { uuid: string }
  id: number;
  dob: {
    age: number;
    date: string;
  }
  location: {
    street: {
      number: number
      name: string
    }
    postcode: string | number
    city: string
    country: string
  }
  email: string
  phone: string
  cell: string
  picture: {
    large: string
    thumbnail: string
  }
}

export const fetchProducts = async (): Promise<APIPerson[]> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((data));
      reject({message: 'Error'});
    }, 750);
  });
}
