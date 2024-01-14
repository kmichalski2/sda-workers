import { useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from './App';

export function Table(props: { data: Employee[] }) {
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

  return (
    <>
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
          {props.data.map((item) => (
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
