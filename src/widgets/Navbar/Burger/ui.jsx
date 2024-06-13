"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ui.module.css";

export const Burger = ({ className }) => {
  const [opened, setOpened] = useState(false);
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
          className={clsx(opened ? styles.container : styles["slide-out"])}
          style={{}}
        >
          sf
          <button onClick={() => setOpened(false)}>clsoe</button>
        </div>,
        document.body
      )}
    </>
  );
};
