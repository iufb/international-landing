import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Navlink } from "./Navlink/ui";
import styles from "./ui.module.css";

export const Navbar = async () => {
  const t = await getTranslations("nav");
  return (
    <header className={styles.wrapper}>
      <Image src={"/logo-abu-cropped.png"} width={80} height={80} alt="logo" />
      <nav className={styles.nav}>
        {t.raw("links").map((link, idx) => {
          return (
            <>
              <Navlink key={idx} {...link} />
            </>
          );
        })}
      </nav>
    </header>
  );
};
