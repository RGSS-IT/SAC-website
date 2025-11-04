import React from "react"; // ALWAYS DO THIS

import styles from "./navbar.module.css";

import Link from "next/link";

import Image from "next/image";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_left}>
                <Image src="/saclogo.png" width="45" height="45" alt="sac logo"></Image>
                <div className={styles.navbar_left_text}>
                    <h1>SAC</h1>
                </div>
            </div>
            <div className={styles.navbar_right}>
                <p className={styles.navbar_right_element}>test</p>
                <p className={styles.navbar_right_element}>test2</p>
                <p className={styles.navbar_right_element}>test3</p>
            </div>
        </div>
    )
}

export default Navbar

