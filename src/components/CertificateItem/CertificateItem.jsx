import React from 'react'
import styles from './CertificateItem.module.css'

const CertificateItem = ({ certificate, onSelect }) => (
  <li className={styles.certificateItem}>
    <h3 className={styles.certificateItem__name}>{certificate.name}</h3>
    <p className={styles.certificateItem__description}>
      {certificate.description}
    </p>
    <p className={styles.certificateItem__price}>Цена: {certificate.price}</p>
    <p className={styles.certificateItem__summa}>
      Сумма к оплате: {certificate.summa}
    </p>
    <p className={styles.certificateItem__discount}>
      Скидка: {certificate.discount}
    </p>
    {certificate.imageUrl && (
      <div>
        <img
          className={styles.certificateItem__image}
          src={certificate.imageUrl}
          alt={certificate.name}
        />
      </div>
    )}
    <button
      className={styles.certificateItem__button}
      onClick={() => onSelect(certificate)}
    >
      Оформить
    </button>
  </li>
)

export default CertificateItem
