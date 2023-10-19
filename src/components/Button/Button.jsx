import styles from './Button.module.css'

const Button = ({ tag, text }) => {
  return <button className={`${styles.button} ${styles[tag]}`}>{text}</button>
}

export default Button
