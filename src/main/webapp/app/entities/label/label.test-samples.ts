import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 1941,
  label: 'jaggedly broadly',
};

export const sampleWithPartialData: ILabel = {
  id: 3788,
  label: 'unlike extremely experience',
};

export const sampleWithFullData: ILabel = {
  id: 20019,
  label: 'beneath fatally next',
};

export const sampleWithNewData: NewLabel = {
  label: 'jealously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
