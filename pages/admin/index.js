import styles from "./../../styles/Home.module.css";
import Head from "next/head";
import LeftNavBar from "../../components/Admin/LeftNavBar";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminContent from "../../components/Admin/AdminContent";

const Admin = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Agency Dashboard</title>
        <meta name="description" content="Created by Sakib" />
      </Head>
      <div className={styles.container}>
        <LeftNavBar />
        <AdminHeader />
        <AdminContent />
      </div>
    </div>
  );
};

export default Admin;
