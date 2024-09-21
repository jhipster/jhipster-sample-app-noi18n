import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 28798,
  name: 'festival',
  balance: 2949.85,
};

export const sampleWithPartialData: IBankAccount = {
  id: 20798,
  name: 'across advocate scrabble',
  balance: 8327.9,
};

export const sampleWithFullData: IBankAccount = {
  id: 13214,
  name: 'mmm',
  balance: 6092.05,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'procurement boo baggy',
  balance: 16675.88,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
