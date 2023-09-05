import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 3447,
  date: dayjs('2015-08-04T22:55'),
  amount: 25849.73,
};

export const sampleWithPartialData: IOperation = {
  id: 19897,
  date: dayjs('2015-08-05T05:57'),
  amount: 7251.4,
};

export const sampleWithFullData: IOperation = {
  id: 522,
  date: dayjs('2015-08-05T01:12'),
  description: 'jewellery',
  amount: 4345.9,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T17:47'),
  amount: 11937.41,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
