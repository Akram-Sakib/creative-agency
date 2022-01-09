import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from "./../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const router = useRouter();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const handleHomeRoute = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handlePortfolioRoute = (e) => {
    e.preventDefault();
    router.push("/our-portfolio");
  };
  const handleTeamRoute = (e) => {
    e.preventDefault();
    router.push("/our-team");
  };
  const handleContactRoute = (e) => {
    e.preventDefault();
    router.push("/contact-us");
  };


  return (
    <header>
      <Navbar
        fixed="top"
        bg={colorChange ? "light" : ""}
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">
            <Link href="/">
              <a>
                <Image
                  alt=""
                  src={logo}
                  width={90}
                  height={30}
                  className="d-inline-block align-top"
                />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-style">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "120px" }}
              navbarScroll
            ></Nav>
            <Nav.Link onClick={handleHomeRoute}>Home</Nav.Link>
            <Nav.Link onClick={handlePortfolioRoute}>Our Portfolio</Nav.Link>
            <Nav.Link onClick={handleTeamRoute}>Our Team</Nav.Link>
            <Nav.Link onClick={handleContactRoute}>Contact Us</Nav.Link>
            <Form className="d-flex ms-3">
              <Link href="/login">
                <a className="button-primary">Login</a>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
