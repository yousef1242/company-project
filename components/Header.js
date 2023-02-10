import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";



export default function Header() {
  return (
    <Navbar style={{background:"#fff"}} expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img src="https://hamzanabil.github.io/arabic-bootstrap/images/logo.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="/">معلومات عنا</Nav.Link>
            <NavDropdown title="صفحات" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
            صفحة1
            </NavDropdown.Item>
            <NavDropdown.Item href="/">صفحة2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
            صفحة3
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">مدونة</Nav.Link>
            <Nav.Link href="/">اتصل بنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

