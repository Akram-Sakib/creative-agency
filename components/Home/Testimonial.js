import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import customer1 from './../../images/customer-1.png';
import customer2 from './../../images/customer-2.png';
import customer3 from './../../images/customer-3.png';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Container>
        <div className="inner-testimonial">
          <h2 className="text-center">
            Clients <span>Feedback</span>
          </h2>
          <div className="clients">
            <Row>
              <Col md={4} sm={12}>
                <div className="client my-3">
                  <div className="client-top">
                    <div className="client-image">
                      <Image
                        width={60}
                        height={60}
                        src={customer1}
                        alt=""
                        priority
                      />
                    </div>
                    <div className="client-title">
                      <h3>Nash Patrik</h3>
                      <h4>CEO, Manpol</h4>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro doloribus consectetur tempore labore nihil totam.
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="client my-3">
                  <div className="client-top">
                    <div className="client-image">
                      <Image
                        width={60}
                        height={60}
                        src={customer2}
                        alt=""
                        priority
                      />
                    </div>
                    <div className="client-title">
                      <h3>Miriam Barron</h3>
                      <h4>CEO, Manpol</h4>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro doloribus consectetur tempore labore nihil totam.
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="client my-3">
                  <div className="client-top">
                    <div className="client-image">
                      <Image
                        width={60}
                        height={60}
                        src={customer3}
                        alt=""
                        priority
                      />
                    </div>
                    <div className="client-title">
                      <h3>Bria Malone</h3>
                      <h4>CEO, Manpol</h4>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro doloribus consectetur tempore labore nihil totam.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;