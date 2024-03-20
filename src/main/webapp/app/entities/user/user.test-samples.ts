import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 15163,
  login: '8~@T\\eWZX\\AuMkAcJ\\H7\\qYn8\\7Ryb',
};

export const sampleWithPartialData: IUser = {
  id: 31817,
  login: 'ISg8k',
};

export const sampleWithFullData: IUser = {
  id: 23781,
  login: 'ZfP8M@x\\`kc',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
