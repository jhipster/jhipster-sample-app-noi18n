import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 21253,
  name: 'boohoo hence',
  balance: 10773.01,
};

export const sampleWithPartialData: IBankAccount = {
  id: 25206,
  name: 'gadzooks zowie',
  balance: 18870.58,
};

export const sampleWithFullData: IBankAccount = {
  id: 8896,
  name: 'decelerate',
  balance: 26324.11,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'bah near',
  balance: 20982.46,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
