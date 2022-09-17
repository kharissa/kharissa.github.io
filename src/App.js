import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Emoji from "./components/Emoji";

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
            Hello! My name is <b>Kharissa</b>. I'm graduating with a degree in{" "}
            <b>Computer Science</b> <Emoji symbol="👩🏽‍💻" label="technologist" />{" "}
            from <b>Oregon State University</b> in December 2022. I have
            experience developing <b>data-driven</b> and <b>user-friendly</b>{" "}
            web apps. Ask me about being a digital nomad{" "}
            <Emoji symbol="✈️" label="airplane" />, my favorite scuba diving
            sites <Emoji symbol="🐠" label="fish" />, or my volunteer work{" "}
            <Emoji symbol="🤝" label="handshake" />.
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
