import { useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from './App';
import React, { useState } from 'react';

export function Table(props: { data: Employee[] }) {
  const [filteredData, setFilteredData] = useState(props.data);
  const navigate = useNavigate();
  const renderStatus = (status: EmployeeStatus): string => {
    switch(status) {
        case "SICK_LEAVE":
            return '🤢';
        case "AVAILABLE":
            return '🙂';
        default:
            return '﹖';    
    }
  }

  const handleRowClick = (event: React.MouseEvent, item: Employee): void => {
    event.preventDefault();

    navigate("/details", { state: item });
  }

  const handleSearchType = (event: React.KeyboardEvent): void => {
    const input = event.target as HTMLInputElement;
    const phrase = input.value.toLowerCase();

    const data = props.data.filter(item => {
        return item.lastname.toLowerCase().includes(phrase) 
        || item.firstname.toLowerCase().includes(phrase)}
        );
    setFilteredData(data);
  }

  return (
    <>
      <div className="mb-3">
        <input onKeyUp={handleSearchType} placeholder="Type any employee data..." type="search" className="form-control" />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr className="clickable" key={item.id} onClick={(event) => handleRowClick(event, item)}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.salary}</td>
              <td>{renderStatus(item.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
