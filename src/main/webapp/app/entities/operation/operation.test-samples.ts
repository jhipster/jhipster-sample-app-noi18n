import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 10521,
  date: dayjs('2015-08-04T22:55'),
  amount: 78889,
};

export const sampleWithPartialData: IOperation = {
  id: 60722,
  date: dayjs('2015-08-05T05:57'),
  description: 'East',
  amount: 13612,
};

export const sampleWithFullData: IOperation = {
  id: 7955,
  date: dayjs('2015-08-04T16:17'),
  description: 'ripe South',
  amount: 43099,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T12:30'),
  amount: 56892,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
