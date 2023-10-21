import styles from './Button.module.css'

const Button = ({ tag, text, handleClick, isType }) => {
  return (
    <button
      type={isType}
      onClick={handleClick}
      className={`${styles.button} ${styles[tag]}`}
    >
      {text}
    </button>
  )
}

export default Button
