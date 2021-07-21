
import './App.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function App() {
  const [employees, setEmployees] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?nat=us&results=25')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setEmployees(data.results);
        setFiltered(data.results);
        
      })
  }, []);

  const sortByLastName = () => {
    const sorted = [...employees];
    sorted.sort((a,b) => {
      if (a.name.last < b.name.last) {
        return -1;
      } else if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    })
    setFiltered(sorted);
  }
  const sortByFirstName = () => {
    const sorted = [...employees];
    sorted.sort((a,b) =>{
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    })
    setFiltered(sorted);
  }
  return (
    <div className="App">
      <h1>Employee Directory</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={sortByLastName}>Last Name</th>
            <th onClick={sortByFirstName}>First Name</th>
            <th>Gender</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id.value}>
              <td>{emp.name.last}</td>
              <td>{emp.name.first}</td>
              <td>{emp.location.state}</td>
              <td>{emp.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
