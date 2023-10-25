import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import styles from './OnlinesalePage.module.css'

const OnlinesalePage = () => {
  return (
    <div className={styles.onlinesale}>
      <Preloader isLoading={true} />
      <h1 className={styles.title}>Оплата</h1>
      <p className={styles.link}>
        <Link to="/dimax">На главную</Link>
      </p>
    </div>
  )
}

export default OnlinesalePage
