export interface User {
  id: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: 'male' | 'female' | 'do not wish to specify';
  createdTimeStamp: string;
  updatedTimeStamp?: string;
}
