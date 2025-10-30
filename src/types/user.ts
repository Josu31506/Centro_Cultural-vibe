export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  cellphone?: string;
  roles?: string[];
}
