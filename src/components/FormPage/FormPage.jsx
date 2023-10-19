import React from 'react'
import styles from './FormPage.module.css'

const FormComponent = () => {
  return (
    <div className={styles.mainContent}>
      <form className={styles.form} noValidate>
        <div className={styles.formContainer}>
          <p className={styles.formInfo}>Сертификат на 50000 руб</p>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>ФИО *</span>
            <input
              placeholder="Введите..."
              type="text"
              name="name"
              className={styles.inputField}
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Телефон *</span>
            <input
              placeholder="+7 (999) 999-99-99"
              type="tel"
              className={styles.inputField}
              value="+7 (___) ___-__-__"
              inputMode="numeric"
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Сообщение</span>
            <textarea
              rows="3"
              placeholder="Введите..."
              type="text"
              name="message"
              className={styles.inputField}
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Почта *</span>
            <input
              placeholder="Введите..."
              type="email"
              name="email"
              className={styles.inputField}
            />
          </label>
          <a
            href="https://sycret.ru/"
            className={styles.rulesLink}
            target="_blank"
          >
            Правила
          </a>
        </div>
        <div className={styles.formButtons}>
          <button className={styles.backButton} type="button">
            Назад
          </button>
          <button
            className={`${styles.submitButton} ${styles.loadingButton}`}
            type="submit"
          >
            Перейти к оплате
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
