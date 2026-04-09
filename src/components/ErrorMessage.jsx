import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <p className={styles.error}>
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default ErrorMessage;
