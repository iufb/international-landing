import { useTranslations } from "next-intl";
import { Navbar } from "../widgets";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <section>
      <Navbar />
      <h1>{t("title")}</h1>
    </section>
  );
}
