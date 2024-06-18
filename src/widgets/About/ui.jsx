"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./ui.module.css";
export const About = ({ title, imgSrc, content }) => {
  const [opened, setOpened] = useState(null);
  return (
    <div className={styles.wrapper}>
      <Image
        src={imgSrc}
        alt={title}
        width={500}
        height={500}
        className={styles.image}
      />
      <div
        className={styles.link}
        onClick={() =>
          setOpened((prev) => {
            if (prev === title) {
              return null;
            } else {
              return title;
            }
          })
        }
      >
        <h2>{title}</h2>
        <Image
          className={
            opened == title
              ? styles["arrow-expanded"]
              : styles["arrow-collapsed"]
          }
          src={"/arrow-black.svg"}
          width={48}
          height={28}
          alt="arrow"
        />
      </div>
      <ul
        className={clsx(
          styles.content,
          opened === title ? styles.expanded : styles.collapsed
        )}
      >
        {content.map((c, idx) => (
          <li key={idx}>
            {idx + 1}. {c}
          </li>
        ))}
      </ul>
    </div>
  );
};
