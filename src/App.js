import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Emoji from "./components/Emoji";
import Resume from "./resume.pdf";
import { Link } from "react-router-dom";


function App() {
  return (
    <Container fluid className="App">
      <Navigation />
      <Row className="p-4 justify-content-center">
        <Col md={5} className="m-2 text-center my-auto">
          <Image src="photo.png" />
        </Col>
        <Col md={5} className="m-2 home-text-container">
          <h4>
            Hi there. <Emoji symbol="👋" label="wave" /> I'm graduating with a B.S. Computer
            Science from Oregon State University in December 2022 and I've
            previously worked at Lyft, PagerDuty, and Peek. Feel free to
            explore my projects,  view my <Link to={Resume} target="_blank">resume</Link>, or connect with me on <a
          href="https://www.linkedin.com/in/kharissafernando/"
          target="_blank"
          rel="noreferrer"
        >LinkedIn</a>. Ask me about being a digital nomad{" "}
            <Emoji symbol="✈️" label="airplane" /> or my favorite scuba diving
            sites <Emoji symbol="🐠" label="fish" />.
          </h4>
        </Col>
      </Row>
      <Row className="p-4 justify-content-center">
        <Col>
          <Projects />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
