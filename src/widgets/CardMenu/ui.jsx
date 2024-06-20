"use client";
import { Card } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./ui.module.css";
export const CardMenu = ({ img, title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card img={img} text={title} onClick={() => setOpen(true)} />
      <div
        style={{
          top: window.scrollY + 20,
        }}
        className={clsx(styles.menu, open ? styles.open : styles.close)}
      >
        <Image
          src={"/close.svg"}
          onClick={() => setOpen(false)}
          width={48}
          height={48}
          className={styles.closeIcon}
        />
        <div className={styles.menuContent}>
          <div className={styles.imageWrapper}>
            <Image src={img} fill />
          </div>
          <div className={styles.menuText}>{text}</div>
        </div>
      </div>
    </>
  );
};
