
import './App.css';
import React, { useState, useEffect } from 'react';
import EmployeeTable from './EmployeeTable';

function App() {
  const [employees, setEmployees] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchState, setSearchState] = useState('')

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

  const handleFilterChange = (e) => {
    setSearchState(e.target.value);
    const results = employees.filter(emp => {
      return emp.location.state.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFiltered(results);
  }

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <form className="m-4">
        <input style={{width: '250px', textAlign:'center'}} type='text' placeholder="Search employees by state" value={searchState} onChange={handleFilterChange}/>
      </form>
      <EmployeeTable filtered={filtered} sortByLastName={sortByLastName} sortByFirstName={sortByFirstName} />
    </div>
  );
}

export default App;
