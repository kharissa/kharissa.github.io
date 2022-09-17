import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container fluid className="py-5">
        <Row className="justify-content-center">
            <Col className="text-center">
                <h4>Interested in working together? <a href="mailto:kharissafernando@gmail.com" target="_blank" rel="noreferrer">Send me an email.</a></h4>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer;