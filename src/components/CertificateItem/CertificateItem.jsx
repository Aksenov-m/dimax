import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CertificateItem.module.css'
import Button from '../Button/Button'
import reactLogo from '../../logo.svg'

function CertificateItem({ certificate, isName }) {
  function processPayment() {
    isName(certificate.NAME)
  }

  return (
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
      <Link to={`form`}>
        <Button
          handleClick={processPayment}
          tag="certificateItem__button"
          text="Оформить"
          isType="button"
        ></Button>
      </Link>
    </article>
  )
}

export default CertificateItem
