import clsx from "clsx";
import styles from "./ui.module.css";

export const Modal = ({ children, closeIcon, variant, className }) => {
  return (
    <section className={styles.wrapper}>
      <section
        className={clsx(
          styles.modal,
          className,
          { normal: styles.normal, fullScreen: styles.fullScreen }[variant]
        )}
      >
        {closeIcon}
        {children}
      </section>
    </section>
  );
};
