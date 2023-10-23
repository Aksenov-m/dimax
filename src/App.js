import React, { useState, useEffect } from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import FormPage from './components/FormPage/FormPage'
import ErrorPage from "./components/ErrorPage/ErrorPage";
import api from "./utils/api";
import './App.css';


function App() {
  const [certificates, setCertificates] = useState([]);
  const [certificate, setCertificate] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

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

  // function handlePaymentSubmit(data) {
  //   const information = certificate
  //   api.ossale(information)
  //     // .then((newCard) => {
  //     //   setCards([newCard, ...cards]);
  //     // })
  //     .catch((err) => alert(err))
  //     // .finally(() => {
  //     //   setIsLoading(false);
  //     // });
  // }



  const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage
      isCertificate={isCertificate}
      certificates={certificates}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "form",
      element: <FormPage  certificate={certificate} errorMessage="Поля: Имя, Телефон, Почта - обязательные"/>,
    },
  ]);

  function isCertificate(certificate) {
    setCertificate(certificate);
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
