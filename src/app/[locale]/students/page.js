import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
export default async function StudentsPage() {
  const t = await getTranslations("students");
  return (
    <div className={styles.wrapper}>
      <h1>{t("title")}</h1>
      <div>
        {t.raw("about").map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div>
        <h3>{t("requirements.title")}</h3>
        <ul>
          {t.raw("requirements.values").map((item, idx) => (
            <li key={item}>
              {idx + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{t("docs.title")}</h3>
        <ul>
          {t.raw("docs.values").map((item, idx) => (
            <li key={idx}>
              {idx + 1}. {item}
            </li>
          ))}
        </ul>
        <p>{t("docs.end")}</p>
      </div>
      <div>
        <h3>{t("info.title")}</h3>
        <p>{t.rich("info.value", { br: () => <br></br> })}</p>
      </div>
      <p>
        {t.rich("deadlines", { strong: (chunk) => <strong>{chunk}</strong> })}
      </p>
    </div>
  );
}
