import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Assement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#fdf8f4' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: '700', color: '#5a2a83' }} data-aos="fade-down">
Definition of an Assessment Agency

        </h2>

        <Row className="mb-5">
          <Col md={12}>
            <Card data-aos="fade-up" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                <p> Assessment Agency (AA) is defined as an agency which tests or conducts examinations to assess whether a learner has met the requirements necessary to be competent and qualified with respect to a skill or qualification.

      Sector Skill Council for Art & Culture
The Sector Skill Council for Art & Culture, established on 25th September 2020, works specifically in the domains of dance, music, and art. Recognition of an entity as an Assessment Agency by NCVET means that the entity has been authorized to assess trainees after completion of their training under an NSQC-aligned and approved qualification in these creative sectors.

The recognized Assessment Agency is eligible to carry out assessments for NSQF-aligned and approved qualifications in the Art & Culture sector, as allocated to the AA. This is subject to the agency demonstrating adequate capacity — such as availability of Question Banks, Subject Matter Experts (SMEs), and industry linkages — and is applicable for both Government of India-funded schemes/programmes and fee-based training programmes run under the Sector Skill Council for Art & Culture..</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       

        
      </Container>
    </Container>
  );
};

export default Assement;
