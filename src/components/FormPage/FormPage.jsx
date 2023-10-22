import React, { useEffect } from 'react'
import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import styles from './FormPage.module.css'
import Button from '../Button/Button'

const FormComponent = (props) => {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation()

  const navigate = useNavigate()

  useEffect(() => {
    resetForm()
  }, [resetForm])

  function handleSubmit(e) {
    e.preventDefault()
    console.log('сука')
  }

  return (
    <div className={styles.mainContent}>
      <form className={styles.form} noValidate>
        <div className={styles.formContainer}>
          <p className={styles.formInfo}>{props.nameCertificates}</p>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>ФИО *</span>
            <input
              value={values.name}
              onChange={handleChange}
              required
              placeholder="Введите..."
              type="text"
              name="name"
              className={styles.inputField}
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Телефон *</span>
            <input
              value={values.tel}
              onChange={handleChange}
              required
              placeholder="+7 (999) 999-99-99"
              type="tel"
              name="tel"
              className={styles.inputField}
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
              value={values.email}
              onChange={handleChange}
              required
              placeholder="Введите..."
              type="email"
              name="email"
              className={styles.inputField}
            />
          </label>
          <span className={styles.inputError}>
            {!isValid && Object.keys(values).length > 0
              ? props.errorMessage
              : ''}
          </span>
          <a
            href="https://sycret.ru/"
            className={styles.rulesLink}
            target="_blank"
          >
            Правила
          </a>
        </div>
        <div className={styles.formButtons}>
          <Button
            handleClick={() => {
              navigate(-1)
            }}
            isType="button"
            tag="form__button_color_grey"
            text="Назад"
          ></Button>
          <Button
            isDisabled={!isValid}
            handleClick={handleSubmit}
            isType="submit"
            tag="form__button_color_blue"
            text="Перейти к оплате"
          ></Button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
