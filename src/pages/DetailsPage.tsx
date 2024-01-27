import { useLocation } from "react-router-dom";
import { Employee } from "../models/Employee";
import { formatDate } from "../services/Date";
import { useTranslation } from "react-i18next";

export function DetailsPage() {
  const { t } = useTranslation();
  const location = useLocation();

  // TODO: Improve loading of employee in case it is not passed
  const data: Employee = location.state;
  return (
    <>
      <h3>{t("details_page_title")}</h3>
      <div className="mb-3 row">
        <div className="col">
          <label htmlFor="firstname" className="form-label">
            {t("firstname")}
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
            {t("lastname")}
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
            {t("birthdate")}
          </label>
          <input
            className="form-control"
            type="text"
            id="firstname"
            value={formatDate(data.birthdate)}
            readOnly
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
            value={data.phonenumber}
            readOnly
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
            value={data.address}
            readOnly
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
            value={data.city}
            readOnly
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
            value={data.postalcode}
            readOnly
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
            value={data.salary}
            readOnly
          />
        </div>
        <div className="col">
          <label htmlFor="status" className="form-label">
            {t("status")}
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
