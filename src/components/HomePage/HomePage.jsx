import React, { useState } from 'react'
import GoodListPage from './GoodListPage'

const HomePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const handleSelectCertificate = (certificate) => {
    setSelectedCertificate(certificate)
    // Переход на страницу сбора контактов
    // (можно использовать React Router или другой механизм навигации)
  }

  return (
    <div>
      <h1>Добро пожаловать в наш магазин подарочных сертификатов!</h1>
      <GoodListPage onSelectCertificate={handleSelectCertificate} />
    </div>
  )
}

export default HomePage
