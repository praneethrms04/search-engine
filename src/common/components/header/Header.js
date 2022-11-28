import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTh } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Google</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Gmail</Nav.Link>
              <Nav.Link href="#action2">Images</Nav.Link>
              <Nav.Link href="#action2">
                <FaTh />
              </Nav.Link>
              <Nav.Link href="#action2">
                <CgProfile />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
