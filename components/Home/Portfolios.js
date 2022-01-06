import { Container, Row } from "react-bootstrap";
import Portfolio from "./Portfolio";

const Portfolios = () => {
  return (
    <section className="portfolio-section">
      <Container>
        <div className="inner-portfolio">
          <h2 className="text-center">
            Here are some of <span>our works</span>
          </h2>
          <div className="portfolios">
            <Row>
              <Portfolio/>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolios;
