import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 24834,
  name: 'valiantly Greenland Rhodium',
  balance: 30079,
};

export const sampleWithPartialData: IBankAccount = {
  id: 32705,
  name: 'South Books',
  balance: 23330,
};

export const sampleWithFullData: IBankAccount = {
  id: 19313,
  name: 'Southeast Direct female',
  balance: 22412,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Tricycle',
  balance: 12786,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
