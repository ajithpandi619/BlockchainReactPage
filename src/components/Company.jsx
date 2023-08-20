import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import cimg1 from "../assets/cimg1.jpg";
import cimg2 from "../assets/cimg2.jpg";
import cimg3 from "../assets/cimg3.jpg";
function Company() {
  const renderTooltip = (title) => (
    <Tooltip id="image-tooltip">{title}</Tooltip>
  );
  return (
    <div>
      <div className="intro-section container-fluid">
        <h1
          className="bx--content-block__heading text-light text-center w-100 mb-5 display-5 rounded-pill bouncing-heading fade-in2"
          style={{
            background: "linear-gradient(45deg, red, blue)",

            marginTop: "50px",
            padding: "6px",
          }}
        >
          Company
        </h1>
      </div>

      <div>
        <section className="wrapper">
          <Container className="container-fostrap">
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip("Binance - Cryptocurrency Exchange")}
                  >
                    <a className="img-card" href="#">
                      <Card.Img variant="top" src={cimg1} alt="" />
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>
                      <a href="#"> Binance - Cryptocurrency Exchange</a>
                    </Card.Title>
                    <Card.Text>
                      Founded in 2017 by Changpeng Zhao and Yi He, Binance is
                      now one of the largest companies dealing in digital
                      technology and finance with headquarters in George Town,
                      Cayman Islanda, Malta and various other locations
                      globally.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="link" className="btn-block">
                      Read More
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip(
                      "Coinbase - Cryptocurrency Exchange"
                    )}
                  >
                    <a className="img-card" href="#">
                      <Card.Img variant="top" src={cimg2} alt="" />
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>
                      <a href="#"> Coinbase - Cryptocurrency Exchange</a>
                    </Card.Title>
                    <Card.Text>
                      Coinbase was founded in 2012 by Brian Armstrong (former
                      engineer at Airbnb) and Fred Ehrsam (trader at Goldman
                      Sachs). They wanted to provide users with an easy-to-use
                      portal to buy and transact cryptocurrencies.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="link" className="btn-block">
                      Read More
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <Card>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip(
                      "Synthetix - Trade Synthetic Assets"
                    )}
                  >
                    <a className="img-card" href="#">
                      <Card.Img variant="top" src={cimg3} alt="" />
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>
                      <a href="#"> Synthetix - Trade Synthetic Assets</a>
                    </Card.Title>
                    <Card.Text>
                      Synthetix allows developers to issue synthetic assets on
                      the Ethereum blockchain. This is a compelling concept as
                      you can transform any asset into a tradable asset while
                      removing its potential restrictions.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="link" className="btn-block">
                      Read More
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Company;
