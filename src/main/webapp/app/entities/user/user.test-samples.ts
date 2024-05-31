import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 4061,
  login: 'V|a4@QgXv\\9xsM\\|XPfVkY\\+A\\sZn4Pm\\AS6',
};

export const sampleWithPartialData: IUser = {
  id: 7128,
  login: 'V',
};

export const sampleWithFullData: IUser = {
  id: 30331,
  login: 'zEq@AjZ\\=9clbv',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
