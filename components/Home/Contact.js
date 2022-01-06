import { Row, Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    
  return (
    <section className="contact-section">
      <Container>
        <div className="inner-contact">
          <Row>
            <Col md={6}>
              <div className="contact-left">
                <h2>Let us handle your project, professionally.</h2>
                <p>
                  With well written codes, we build amaizing apps for all
                  platforms, mobile and web apps in general
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="contact-right">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="py-3"
                      type="email"
                      placeholder="Your email address"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="py-3"
                      type="password"
                      placeholder="Your name / company's name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTextArea">
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                      style={{ height: "220px" }}
                    />
                  </Form.Group>

                  <button type="submit" className="button-primary">
                    Send
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
