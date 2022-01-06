import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import slackImg from './../../images/slack.png';
import googleImg from './../../images/google.png';
import uberImg from './../../images/uber.png';
import netflixImg from './../../images/netflix.png';
import airbnbImg from './../../images/airbnb.png';

const Sponser = () => {
  return (
    <section className="sponser-section">
      <div className="inner-sponser">
        <Container>
          <Row>
            <Col>
              <Image width={170} height={40} src={slackImg} alt="" priority />
            </Col>
            <Col>
              <Image width={170} height={40} src={googleImg} alt="" priority />
            </Col>
            <Col>
              <Image width={170} height={40} src={uberImg} alt="" priority />
            </Col>
            <Col>
              <Image width={170} height={40} src={netflixImg} alt="" priority />
            </Col>
            <Col>
              <Image width={170} height={40} src={airbnbImg} alt="" priority />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Sponser;
