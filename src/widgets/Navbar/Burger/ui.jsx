"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "use-intl";
import styles from "./ui.module.css";

export const Burger = ({ className }) => {
  const [opened, setOpened] = useState(null);
  const path = usePathname();
  useEffect(() => {
    setOpened(null);
  }, [path]);
  useEffect(() => {
    if (opened) {
      window.document.body.style = "overflow:hidden";
    } else {
      window.document.body.style = "overflow:scroll";
    }
  }, [opened]);
  return (
    <>
      <Image
        className={clsx(className)}
        src="/menu.svg"
        width={48}
        height={48}
        alt="burger"
        onClick={() => setOpened(true)}
      />
      {createPortal(
        <div
          className={clsx(
            styles.container,
            opened == null && styles.hidden,
            opened ? styles["slide-in"] : [styles["slide-out"]]
          )}
        >
          <Menu
            closeIcon={
              <Image
                src={"/close.svg"}
                width={48}
                height={48}
                alt="close"
                className={styles.close}
                onClick={() => setOpened(false)}
              />
            }
          />
        </div>,
        document.body
      )}
    </>
  );
};

const Menu = ({ closeIcon }) => {
  const t = useTranslations("nav");
  const [opened, setOpened] = useState(null);
  const [link, setLink] = useState(null);
  const { locale } = useParams();
  return (
    <div className={styles.menu}>
      {closeIcon}
      {t.raw("links").map((link) => {
        if (link.submenu == "") {
          return (
            <Link key={link.label} href={`/${locale}/${link.href}`}>
              {link.label}
            </Link>
          );
        } else {
          return (
            <label key={link.label} className={styles.linkWithMenu}>
              <span
                onClick={() => {
                  setOpened(true);
                  setLink(link);
                }}
              >
                {link.label}
              </span>
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={26}
                height={14}
                className={styles.arrow}
              />
            </label>
          );
        }
      })}
      {link && (
        <SecondLevel
          locale={locale}
          link={link}
          opened={opened}
          setOpened={setOpened}
        />
      )}
    </div>
  );
};
const SecondLevel = ({ link, opened, setOpened, locale }) => {
  return createPortal(
    <div
      style={{
        zIndex: 10,
      }}
      className={clsx(
        styles.container,
        opened == null && styles.hidden,
        opened ? styles["slide-in"] : [styles["slide-out"]]
      )}
    >
      <label className={styles.back} onClick={() => setOpened(false)}>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={26}
          height={14}
          style={{ transform: "rotate(-90deg)" }}
        />{" "}
        {link.label}
      </label>
      <div className={styles.menu}>
        {link.submenu.map((link) => (
          <Link key={link.label} href={`/${locale}/${link.href}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>,
    document.body
  );
};
