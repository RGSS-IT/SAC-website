import React from "react"; // ALWAYS DO THIS

import styles from "./navbar.module.css";

import Link from "next/link";

import Image from "next/image";

const Navbar = () => {

    return (
        <div>
            <Image src="/saclogo.png" width="50" height="50" alt="saclogo"></Image>
            <p>SAC</p>
        </div>
    )
}

export default Navbar

