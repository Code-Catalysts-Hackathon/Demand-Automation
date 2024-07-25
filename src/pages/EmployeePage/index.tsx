import withLayout from '../../layouts/withLayout';
import React, { useState } from 'react';

interface Employee {
  serialNumber: number;
  name: string;
  phoneNumber: string;
  email: string;
  platformName: string;
  labName: string;
  featureTeam: string;
  businessUnit: string;
}

const employees: Employee[] = [
  { serialNumber: 1, name: 'John Doe', phoneNumber: '123-456-7890', email: 'john@example.com', platformName: 'Platform A', labName: 'Lab 1', featureTeam: 'Team A', businessUnit: 'CL' },
  { serialNumber: 2, name: 'Jane Smith', phoneNumber: '987-654-3210', email: 'jane@example.com', platformName: 'Platform B', labName: 'Lab 2', featureTeam: 'Team B', businessUnit: 'CL' },
  { serialNumber: 3, name: 'Bob Johnson', phoneNumber: '555-123-4567', email: 'bob@example.com', platformName: 'Platform C', labName: 'Lab 3', featureTeam: 'Team C', businessUnit: 'CL' },
  { serialNumber: 4, name: 'Alice Brown', phoneNumber: '444-555-6666', email: 'alice@example.com', platformName: 'Platform D', labName: 'Lab 4', featureTeam: 'Team D', businessUnit: 'CL' },
  { serialNumber: 5, name: 'Charlie Black', phoneNumber: '333-444-5555', email: 'charlie@example.com', platformName: 'Platform E', labName: 'Lab 5', featureTeam: 'Team E', businessUnit: 'CL' },
  { serialNumber: 6, name: 'Diana White', phoneNumber: '222-333-4444', email: 'diana@example.com', platformName: 'Platform F', labName: 'Lab 6', featureTeam: 'Team F', businessUnit: 'CL' },
  { serialNumber: 7, name: 'Eve Green', phoneNumber: '111-222-3333', email: 'eve@example.com', platformName: 'Platform G', labName: 'Lab 7', featureTeam: 'Team G', businessUnit: 'CL' },
  // Add more employee data as needed...
];

const EmployeePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.phoneNumber.includes(searchTerm) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.platformName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.labName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.featureTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.businessUnit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Employees</h1>
      <p className="mb-6">A list of employees</p>
      <div className="flex justify-between mb-5">
        <div></div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 w-80 border rounded"
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">Serial Number</th>
            <th className="border border-gray-300 p-2 text-left">Employee Name</th>
            <th className="border border-gray-300 p-2 text-left">Phone Number</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Platform Name</th>
            <th className="border border-gray-300 p-2 text-left">Lab Name</th>
            <th className="border border-gray-300 p-2 text-left">Feature Team</th>
            <th className="border border-gray-300 p-2 text-left">Business Unit</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee) => (
            <tr key={employee.serialNumber}>
              <td className="border border-gray-300 p-2 text-left">{employee.serialNumber}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.name}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.phoneNumber}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.email}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.platformName}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.labName}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.featureTeam}</td>
              <td className="border border-gray-300 p-2 text-left">{employee.businessUnit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-end items-center">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 disabled:opacity-50">Previous</button>
        <span className="mx-4">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default withLayout(EmployeePage, 'auth');
