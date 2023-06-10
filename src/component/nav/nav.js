import './nav.scss';
import { Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Nav = ({closeNav}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-nav">
          <Link to= "/" onClick={closeNav}>Home</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/about-me" onClick={closeNav}>My experince</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/my-works">My works</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/contact-me" onClick={closeNav}>Contact me</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
