import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 23187,
  date: dayjs('2015-08-05T08:37'),
  amount: 30592.69,
};

export const sampleWithPartialData: IOperation = {
  id: 27822,
  date: dayjs('2015-08-04T14:09'),
  amount: 15544.22,
};

export const sampleWithFullData: IOperation = {
  id: 11679,
  date: dayjs('2015-08-04T16:17'),
  description: 'oddly insecure squiggly',
  amount: 23868.02,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T05:42'),
  amount: 29811.84,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
