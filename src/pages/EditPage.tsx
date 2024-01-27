import { useLocation, useNavigate } from "react-router-dom";
import { Employee } from "../models/Employee";
import { STATUS_OPTIONS, StatusOption } from "../models/StatusOption";
import { useState } from "react";
import { makeEmployee } from "../services/Employee";
import { updateEmployee } from "../services/API";
import { useTranslation } from "react-i18next";

export function EditPage() {
  const { t }= useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
   // TODO: Improve loading of employee in case it is not passed
   const data: Employee = location.state;
  const [statusOptions] = useState<StatusOption[]>(STATUS_OPTIONS)
  const [formData, setFormData] = useState({...data});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const newEmployee = makeEmployee(formData);

    updateEmployee(data.id, newEmployee).then(() => {
      navigate("/");
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
      <h3>{t("edit_page_title")}</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="firstname" className="form-label">
              {t("firstname")}
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="lastname" className="form-label">
            {t("lastname")}
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
            {t("birthdate")}
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
            {t("phonenumber")}
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
            {t("address")}
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
            {t("city")}
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
            {t("postalcode")}
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
        </div>

        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="salary" className="form-label">
            {t("salary")}
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
            {t("status")}
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
          <button type="submit" className="btn btn-primary">{t("save")}</button>
        </footer>
      </form>
    </>
  );
}
