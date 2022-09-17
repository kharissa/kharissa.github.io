import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Projects = () => {
    return (
    <Container id="Projects" className="projects">
        <Row xs={1} md={2} className="g-5 card-deck">
            <Col>
                <Card>
                    <Card.Img variant="top" src="bodysmart.png" />
                    <Card.Body>
                        <Card.Title>BodySmart</Card.Title><span><Badge pill bg="dark">React</Badge>{' '}<Badge pill bg="info">Python</Badge></span>
                        <Card.Text>
                            <ul>
                            <li>Built a progressive web app during COVID-19 quarantine that generates a custom workout plan and acts as a workout companion by training the user on each exercise as a custom timer counts down. </li>
                            <li>Users can search a proprietary and SEO-friendly database of 2,000+ exercises.</li></ul>
                        </Card.Text>
                        <a href="https://www.bodysmartapp.com" target="_blank" rel="noreferrer"><Button variant="outline-dark" size="sm">View Site</Button></a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="fairview.png" />
                    <Card.Body>
                        <Card.Title>FairView</Card.Title> <Badge pill bg="info">Python</Badge>
                        <Card.Text>
                            <ul>
                            <li>Developed a full-stack web app for Machine Language researchers, a group hackathon project that won “Best Technical Problem” and “Best Architectural Design” at Internhacks in July 2021. </li>
                            <li>Wrote the database and implemented the back-end and front-end functionality for key features including the ability to create, search, filter, and bookmark case studies, and view best practices.</li></ul>
                        </Card.Text>
                        <a href="https://fair-view.herokuapp.com/" target="_blank" rel="noreferrer"><Button size="sm" variant="outline-dark">View Site</Button></a>
                        {' '}<a href="https://github.com/kharissa/internhacks-team11" target="_blank" rel="noreferrer"><Button size="sm" variant="outline-dark">View Github</Button></a>
                    </Card.Body>
                </Card>
            </Col>  
            <Col>
                <Card>
                    <Card.Img variant="top" src="gogaigai.jpeg" />
                    <Card.Body>
                        <Card.Title>GoGaiGai</Card.Title> <Badge pill bg="dark">React</Badge>{' '}<Badge pill bg="info">Python</Badge>
                        <Card.Text>
                            <ul>
                            <li>Developed a safety companion progressive web app aimed at solo travelers as a group hackathon project. Won "Best App" and "Best Pitch". Go GaiGai means “to go take a walk” in Cantonese, reflecting its use while exploring a new city.</li>
                            <li>Built the database and backend APIs to generate itinerary check-in's, build a user-generated crime map, notify emergency contacts if user is unresponsive, and display a mock phone/video call that allowed the user to discreetly analyze their surroundings.</li></ul>
                        </Card.Text>
                        <a href="https://www.youtube.com/watch?v=eDxSzNyTwog" target="_blank" rel="noreferrer"><Button size="sm" variant="outline-dark">Play Video</Button></a>
                        {' '}<a href="https://github.com/kharissa/aunty-frontend" target="_blank" rel="noreferrer"><Button size="sm" variant="outline-dark">View Github</Button></a>
                    </Card.Body>
                </Card>
            </Col>  
            <Col>
                <Card>
                    <Card.Img variant="top" src="peek.png" />
                    <Card.Body>
                        <Card.Title>Peek</Card.Title> <Badge pill bg="dark">React</Badge>
                        <Card.Text>
                            <ul>
                            <li>Developed front-end features in React for the award-winning activity marketplace, including a complete redesign of home page, updated sorting and filtering functionality for search results, and design improvements to the booking flow, increasing the booking conversion rate by 20%</li>
                            <li>Proposed product improvements by leveraging qualitative feedback and A/B test results, including the ability to show reviews from B2B purchases, increasing conversion and revenue</li>
                            <li>Improved site ranking of activity and location pages as a result of multiple SEO projects including strategic updates to taxonomy SEO, site maps, meta tags, and keywords</li></ul>
                        </Card.Text>
                        <a href="https://www.peek.com/" target="_blank" rel="noreferrer"><Button size="sm" variant="outline-dark">View Site</Button></a>
                    </Card.Body>
                </Card>
            </Col>  
        </Row>
    </Container>
  )
}

export default Projects;