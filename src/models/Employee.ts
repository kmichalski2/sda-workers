export type EmployeeStatus = 'ON_LEAVE' | 'HIRED' | 'FIRED';

export interface Employee {
    id: string;
    firstname: string;
    lastname: string;
    salary: number;
    status: EmployeeStatus;
    birthdate: Date;
    address: string;
    city: string;
    postalcode: string;
    phonenumber: string;
  }