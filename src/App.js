import React, { useState, useEffect } from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import FormPage from './components/FormPage/FormPage'
import ErrorPage from "./components/ErrorPage/ErrorPage";
import api from "./utils/api";
import './App.css';


function App() {
  const [certificates, setCertificates] = useState([]);
  const [nameCertificates, setNameCertificates] = useState('');

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


  const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage
      isName={isName}
      certificates={certificates}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "form",
      element: <FormPage nameCertificates={nameCertificates}/>,
    },
  ]);

  function isName(name) {
    setNameCertificates(name);
  }

  return (
    <>
    <div className="App">
    <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
