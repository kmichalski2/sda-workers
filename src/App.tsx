import { useState } from "react";
import "./App.css";

export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: EmployeeStatus;
}

export type EmployeeStatus = 'SICK_LEAVE' | 'AVAILABLE';


export const mockData: Employee[] = [
  {
    id: '1',
    firstname: 'Jan',
    lastname: 'Kowalski',
    salary: 5000,
    status: 'SICK_LEAVE'
  },
  {
    id: '2',
    firstname: 'Adam',
    lastname: 'Nowak',
    salary: 10000,
    status: 'AVAILABLE'
  }
]

function App() {
  const [data] = useState(mockData);

  return (
    <>
      <div>
        <h1>Workers</h1>
        {data.map(item => <p>{item.firstname + ' ' + item.lastname}</p>)}
      </div>
    </>
  );
}

export default App;
