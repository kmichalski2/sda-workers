import { useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from '../pages/HomePage';
import React, { useState } from 'react';

export function Table(props: { data: Employee[] }) {
  const [filteredData, setFilteredData] = useState(props.data);
  const [sortDirection, setSortDirection] = useState('none');
  const [sortBy, setSortBy] = useState<null | keyof Employee>(null);


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

  const findByPhrase = (columns: string[], item: { [key: string]: string}, phrase: string): boolean => {
    let result = false;  
    columns.forEach(key => {
        const field = item[key];
        if (field.toLowerCase().includes(phrase)) {
          result = true;
          return;
        }
      });
      return result;
  }

  const handleSearchType = (event: React.KeyboardEvent): void => {
    const input = event.target as HTMLInputElement;
    const phrase = input.value.toLowerCase();
    const columns = ['lastname', 'firstname', 'phonenumber', 'address'];

    const data = props.data.filter(item => {
        // Basic Example
        // return item.lastname.toLowerCase().includes(phrase) 
        // || item.firstname.toLowerCase().includes(phrase)
        // || item.phonenumber.includes(phrase)

        // More advanced
        return findByPhrase(columns, item as unknown as { [key: string]: string}, phrase);
    }
        );
    setFilteredData(data);
  }

  const sortAsc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] > b[key]) {
      return 1;
    }

    if (a[key] < b[key]) {
      return -1;
    }

    return 0;
  }

  const sortDesc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] < b[key]) {
      return 1;
    }

    if (a[key] > b[key]) {
      return -1;
    }

    return 0;
  }

  const handleHeaderColumnClick = (event: React.MouseEvent, key: keyof Employee): void => {
      event.preventDefault();
      let sortedData = [...filteredData];
      let tempSortDirection = sortDirection;

      if (key !== sortBy) {
        tempSortDirection = 'none';
      }

      setSortBy(key);

      if (tempSortDirection === 'none') {
        setSortDirection('asc');
        sortedData = sortedData.sort((a,b) => sortAsc(a, b, key)); 
      } else if (tempSortDirection === 'asc') {
        setSortDirection('desc');
       sortedData = sortedData.sort((a, b) => sortDesc(a, b, key));
      } else {
        setSortDirection('none');
        sortedData = props.data;
      }

      setFilteredData([...sortedData]);
  }

  const renderSortIcon = (key: keyof Employee): string => {
    if (key === sortBy) {
      switch (sortDirection) {
        case 'asc':
          return '⬇️';
        case 'desc':
          return '⬆️';
        default:
          return ''
      }
    }
    return '';
  }

  return (
    <>
      <div className="mb-3">
        <input onKeyUp={handleSearchType} placeholder="Type any employee data..." type="search" className="form-control" />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th className="clickable" onClick={(event) => handleHeaderColumnClick(event, "id")}>ID {renderSortIcon("id")}</th>
            <th className="clickable" onClick={(event) => handleHeaderColumnClick(event, "firstname")}>Firstname {renderSortIcon("firstname")}</th>
            <th className="clickable" onClick={(event) => handleHeaderColumnClick(event, "lastname")}>Lastname {renderSortIcon("lastname")}</th>
            <th className="clickable" onClick={(event) => handleHeaderColumnClick(event, "salary")}>Salary {renderSortIcon("salary")}</th>
            <th className="clickable" onClick={(event) => handleHeaderColumnClick(event, "status")}>Status {renderSortIcon("status")}</th>
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
