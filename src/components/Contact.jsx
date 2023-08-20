import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <div className="intro-section container-fluid">
        <h1
          className="bx--content-block__heading text-light text-center w-100 mb-2 display-5 rounded-pill bouncing-heading fade-in2"
          style={{
            background: "linear-gradient(45deg, red, blue)",
            marginTop: "30px",
            padding: "6px",
            marginBottom: "10px",
          }}
        >
          Contact
        </h1>
      </div>
      <div className="bg-secondary bg-opacity-75 border border-primary fade-in p-3 rounded">
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <Form>
                <Form.Group controlId="name">
                  <Form.Label className="text-primary fw-bolder">
                    Name:
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label className="text-primary fw-bolder">
                    Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </Form.Group>
                <Form.Group controlId="subject">
                  <Form.Label className="text-primary fw-bolder">
                    Subject:
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label className="text-primary fw-bolder">
                    Phone Number:
                  </Form.Label>
                  <Form.Control type="tel" placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label className="text-primary fw-bolder">
                    Message:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter Your Message Here"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Now
                </Button>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <Row className="text-light m-4">
                {/* Address */}
                <Col md={4}>
                  <FontAwesomeIcon
                    className="w-50 h-25 p-3 rounded-circle border border-light bg-primary"
                    icon={faLocationDot}
                  />
                  <div>
                    <h4 className="text-info">Address</h4>
                    <p>
                      Blockchain Council,
                      <br />
                      340 S Lemon Ave #1147,
                      <br />
                      Walnut, CA 91789
                    </p>
                  </div>
                </Col>

                {/* Email Column */}
                <Col md={4}>
                  <FontAwesomeIcon
                    className="w-50 h-25 p-3 rounded-circle border border-light bg-primary"
                    icon={faEnvelope}
                  />
                  <div>
                    <h4 className="text-info">Email</h4>
                    <p>
                      <a
                        href="mailto:hello@blockchain-council.org"
                        className="text-light"
                      >
                        hello@blockchain-council.org
                      </a>
                    </p>
                  </div>
                </Col>

                {/* Phone Column */}
                <Col md={4}>
                  <FontAwesomeIcon
                    className="w-50 h-25 p-3 rounded-circle border border-light bg-primary"
                    icon={faPhoneVolume}
                  />
                  <div>
                    <h4 className="text-info">Phone</h4>
                    <p>+1-(323) 984-8594</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="bg-primary">
        <p className="text-light text-center mt-3 h-50">
          Copyright &copy; 2022
        </p>
      </footer>
    </div>
  );
}

export default Contact;
