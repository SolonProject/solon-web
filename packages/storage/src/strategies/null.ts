import { IStorageStrategy } from '../types';

export class Null implements IStorageStrategy {
  start = () => {
    return new Promise<boolean>(resolve => resolve(true));
  }

  stop = () => {
    return new Promise<boolean>(resolve => resolve(true));
  }
}