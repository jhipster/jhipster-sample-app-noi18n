import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 4061,
  login: 'wov',
};

export const sampleWithPartialData: IUser = {
  id: 27594,
  login: '-4@k',
};

export const sampleWithFullData: IUser = {
  id: 13905,
  login: 'nT',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
