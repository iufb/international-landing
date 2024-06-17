import styles from "./ui.module.css";

export const Modal = ({ children, closeIcon }) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.modal}>
        {closeIcon}
        {children}
      </section>
    </section>
  );
};
