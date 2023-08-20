import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Resources() {
  return (
    <div>
      {" "}
      <div className="bx--content-block fade-in">
        <div className="intro-section">
          <h1
            className="bx--content-block__heading text-light text-center w-100 mb-5 display-5 rounded-pill bouncing-heading fade-in2"
            style={{
              background: "linear-gradient(45deg, red, blue)",
              marginTop: "50px",

              padding: "6px",
            }}
          >
            Resources
          </h1>
        </div>

        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card className="custom-card2 h-100">
                <Card.Body>
                  <Card.Title>In-depth blockchain guide</Card.Title>
                  <Card.Text>
                    Learn what blockchain technology is, how it works and how it
                    helps increase trust and transparency through supply chain
                    traceability.
                  </Card.Text>
                  <Card.Link href="#" target="">
                    <FontAwesomeIcon className="mt-4" icon={faArrowRight} />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card className="custom-card2 h-100">
                <Card.Body>
                  <Card.Title> What is Hyperledger Fabric?</Card.Title>
                  <Card.Text>
                    The flexible blockchain platform is helping innovators
                    ignite a global business transformation.
                  </Card.Text>
                  <Card.Link href="#" target="">
                    <FontAwesomeIcon className="mt-5" icon={faArrowRight} />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <Card className="custom-card2  h-100">
                <Card.Body>
                  <Card.Title>
                    Blockchain for digital identity and credentials
                  </Card.Title>
                  <Card.Text>
                    Anchored in trust and securely managed by you. Navigate the
                    digital world confidently with IBM Blockchain.
                  </Card.Text>
                  <Card.Link href="#" target="">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Repeat the above Card structure for other resources */}
          </Row>
        </Container>
      </div>
      <div className="text-center mt-5 ">
        <h1
          className="text-light fw-bolder bg-primary w-50 nextStep"
          style={{ marginLeft: "350px" }}
        >
          Next Steps
        </h1>
        <h2 className="text-secondary fw-bolder">
          Connect with blockchain expert
        </h2>
        <p className="text-light fw-bolder fs-6 ">
          Book a 1-on-1 consultation to learn how you can use the world’s
          <p>most advanced blockchain expertise, technology and ecosystem.</p>
        </p>
      </div>
    </div>
  );
}

export default Resources;
