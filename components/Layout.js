import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname.split("/");

  if (showHeader[1] == "login") {
    return <>{children}</>;
  } else if (showHeader[1] == "admin") {
    return (
      <>
        {children}
      </>
    );
  } else {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
};

export default Layout;
