import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-primary" data-aos="fade-down">Contact Us</h2>
      <Row>
        <Col md={6} data-aos="fade-right">
          <Card className="shadow-sm p-4 border-0">
            <h5 className="mb-4">Get in Touch</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={6} className="mt-4 mt-md-0" data-aos="fade-left">
          <Card className="p-4 border-0 shadow-sm bg-light h-100">
            <h5 className="mb-3 text-secondary">Office Address</h5>
            <p>
              <strong>Sector Skill Council for Art & Culture</strong><br />
              2nd Floor, Building X, Cultural Campus, New Delhi, India<br />
              Email: info@sscacc.in<br />
              Phone: +91 12345 67890
            </p>
            <div className="ratio ratio-16x9 mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.165136190842!2d77.211!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e41dd1e6df%3A0xdeb4b74048e318b6!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1718798981234"
                title="Office Location"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
