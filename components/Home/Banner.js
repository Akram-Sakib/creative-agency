import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import bannerImg from '../../images/Frame.png'

const Banner = () => {
  return (
    <section className="banner-section banner-image">
      <Container>
        <div className="w-100 vh-100 d-flex align-items-center">
          <Row>
            <Col md={4} sm={12}>
              <div className="banner-left-content">
                <h1>Let's Grow Your Brand To The Next Level</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  sint asperiores doloribus facilis? Ullam aperiam magnam.
                </p>
                <a className="button-primary" href="">
                  Hire us
                </a>
              </div>
            </Col>
            <Col md={8} sm={12}>
              <div className="img-margin d-flex justify-content-center">
                <Image
                  width={600}
                  height={400}
                  src={bannerImg}
                  alt=""
                  priority
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="custom-shape-divider-bottom-1641177904">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
