import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 24834,
  name: 'er per that',
  balance: 4110.87,
};

export const sampleWithPartialData: IBankAccount = {
  id: 23172,
  name: 'careful demur',
  balance: 16443.89,
};

export const sampleWithFullData: IBankAccount = {
  id: 22038,
  name: 'than fantasise feisty',
  balance: 8971.08,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'eat',
  balance: 775.37,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
