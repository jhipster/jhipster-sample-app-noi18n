import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 29156,
  date: dayjs('2015-08-04T22:16'),
  amount: 9410.21,
};

export const sampleWithPartialData: IOperation = {
  id: 522,
  date: dayjs('2015-08-05T01:12'),
  description: 'jewellery',
  amount: 4345.9,
};

export const sampleWithFullData: IOperation = {
  id: 26024,
  date: dayjs('2015-08-05T04:06'),
  description: 'roughly briskly',
  amount: 21611.46,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T07:27'),
  amount: 778.61,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
