import { Employee } from "./HomePage";

export function AddPage() {
  const makeEmployee = (formData: FormData): Employee => {
    return {
      id: Date.now().toString(),
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      birthdate: new Date(formData.get("birthdate") as string),
      phonenumber: formData.get("phonenumber") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      postalcode: formData.get("postalcode") as string,
      salary: +(formData.get("salary") as string),
      status: 'AVAILABLE'
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const newEmployee = makeEmployee(formData);

    console.log(newEmployee);
  }

  return (
    <>
      <h3>Add Employee</h3>

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
              name="saray"
            />
          </div>
          {/* <div className="col">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <input
              className="form-control"
              type="text"
              id="status"
              readOnly
            />
          </div> */}
        </div>

        <footer>
          <button type="submit" className="btn btn-success">Add</button>
        </footer>
      </form>
    </>
  );
}