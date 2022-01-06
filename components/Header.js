import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from './../images/logo.png'

const Header = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [])

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
            <Image
              alt=""
              src={logo}
              width={90}
              height={30}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-style">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "120px" }}
              navbarScroll
            ></Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Our Portfolio</Nav.Link>
            <Nav.Link href="#">Our Team</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Form className="d-flex ms-3">
              <a className="button-primary">Login</a>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
