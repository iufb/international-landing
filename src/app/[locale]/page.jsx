import { About } from "@/widgets";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
export default async function MainPage() {
  const t = await getTranslations();
  return (
    <>
      <section className={styles.about}>
        <About
          imgSrc={"/logo-abu-cropped.png"}
          title={"O Cемее"}
          content={t.raw("about.city")}
        />
        <About
          imgSrc={"/logo-abu-cropped.png"}
          title={"O Kaзахстане"}
          content={t.raw("about.kz")}
        />
      </section>
    </>
  );
}
