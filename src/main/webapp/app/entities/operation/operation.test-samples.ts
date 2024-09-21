import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 4460,
  date: dayjs('2015-08-05T09:24'),
  amount: 28452.18,
};

export const sampleWithPartialData: IOperation = {
  id: 4346,
  date: dayjs('2015-08-04T21:35'),
  description: 'quash',
  amount: 778.61,
};

export const sampleWithFullData: IOperation = {
  id: 4080,
  date: dayjs('2015-08-04T22:59'),
  description: 'till',
  amount: 18566.42,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T11:50'),
  amount: 29991.63,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
