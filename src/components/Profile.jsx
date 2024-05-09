import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Profile() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Img
              variant="top"
              src="https://dilei.it/wp-content/uploads/sites/3/2021/11/Gerry-Scotti.jpg"
              alt="Profile Image"
            />
            <Card.Body>
              <Card.Title>Marco Rossi</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero nec sem finibus, eget tincidunt justo
                ultricies. Nullam faucibus neque nec neque tincidunt viverra.
              </Card.Text>
            </Card.Body>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email: marco.rossi@example.com
              </li>
              <li className="list-group-item">Location: Milano, Italia</li>
              <li className="list-group-item">
                Interests: Music, Photography, Technology
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
