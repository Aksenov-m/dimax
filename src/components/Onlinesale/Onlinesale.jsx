import React from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import styles from './Onlinesale.module.css'

const Onlinesale = () => {
  return (
    <div className={styles.onlinesale}>
      <h1 className={styles.title}>Оплата</h1>
      <p className={styles.link}>
        <Link to="/dimax">На главную</Link>
      </p>
    </div>
  )
}

export default Onlinesale
