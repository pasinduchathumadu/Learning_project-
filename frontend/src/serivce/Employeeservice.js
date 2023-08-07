/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

const EMPLOYEE_API_BASE_URL ="http://localhost:8080/api/v1/employees"


const EMPLOYEE_API_BASE_URL1 ="http://localhost:8080/api/v1/create"

const EMPLOYEE_API_BASE_URL2 ="http://localhost:8080/api/v1/update"

const EMPLOYEE_API_BASE_URL3 ="http://localhost:8080/api/v1/delete"

class Employeeservice {
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL1,employee)
    }
    updateEmployee(id,employeedetails){
        return axios.put(EMPLOYEE_API_BASE_URL2+'/'+id,employeedetails)
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL3+'/'+id)
    }
}

export default new Employeeservice()