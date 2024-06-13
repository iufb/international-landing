import styles from "./ui.module.css";
export const HoverMenu = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, idx) => (
        <>
          <span key={item.label} onClick={() => item.action()}>
            {item.label}
          </span>
          {idx !== items.length - 1 && <hr key={idx} />}
        </>
      ))}
    </div>
  );
};
