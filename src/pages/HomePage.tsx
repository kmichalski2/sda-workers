import { useEffect, useState } from "react";
import "./HomePage.css";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";
import { Employee, EmployeeStatus } from "../models/Employee";

// DTO - Data Transfer Object
export interface EmployeeDTO {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: string;
  birthdate: string;
  address: string;
  city: string;
  postalcode: string;
  phonenumber: string;
}

function HomePage() {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then((employees: EmployeeDTO[]) => {
      
      const data: Employee[] = employees.map(item => {
        return {
          ...item,
          birthdate: new Date(item.birthdate),
          status: item.status as EmployeeStatus
        }
      })

      setData(data);
    })
  }, []);

  return (
    <>
        <header className="d-flex justify-content-between align-items-center mb-2">
          <h1>Employees</h1>
          <Link className="btn btn-success" to={'add'}>Add</Link>
        </header>

        { data.length > 0 ? <Table data={data}></Table> : ''}
    </>
  );
}

export default HomePage;
