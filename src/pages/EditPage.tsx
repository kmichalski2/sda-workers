import { useLocation, useNavigate } from "react-router-dom";
import { Employee, EmployeeStatus } from "./HomePage";
import { StatusOption } from "../models/StatusOption";
import { useState } from "react";
import { employeesUrl } from "../config";

export function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
   // TODO: Improve loading of employee in case it is not passed
   const data: Employee = location.state;
  const [statusOptions] = useState<StatusOption[]>([
    { label: 'On leave', value: 'ON_LEAVE' },
    { label: 'Hired', value: 'HIRED' },
    { label: 'Fired', value: 'FIRED' }
  ])
  const [firstname, setFirstname] = useState(data.firstname);
  const [formData, setFormData] = useState({...data});
 

  const makeEmployee = (formData: FormData): Employee => {
    return {
      id: data.id,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      birthdate: new Date(formData.get("birthdate") as string),
      phonenumber: formData.get("phonenumber") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      postalcode: formData.get("postalcode") as string,
      salary: +(formData.get("salary") as string),
      status: formData.get("status") as EmployeeStatus
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const newEmployee = makeEmployee(formData);

    fetch(employeesUrl + "/" + data.id, {
      method: "PUT",
      body: JSON.stringify(newEmployee)
    }).then(response => {
      if (response.ok) {
        navigate("/");
      } else {
        console.warn("Something went wrong");
      }
    }).catch(err => console.error(err));
  }

  const handleInputChange = (event: React.ChangeEvent): void => {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const key = input.name;

    const newFormData = { ...formData } as any;
    newFormData[key] = value;

    setFormData({...newFormData})
  }

  return (
    <>
      <h3>Edit Employee</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="firstname" className="form-label">
              Firstame
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              className="form-control"
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="birthdate" className="form-label">
              Birthdate
            </label>
            <input
              className="form-control"
              type="text"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate.toLocaleDateString()}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="phonenumber" className="form-label">
              Phone number
            </label>
            <input
              className="form-control"
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              className="form-control"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              className="form-control"
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="postalcode" className="form-label">
              Postal code
            </label>
            <input
              className="form-control"
              type="text"
              id="postalcode"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-control"
              id="status"
              name="status"
              onChange={handleInputChange}
            >
              { statusOptions.map(item => <option value={item.value} selected={item.value === formData.status}>{item.label}</option>)}
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              className="form-control"
              type="text"
              id="salary"
              name="salary"
              value={data.salary}
            />
          </div>
          <div className="col">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-control"
              id="status"
              name="status"
            >
              { statusOptions.map(item => <option value={item.value} selected={data.status === item.value}>{item.label}</option>)}
            </select>
          </div>
        </div>

        <footer>
          <button type="submit" className="btn btn-primary">Save</button>
        </footer>
      </form>
    </>
  );
}
