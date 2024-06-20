import Image from "next/image";
import styles from "./ui.module.css";
export const Card = ({ img, text, ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <Image src={img} className={styles.image} fill />
      <div className={styles.shadow} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
