import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [backendData,setBackendData]=useState('');
  useEffect(
    ()=>{
      fetch("./hello").then(
        response=>response.json()
      ).then(
        data=>{
          backendData=data;
          console.log("Backend is ready");
          
        }
      )
    },
  [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <p>
        <p>
         {backendData} is working ! 
        </p>
      </p>
    </div>
  );
}

export default App;
