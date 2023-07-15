import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 4361,
  label: 'SUV Buckinghamshire',
};

export const sampleWithPartialData: ILabel = {
  id: 9004,
  label: 'Trigender ouch plum',
};

export const sampleWithFullData: ILabel = {
  id: 41601,
  label: 'Strategist Reunion',
};

export const sampleWithNewData: NewLabel = {
  label: 'Royce Electric',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
