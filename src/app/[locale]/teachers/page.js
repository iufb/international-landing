import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
export default async function TeachersPage() {
  const t = await getTranslations("teachers");
  return (
    <div className={styles.wrapper}>
      <h1>{t("title")}</h1>
      <p> {t("in.about")}</p>
      <div>
        <h3>{t("in.docs.title")}</h3>
        <ul>
          {t.raw("in.docs.values").map((item, idx) => (
            <li key={idx}>
              {idx + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
