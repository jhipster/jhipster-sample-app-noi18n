import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4dc2fd7d-6802-4816-ad5a-b335e917986e',
};

export const sampleWithPartialData: IAuthority = {
  name: '53eab0ba-0cec-4bc6-ba2b-99df6a14c72a',
};

export const sampleWithFullData: IAuthority = {
  name: '82e31acf-6a0a-4469-a9a9-0da74c9138d6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
