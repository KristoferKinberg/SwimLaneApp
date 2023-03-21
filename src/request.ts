import data from './data.json';
import {generateID} from "./utils/utils";


export type IP = {
  title: string;
  firstname: string;
  lastname: string;
  picture: string;
  email: string;
  processStage: string;
  dob: string;
  address: string;
}

export interface IProspect extends IP{
  id: number;
}

const CC_PROSPECTS = 'CC_PROSPECTS';

export const fetchProducts = async (): Promise<IProspect[]> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const localStorageData = window.localStorage.getItem(CC_PROSPECTS);
      if (!localStorageData) {
        window.localStorage.setItem(CC_PROSPECTS, JSON.stringify(data));
        // @ts-ignore
        resolve(data);
      }

      // @ts-ignore
      resolve(JSON.parse(localStorageData));
      reject({message: 'Error'});
    }, 750);
  });
};
console.log(window.localStorage.getItem(CC_PROSPECTS))

export const updateProspectReq = async (prospect: IProspect): Promise<IProspect> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const localStorageData = window.localStorage.getItem(CC_PROSPECTS);

      const d = localStorageData
        ? JSON.parse(localStorageData)
        : data;
      const newData = Object.values({
        ...d,
        [prospect.id]: prospect
      });

      console.log(newData)

      window.localStorage.setItem(CC_PROSPECTS, JSON.stringify(newData));
      // @ts-ignore
      resolve(newData);
      reject({message: 'Error'});
    }, 750);
  });
};

export const createProspectReq = async (prospect: IP): Promise<IProspect> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const localStorageData = window.localStorage.getItem(CC_PROSPECTS);
      const d = localStorageData
        ? JSON.parse(localStorageData)
        : data;

      const id = generateID()
      const newData = Object.values({
        ...d,
        [id]: {
          ...prospect,
          id,
        }
      });

      console.log(newData)

      window.localStorage.setItem(CC_PROSPECTS, JSON.stringify(newData));

      // @ts-ignore
      resolve(newData);
      reject({message: 'Error'});
    }, 250);
  });
}


