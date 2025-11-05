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
                    <h1><a href="/">SAC</a></h1>
                </div>
            </div>
            <div className={styles.navbar_right}>
                <a className={styles.navbar_right_element} href="#">test</a>
                <a className={styles.navbar_right_element} href="#">test2</a>
                <a className={styles.navbar_right_element} href="#">test3</a>
            </div>
        </div>
    )
}

export default Navbar

