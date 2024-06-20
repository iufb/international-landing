import { About, CardMenu } from "@/widgets";
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
      <div className={styles.test}>
        {new Array(10)
          .fill({
            img: "/test.jpg",
            title: "Административный центр",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with PageMaker including versions of Lorem Ipsuma Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with PageMaker including versions of Lorem Ipsuma ",
          })
          .map((item) => (
            <CardMenu {...item} />
          ))}
      </div>
    </>
  );
}
