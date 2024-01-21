import { Employee, EmployeeStatus } from "../models/Employee"

export const makeEmployee = (formData: FormData): Omit<Employee, "id"> => {
    return {
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