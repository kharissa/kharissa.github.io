import "./App.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Resume from "./resume.pdf";
import Emoji from "./components/Emoji";

function Links() {
  return (
    <Container fluid className="App">
      <Navbar
        fluid
        collapseOnSelect
        expand="lg"
        variant="light"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand href="#home">Kharissa Fernando Smith</Navbar.Brand>
          <Navbar.Text>
            <Emoji symbol="📍" label="pin" /> Grace Hopper Conference, Orlando,
            Fl
          </Navbar.Text>
        </Container>
      </Navbar>
      <Row className="p-4 justify-content-center">
        <Col md={5} className="m-2 home-text-container">
          <p>
            Hi there. <Emoji symbol="👋" label="wave" /> Thanks for taking the
            time to review my work. I'm graduating with a B.S. Computer
            Science from Oregon State University in December 2022 and I've
            previously interned at Lyft, PagerDuty, and Peek. Feel free to
            explore my projects, download my resume, or connect with me below.{" "}
          </p>
        </Col>
      </Row>
      <div className="d-grid gap-2">
        <Link to="/">
          <Button variant="secondary" size="lg" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-browser"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="1"></rect>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="8" y1="4" x2="8" y2="8"></line>
            </svg>{" "}
            Portfolio
          </Button>
        </Link>
        <Link to={Resume} target="_blank">
          <Button variant="secondary" size="lg" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-file-info"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M11 14h1v4h1"></path>
              <path d="M12 11h.01"></path>
            </svg>{" "}
            Resume
          </Button>
        </Link>
        <a
          href="https://www.linkedin.com/in/kharissafernando/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary" size="lg" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="11" x2="8" y2="16"></line>
              <line x1="8" y1="8" x2="8" y2="8.01"></line>
              <line x1="12" y1="16" x2="12" y2="11"></line>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>{" "}
            LinkedIn
          </Button>
        </a>
        <a
          href="https://www.github.com/kharissa"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary" size="lg" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>{" "}
            Github
          </Button>
        </a>
        <a
          href="mailto:kharissafernando@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary" size="lg" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>{" "}
            Email
          </Button>
        </a>
      </div>
    </Container>
  );
}

export default Links;
