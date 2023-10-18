import React from 'react'
import styles from './CertificateItem.module.css'
import Button from '../Button/Button'
import reactLogo from '../../logo.svg'

const CertificateItem = ({ certificate, onSelect }) => (
  <article className={styles.certificateItem}>
    <h3 className={styles.certificateItem__name}>{certificate.NAME}</h3>
    <p className={styles.certificateItem__description}>
      {certificate.DESCRIPTION ? certificate.DESCRIPTION : 'тут нет описания'}
    </p>
    <p className={styles.certificateItem__price}>Цена: {certificate.PRICE}</p>
    <p className={styles.certificateItem__summa}>
      Сумма к оплате: {certificate.SUMMA}
    </p>
    <p className={styles.certificateItem__discount}>
      Скидка: {`${Math.floor(certificate.DISCOUNT)}%`}
    </p>
    <div>
      <img
        className={styles.certificateItem__image}
        src={certificate.IMAGEURL ? certificate.IMAGEURL : reactLogo}
        alt={certificate.NAME}
      />
    </div>
    <Button
      className={styles.certificateItem__button}
      onClick={() => onSelect(certificate)}
    ></Button>
  </article>
)

export default CertificateItem
