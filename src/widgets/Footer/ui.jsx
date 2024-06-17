import { getTranslations } from "next-intl/server";
import styles from "./ui.module.css";
export const Footer = async () => {
  const t = await getTranslations("footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2>{t("title")}</h2>
        <div className={styles.content}>
          <ul className={styles.left}>
            {t.raw("left").map((item, idx) => {
              if (typeof item == "object") {
                return (
                  <li key={idx} className={styles.emails}>
                    {item.emails.map((email) => (
                      <>
                        <span>
                          <a href={`mailto:${email}`}>{email}</a>
                        </span>{" "}
                      </>
                    ))}
                  </li>
                );
              } else {
                return <li key={idx}>{item}</li>;
              }
            })}
          </ul>
          <ul className={styles.right}>
            {t.raw("right").map((item) => (
              <li dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
