import Image from "next/image";
import { Col } from "react-bootstrap";
import service1 from './../../images/icons/service1.png';
import service2 from './../../images/icons/service2.png';
import service3 from './../../images/icons/service3.png';

const Service = () => {
    return (
      <>
        <Col md={4}>
          <div className="service text-center p-4">
            <div className="service-Img">
              <Image width={80} height={80} src={service1} alt="" priority />
            </div>
            <h3>Web & Mobile design</h3>
            <p>
              We craft stunning and amaizing web UI, using a well drrafted UX to
              fit your product
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service text-center p-4">
            <div className="service-Img">
              <Image width={80} height={80} src={service2} alt="" priority />
            </div>
            <h3>Graphics design</h3>
            <p>
              Amaizing flyers, social media posts and brand representations
              that would make your brand stand out
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service text-center p-4">
            <div className="service-Img">
              <Image width={80} height={80} src={service3} alt="" priority />
            </div>
            <h3>Web Development</h3>
            <p>
              With well written codes, we build amaizing apps for all platforms, mobile and web in general.
            </p>
          </div>
        </Col>
      </>
    );
}

export default Service;