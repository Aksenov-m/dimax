import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FormPage from "./components/FormPage/FormPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import api from "./utils/api";
import "./App.css";

function App() {
  const [certificates, setCertificates] = useState([]);
  const [certificate, setCertificate] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    api
      .getGoodList()
      .then((data) => {
        setCertificates(data);
        console.log("Список товаров:", data);
      })
      .then(() => {
        console.log(certificates);
      })
      .catch((err) => alert("Ошибка:", err));
  }, []);

  const saveCertificateData = async (data) => {
    api
      .ossale(data)
      .then(() => {
        console.log("Данные успешно сохранены");
      })
      .catch((err) =>{
        console.info("Ошибка при обработке платежа:", err)
      })
      .finally(() => {
        console.info("все");
      });
  };

  const saveCertificateAction = async ({request}) => {
    const formData = await request.formData();
    const data = {
      NAME: formData.get("name"),
      PHONE: formData.get("tel"),
      EMAIL: formData.get("email"),
    }
    const newData = {...certificate, ...data}
    const response = await saveCertificateData(newData);
    if (response) {
      // Данные успешно сохранены
      console.log("Данные успешно сохранены");
      return null;
    } else {
      console.table(newData)
      // Обработка ошибок
      return redirect("onlinesale");
    }
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage isCertificate={isCertificate} certificates={certificates} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "form",
      action: saveCertificateAction,
      element: <FormPage certificate={certificate} errorMessage='Поля: Имя, Телефон, Почта - обязательные' />,
    },
  ]);

  function isCertificate(certificate) {
    setCertificate(certificate);
  }

  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
