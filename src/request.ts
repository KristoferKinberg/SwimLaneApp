import data from './data.json';

/**export type APIPerson = {
  name: { first: string; last: string; title: string }
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
  processStage: string;
  picture: {
    large: string
    thumbnail: string
  }
}*/
export type APIPerson = {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  picture: string;
  email: string;
  processStage: string;
  dob: string;
  address: string;
}

export const fetchProducts = async (): Promise<APIPerson[]> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      // @ts-ignore
      resolve((data));
      console.log(data);
      reject({message: 'Error'});
    }, 750);
  });
}
