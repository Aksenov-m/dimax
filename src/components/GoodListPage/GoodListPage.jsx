import React from 'react'
import styles from './GoodListPage.module.css'
import CertificateItem from '../CertificateItem/CertificateItem'
import Preloader from '../Preloader/Preloader'

const GoodListPage = ({ certificates, isCertificate, isLoading }) => {
  return (
    <div className={styles.goodListPage}>
      <h2 className={styles.title}>Выберите сертификат</h2>
      <Preloader isLoading={isLoading}></Preloader>
      <div className={styles.certificateList}>
        {certificates.map((certificate) => (
          <CertificateItem
            isCertificate={isCertificate}
            key={certificate.ID}
            certificate={certificate}
            // onSelect={onSelectCertificate}
          />
        ))}
      </div>
    </div>
  )
}

export default GoodListPage
