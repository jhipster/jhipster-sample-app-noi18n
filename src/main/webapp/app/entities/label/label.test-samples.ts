import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 1429,
  label: 'supposing meanwhile',
};

export const sampleWithPartialData: ILabel = {
  id: 22711,
  label: 'through towards grown',
};

export const sampleWithFullData: ILabel = {
  id: 13985,
  label: 'mummify',
};

export const sampleWithNewData: NewLabel = {
  label: 'attest espadrille',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
