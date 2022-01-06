import { Col, Container, Row } from "react-bootstrap";
import Service from "./Service";

const Services = () => {
  return (
    <section className="service-section">
      <Container>
        <div className="inner-service">
          <h2 className="text-center">
            Provide awesome <span className="services-text">services</span>
          </h2>
            <div className="services-container">
              <Row>
                <Service />
              </Row>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
