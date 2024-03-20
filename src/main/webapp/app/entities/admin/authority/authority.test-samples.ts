import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '526a31fd-fc6a-40ec-9df4-aabfca730d6f',
};

export const sampleWithPartialData: IAuthority = {
  name: 'cc509883-4bc8-440c-bc1e-20d16194eb1a',
};

export const sampleWithFullData: IAuthority = {
  name: '0b5d2295-e09b-4486-9ebd-c3ab852805ee',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
