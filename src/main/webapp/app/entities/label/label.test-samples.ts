import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 17221,
  label: 'why whether exhausted',
};

export const sampleWithPartialData: ILabel = {
  id: 18141,
  label: 'yet',
};

export const sampleWithFullData: ILabel = {
  id: 14884,
  label: 'piglet sizzle',
};

export const sampleWithNewData: NewLabel = {
  label: 'calmly adventurously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
