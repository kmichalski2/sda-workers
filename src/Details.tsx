import { useLocation } from "react-router-dom";
import { Employee } from "./App";

export function Details() {
    const location = useLocation();
    const data: Employee =  location.state;

    return (
        <>
            <h3>Details</h3>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstame</label>
                <input className="form-control" type="text" id="firstname" value={data.firstname} readOnly />
            </div>
        </>
    )
}