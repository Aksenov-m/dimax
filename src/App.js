import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage/HomePage'
import api from "./utils/api";
import './App.css';

function App() {


  const [certificates, setCertificates] = useState([])

  useEffect(() => {
    api.getGoodList()
      .then((data) => {
        setCertificates(data);
        console.log("Список товаров:", data);
      })
      .then(() => {
        console.log(certificates);
      })
      .catch((err) => alert("Ошибка:", err));
  }, []);

  return (
    <>
    <div className="App">
      <HomePage
      certificates={certificates}
      />
    </div>
    </>
  );
}

export default App;
