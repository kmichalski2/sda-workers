import { useEffect, useState } from "react";
import "./HomePage.css";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";
import { Employee, EmployeeStatus } from "../models/Employee";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/LangaugeSelector";

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
  const { t } = useTranslation();

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
        <header className="d-flex flex-column flex-md-row  justify-content-between align-items-stretch align-items-md-center mb-5 mb-md-2">
          <h1>{ t("employees") }</h1>
          <div className="d-flex gap-2">
            <Link data-testid="add-button" className="btn btn-success flex-grow-1" to={'add'}>{t("add")}</Link>
            <LanguageSelector></LanguageSelector>
          </div>
        </header>

        { data.length > 0 ? <Table data={data}></Table> : ''}
    </>
  );
}

export default HomePage;
