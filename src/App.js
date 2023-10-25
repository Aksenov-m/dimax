import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FormPage from "./components/FormPage/FormPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Onlinesale from "./components/Onlinesale/Onlinesale";
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
      })
      .catch((err) => alert("Ошибка:", err));
  }, []);

  const saveCertificateData = async (data) => {
    api
      .ossale(data)
      .then(() => {
        console.log("Данные успешно сохранены");
      })
      .catch((err) => {
        console.info("Ошибка при обработке платежа:", err);
      })
  };

  const saveCertificateAction = async ({ request }) => {
    const formData = await request.formData();
    const data = {
      NAME: formData.get("name"),
      PHONE: formData.get("tel"),
      EMAIL: formData.get("email"),
    };
    const newData = { ...certificate, ...data };
    const response = await saveCertificateData(newData);
    if (response) {
      // Данные успешно сохранены
      return null;
    } else {
      // Обработка ошибок
      return redirect("onlinesale");
    }
  };

  const router = createBrowserRouter([
    {
      path: "dimax",
      element: <HomePage isCertificate={isCertificate} certificates={certificates} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "dimax/form",
      action: saveCertificateAction,
      element: <FormPage certificate={certificate} errorMessage='Поля: Имя, Телефон, Почта - обязательные' />,
    },
    {
      path: "dimax/form/onlinesale",
      element: <Onlinesale />,
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
