import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4cf76086-5b3e-4196-a83a-0acccab9fa47',
};

export const sampleWithPartialData: IAuthority = {
  name: '8e1c6049-a0a4-493d-99de-acd0f996374f',
};

export const sampleWithFullData: IAuthority = {
  name: '25ebf422-8074-4841-ba67-d6115b8a3ff5',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
