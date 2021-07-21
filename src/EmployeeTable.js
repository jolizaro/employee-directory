import React from 'react'
import { Table } from 'react-bootstrap';

const EmployeeTable = ({ filtered, sortByFirstName, sortByLastName }) => {
  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={sortByLastName} style={{cursor:'pointer'}}>Last Name</th>
            <th onClick={sortByFirstName} style={{cursor:'pointer'}}>First Name</th>
            <th>Gender</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id.value}>
              <td>{emp.name.last}</td>
              <td>{emp.name.first}</td>
              <td>{emp.gender}</td>
              <td>{emp.location.state}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
}

export default EmployeeTable
