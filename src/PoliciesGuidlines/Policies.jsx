import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Policies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card data-aos="fade-up" className="shadow p-4">
            <Card.Body>
              <h2 className="mb-4 text-center text-primary">📘 SSCAC's TP Affiliation Policy & Guidelines</h2>

              {/* Objectives */}
              <section className="mb-4" data-aos="fade-up">
                <h4 className="text-secondary">1. Objectives of TP Affiliation</h4>
                <ul>
                  <li>Recognize TPs under self-sustainable or industry-funded programs without permanent centers.</li>
                  <li>Create a TP pool to meet national/state skill needs with SSCAC-defined competency standards.</li>
                  <li>Facilitate startups in innovation & technical advancement in the skill ecosystem.</li>
                  <li>Establish a benchmark system for continuous institutional improvement.</li>
                </ul>
              </section>

              {/* Eligibility */}
              <section className="mb-4" data-aos="fade-up">
                <h4 className="text-secondary">2. Organizations Eligible for Affiliation</h4>
                <ul>
                  <li>Cultural institutions, Panda/Pujari/Trith Purohit associations, dance/music schools, individuals in art/culture.</li>
                  <li>Govt. affiliated training institutions and UGC-recognized colleges/institutes.</li>
                  <li>Private vocational training institutes, including those set up by companies.</li>
                  <li>Registered legal entities with PAN & ITR for at least 1 year.</li>
                </ul>
              </section>

              {/* Minimum Eligibility */}
              <section className="mb-4" data-aos="fade-up">
                <h4 className="text-secondary">3. Minimum Eligibility Criteria (Fresh Affiliation)</h4>
                <ul>
                  <li>Registered legal entity in India (min. 2 years)</li>
                  <li>PAN, TAN, cancelled cheque in organization’s name</li>
                  <li>Latest audited ITR</li>
                  <li>At least 1 SSCAC-certified trainer per applied job role</li>
                  <li>Experience profile in art & culture or skilling (if any)</li>
                </ul>
              </section>

              {/* Affiliation Process */}
              <section className="mb-4" data-aos="fade-up">
                <h4 className="text-secondary">4. Affiliation Process</h4>
                <p>Applies to new, re-affiliation, and provisional affiliation of Training Providers.</p>
              </section>

              {/* Provisional Affiliation */}
              <section data-aos="fade-up">
                <h4 className="text-secondary">5. Provisional Affiliation</h4>
                <ul>
                  <li>Granted for 6 months to organizations meeting minimum criteria.</li>
                  <li>Must submit purpose of affiliation & declaration on no blacklisting or financial debt.</li>
                  <li>Must certify authenticity of provided info.</li>
                  <li>TPs must apply for regular affiliation before provisional period ends.</li>
                </ul>
              </section>

              <p className="mt-4 text-center text-muted" style={{ fontSize: '0.95rem' }}>
                For detailed queries, contact <strong>sscacc.india@gmail.com</strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Policies;
