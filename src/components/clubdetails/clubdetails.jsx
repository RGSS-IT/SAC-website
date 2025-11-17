import React from "react"; // ALWAYS DO THIS

import styles from "./clubdetails.module.css";

import Link from "next/link";

import Image from "next/image";

export default function ClubDetails({ details }) {
    const { name, banner_img, profile_img, room, frequency } = details;
    return (
      <div className={styles.clubdetails_container}>
        <img className={styles.clubdetails_banner} src={ banner_img }/>
        <img className={styles.clubdetails_profile} src={ profile_img }/>
        <div className={styles.clubdetails_details}>
          <p className={styles.clubdetails_d_name}>{ name }</p>
          <div className={styles.clubdetails_d_section}>
            <p className={styles.clubdetails_d_section_room}>Rm { room }</p>
            <p className={styles.clubdetails_d_section_frequency}>{ frequency }</p>
          </div>
          <hr className={styles.clubdetails_d_break}/>
          <div className={styles.clubdetails_d_about}>
            <p className={styles.clubdetails_d_about_header}>View Description</p>
            <img className={styles.clubdetails_d_about_arrow} src="https://t4.ftcdn.net/jpg/05/49/72/57/360_F_549725767_g4N31XZnd1XM9rHYBUp7e5iNtN7DRwpi.jpg"/>
          </div>
        </div>
      </div>
    )
}