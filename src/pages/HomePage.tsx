import { useState } from "react";
import "./HomePage.css";
import { Table } from "../components/Table";


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

export type EmployeeStatus = 'SICK_LEAVE' | 'AVAILABLE';


export const mockData: Employee[] = [
  {
    id: '1',
    firstname: 'Jan',
    lastname: 'Kowalski',
    salary: 5000,
    status: 'SICK_LEAVE',
    birthdate: new Date('1990-01-01'),
    address: 'Warszawska 12',
    city: 'Wrocław',
    postalcode: '30-130',
    phonenumber: '123123123'
  },
  {
    id: '2',
    firstname: 'Adam',
    lastname: 'Adamiec',
    salary: 10000,
    status: 'AVAILABLE',
    birthdate: new Date('1995-05-25'),
    address: 'Katowicka 23',
    city: 'Kraków',
    postalcode: '50-000',
    phonenumber: '321321321'
  }
]

function HomePage() {
  const [data] = useState(mockData);

  return (
    <>
        <h1>Employees</h1>
        <Table data={data}></Table>
    </>
  );
}

export default HomePage;
