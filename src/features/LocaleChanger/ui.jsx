"use client";
import { useOnClickOutside } from "@/shared/hooks";
import { HoverMenu } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./ui.module.css";
export const LocaleChanger = ({ className }) => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();
  const [opened, setOpened] = useState(false);
  const onSelect = (locale) => {
    router.replace(`/${locale}/${path.split("/").slice(2)}`);

    setOpened(false);
  };
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpened(false));
  return (
    <div className={clsx(styles.wrapper, className)} ref={ref}>
      <label onClick={() => setOpened(true)}>
        {params.locale.toUpperCase()}
        <Image
          className={clsx(styles.icon, opened ? styles.active : styles.base)}
          src={"/arrow.svg"}
          width={26}
          height={14}
          alt="arrow"
        />
      </label>
      {opened && (
        <div className={styles.menu}>
          <HoverMenu
            component={"span"}
            items={[
              {
                label: "en",
                action: () => onSelect("en"),
              },
              {
                label: "ru",
                action: () => onSelect("ru"),
              },
              {
                label: "kz",
                action: () => onSelect("kz"),
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};
