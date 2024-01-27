import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { STATUS_OPTIONS, StatusOption } from "../models/StatusOption";
import { makeEmployee } from "../services/Employee";
import { createEmployee } from "../services/API";
import { useTranslation } from "react-i18next";

export function AddPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [statusOptions] = useState<StatusOption[]>(STATUS_OPTIONS);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const newEmployee = makeEmployee(formData);

    createEmployee(newEmployee)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <h3>{t("add_page_title")}</h3>

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
            />
          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">
              {t("city")}
            </label>
            <input className="form-control" type="text" id="city" name="city" />
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
            />
          </div>
          <div className="col">
            <label htmlFor="status" className="form-label">
              {t("status")}
            </label>
            <select className="form-control" id="status" name="status">
              {statusOptions.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>

        <footer>
          <button type="submit" className="btn btn-success">
            {t("add")}
          </button>
        </footer>
      </form>
    </>
  );
}
