"use client";
import { HoverMenu } from "@/shared/ui";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "use-intl";
import styles from "./ui.module.css";

export const Navlink = ({ href, label, submenu }) => {
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("nav");
  const { locale } = useParams();
  const router = useRouter();
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link className={styles.link} href={href}>
        {label}
      </Link>
      {hovered && submenu && (
        <div className={styles.hover}>
          <HoverMenu
            items={submenu.map((link) => {
              return {
                label: link.label,
                action: () => {
                  console.log("action");
                  router.replace(`/${locale}/${link.href}`);
                },
              };
            })}
          />
        </div>
      )}
    </div>
  );
};
