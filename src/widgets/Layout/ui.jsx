import { Footer, Navbar } from "..";
import styles from "./ui.module.css";
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
