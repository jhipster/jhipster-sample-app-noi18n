import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 3447,
  date: dayjs('2015-08-04T22:55'),
  amount: 25850,
};

export const sampleWithPartialData: IOperation = {
  id: 19897,
  date: dayjs('2015-08-05T05:57'),
  amount: 7251,
};

export const sampleWithFullData: IOperation = {
  id: 522,
  date: dayjs('2015-08-05T01:12'),
  description: 'Southeast',
  amount: 11468,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T16:00'),
  amount: 22956,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
