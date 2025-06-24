import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Goverment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#fdf8f4' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: '700', color: '#5a2a83' }} data-aos="fade-down">
          Two of the major functions of SSCAC include:
        </h2>

        <Row className="mb-5">
          <Col md={12}>
            <Card data-aos="fade-up" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                <p>Recognition and regulation of Awarding Bodies (ABs) and Assessment Agencies (AAs)

Approval of qualifications as per the NSQF (National Skills Qualification Framework)

Vocational Education, Training, and Skilling in the field of Art & Culture — including dance, music, and visual arts — spans across various departments and ministries of the Government of India. Multiple schemes and programs are implemented to skill candidates in these creative domains.

For government-funded programs, alignment of qualifications to the NSQF is mandatory. This necessitates becoming an NCVET-recognized Awarding Body, enabling the Sector Skill Council for Art & Culture to run NSQF-aligned qualifications in disciplines such as dance, art, and music.

Central government institutions — including ministries, departments, and autonomous bodies — engaged in cultural skilling initiatives will benefit from the various policies, regulations, and frameworks introduced by the national skilling regulator (NCVET), ultimately aiming for the holistic development of learners in the creative arts.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       

        
      </Container>
    </Container>
  );
};

export default Goverment;
