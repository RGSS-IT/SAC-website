import Image from "next/image";
import ClubDetails from "@/components/clubdetails/clubdetails";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1 className={styles.title}>GET INVOLVED</h1>
        <ClubDetails details={{
          name:"HELLO",
          banner_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
          profile_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
          room: "101",
          frequency: "Weekly"
        }}
        className={styles.inter}/>
    </div>
  );
}
