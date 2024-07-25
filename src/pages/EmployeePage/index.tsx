
import withLayout from '../../layouts/withLayout'

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
    <div>
      <h1 style={{ fontWeight: 'bold' }}>Employees</h1>
      <p>A list of employees</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div></div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: '10px', width: '300px' }}
        />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Serial Number</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Employee Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone Number</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Platform Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Lab Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Feature Team</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Business Unit</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.serialNumber}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.phoneNumber}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.platformName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.labName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.featureTeam}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{employee.businessUnit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};







export default withLayout(EmployeePage,'auth')
