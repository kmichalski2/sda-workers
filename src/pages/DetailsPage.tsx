import { useLocation } from "react-router-dom";
import { Employee } from "./HomePage";

export function DetailsPage() {
  const location = useLocation();

  // TODO: Improve loading of employee in case it is not passed
  const data: Employee = location.state;

  return (
    <>
      <h3>Details</h3>
      <div className="mb-3 row">
        <div className="col">
          <label htmlFor="firstname" className="form-label">
            Firstame
          </label>
          <input
            className="form-control"
            type="text"
            id="firstname"
            value={data.firstname}
            readOnly
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
            value={data.lastname}
            readOnly
          />
        </div>
        <div className="col">
          <label htmlFor="birthdate" className="form-label">
            Birthdate
          </label>
          <input
            className="form-control"
            type="text"
            id="firstname"
            value={data.birthdate.toLocaleDateString()}
            readOnly
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
            value={data.phonenumber}
            readOnly
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
            value={data.address}
            readOnly
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
            value={data.city}
            readOnly
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
            value={data.postalcode}
            readOnly
          />
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
            value={data.salary}
            readOnly
          />
        </div>
        <div className="col">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            className="form-control"
            type="text"
            id="status"
            value={data.status}
            readOnly
          />
        </div>
      </div>
    </>
  );
}
