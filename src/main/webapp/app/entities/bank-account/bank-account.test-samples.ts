import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 75788,
  name: 'urban Glendora female',
  balance: 91794,
};

export const sampleWithPartialData: IBankAccount = {
  id: 99808,
  name: 'Berkshire red',
  balance: 71198,
};

export const sampleWithFullData: IBankAccount = {
  id: 58938,
  name: 'applications Northwest Research',
  balance: 70716,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Officer Tricycle',
  balance: 39022,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
