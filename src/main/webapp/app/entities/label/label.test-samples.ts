import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 1429,
  label: 'SUV Southeast',
};

export const sampleWithPartialData: ILabel = {
  id: 2950,
  label: 'Trigender romance plum',
};

export const sampleWithFullData: ILabel = {
  id: 13632,
  label: 'Strategist Buckinghamshire',
};

export const sampleWithNewData: NewLabel = {
  label: 'Royce Electric',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
