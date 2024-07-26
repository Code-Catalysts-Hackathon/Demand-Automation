import axiosApiClient from '../../config/axiosConfig';
import withLayout from '../../layouts/withLayout';
import React, { useEffect, useState } from 'react';

interface Employee {
  id: number;
  name: string;
  mobile: string;
  email: string;
  platformName: string;
  labName: string;
  featureTeam: string;
  businessUnit: string;
  grade:string;
  jobTitle:string;
}

const EmployeePage: React.FC = () => {
  const [employee, setEmployee] = useState([]);

  const fetchEmployee = async ()=>{
    try{
      const response = await axiosApiClient.get(axiosApiClient.URLS.api.GET_EMPLOYEE_URL);
      setEmployee(response.data.list)
    }catch(e){
      console.log(e);
      setEmployee([])
    }
  }

  useEffect(()=>{
    fetchEmployee();
  },[]);

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Employees</h1>
        <p className="mb-6">A list of employees</p>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">Employee Id</th>
            <th className="border border-gray-300 p-2 text-left">Employee Name</th>
            <th className="border border-gray-300 p-2 text-left">Job Title</th>
            <th className="border border-gray-300 p-2 text-left">Grade</th>
            <th className="border border-gray-300 p-2 text-left">Mobile</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Business Unit</th>
            <th className="border border-gray-300 p-2 text-left">Platform </th>
            <th className="border border-gray-300 p-2 text-left">Lab</th>
            <th className="border border-gray-300 p-2 text-left">Feature Team</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((info:any) => (
            <tr key={info.id}>
              <td className="border border-gray-300 p-2 text-left">{info.id}</td>
              <td className="border border-gray-300 p-2 text-left">{info.name}</td>
              <td className="border border-gray-300 p-2 text-left">{info.jobTitle}</td>
              <td className="border border-gray-300 p-2 text-left">{info.grade}</td>
              <td className="border border-gray-300 p-2 text-left">{info.mobile}</td>
              <td className="border border-gray-300 p-2 text-left">{info.email}</td>
              <td className="border border-gray-300 p-2 text-left">{info.businessUnit}</td>
              <td className="border border-gray-300 p-2 text-left">{info.platform}</td>
              <td className="border border-gray-300 p-2 text-left">{info.lab}</td>
              <td className="border border-gray-300 p-2 text-left">{info.featureTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withLayout(EmployeePage, 'auth');
