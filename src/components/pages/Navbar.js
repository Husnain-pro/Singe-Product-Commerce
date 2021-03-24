import React from "react";
import { BsInfo } from "react-icons/bs";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 style={{fontFamily:'serif',fontSize:'20pt',fontWeight:'300'}}>DW</h1>
      <div className={styles.m_nav}>
        <p>WATCHES</p>
        <p>ABOUT</p>
      </div>
      <div className={styles.info}>
        <p>
          <BsInfo />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
