import React, { useState, useEffect } from 'react'
import CertificateItem from '../CertificateItem/CertificateItem'

const GoodListPage = ({ onSelectCertificate }) => {
  const [certificates, setCertificates] = useState([])

  useEffect(() => {
    // Здесь происходит вызов метода OSGetGoodList для получения списка сертификатов
    // и установка полученных данных в state
    const fetchCertificates = async () => {
      try {
        const response = await fetch('API_ENDPOINT/OSGetGoodList')
        const data = await response.json()
        setCertificates(data)
      } catch (error) {
        console.error('Error fetching certificate list:', error)
      }
    }

    fetchCertificates()
  }, [])

  return (
    <div>
      <h2>Выберите сертификат</h2>
      <ul>
        {certificates.map((certificate) => (
          <CertificateItem
            key={certificate.id}
            certificate={certificate}
            onSelect={onSelectCertificate}
          />
        ))}
      </ul>
    </div>
  )
}

export default GoodListPage
