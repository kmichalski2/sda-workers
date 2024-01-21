import { EmployeeStatus } from "./Employee";

export interface StatusOption {
    label: string;
    value: EmployeeStatus;
  }

export const STATUS_OPTIONS: StatusOption[] = [
    { label: 'On leave', value: 'ON_LEAVE' },
    { label: 'Hired', value: 'HIRED' },
    { label: 'Fired', value: 'FIRED' }
  ]  