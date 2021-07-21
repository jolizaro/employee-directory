
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [employees, setEmployees] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=25')
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
    })
  })
  return (
    <div className="App">
     <h1>Employee Directory</h1>
    </div>
  );
}

export default App;
