import styles from "./../../styles/Home.module.css";
import watermark from './../../images/watermark.png';
import Image from "next/image";

const AdminHeader = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Jenny</span>
          </h2>
          <p>welcome to the board.</p>
        </div>
        <div className={styles.profile}>
          <Image
            width={40}
            height={40}
            src={watermark}
            alt="profile"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
