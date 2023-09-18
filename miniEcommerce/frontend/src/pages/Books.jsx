import React from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { BookList } from "../components/BookList";
import styles from './Styles/Books.module.css'

export const Books = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["books-filter-container"]}>
        <div className={styles["filter-component"]}>
          <SideBar />
        </div>
        <div className={styles["books-list"]}>
          <BookList />
        </div>
      </div>
    </div>
  );
};
