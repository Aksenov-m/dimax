import React from 'react'
import styles from './GoodListPage.module.css'
import CertificateItem from '../CertificateItem/CertificateItem'

const GoodListPage = ({ certificates, isName }) => {
  return (
    <div className={styles.goodListPage}>
      <h2 className={styles.title}>Выберите сертификат</h2>
      <div className={styles.certificateList}>
        {certificates.map((certificate) => (
          <CertificateItem
            isName={isName}
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
