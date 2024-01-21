import { employeesUrl } from "../config";
import { Employee } from "../models/Employee";

export const createEmployee = (newEmployee: Omit<Employee, "id">): Promise<Employee | never> => {
    return fetch(employeesUrl, {
        method: "POST",
        body: JSON.stringify(newEmployee)
      }).then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
}

export const updateEmployee = (id: string, employeeData: Omit<Employee, "id">): Promise<Employee | never> => {
    return fetch(employeesUrl + "/" + id, {
        method: "PUT",
        body: JSON.stringify(employeeData)
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
}