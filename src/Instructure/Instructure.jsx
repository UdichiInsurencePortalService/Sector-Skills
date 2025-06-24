import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5 bg-light">
      <h2 className="text-center mb-5" data-aos="fade-down">
        Role of Trainers in Dance, Music & Art Skilling
      </h2>

      <Row className="mb-4" data-aos="fade-right">
        <Col md={6}>
          <h4>Who is a Trainer in Art & Culture Sector?</h4>
          <p>
            A trainer in the Sector Skill Council for Art & Culture imparts **competency-based training** in Dance, Music, or Visual Arts to learners. They enable aspiring artists to meet industry standards by applying effective learning strategies, creative content, and practical delivery modes aligned with **NSQF-approved job roles**.
          </p>
        </Col>

        <Col md={6}>
          <h4>Types of Trainers</h4>
          <p>
            <strong>Performing Arts Trainers:</strong> Specialize in Dance, Music, Theatre, etc.<br />
            <strong>Visual Arts Trainers:</strong> Focus on Fine Arts, Painting, Sculpture, etc.
          </p>
        </Col>
      </Row>

      <Row data-aos="fade-up">
        <Col md={12}>
          <Card className="shadow-sm p-4">
            <Card.Title className="mb-3">Key Roles & Responsibilities</Card.Title>
            <ul>
              <li>Deliver training aligned with cultural job roles and NSQF qualifications.</li>
              <li>Promote interactive, hands-on learning (e.g., choreography, rehearsals, art demos).</li>
              <li>Prepare culturally relevant subject matter and session plans.</li>
              <li>Use effective teaching strategies like role plays, stage performances, and exhibitions.</li>
              <li>Apply blended learning methods where required.</li>
              <li>Plan training using tools like lesson plans, practice modules, and assessments.</li>
              <li>Monitor learners' progress and adapt based on performance.</li>
              <li>Ensure training infrastructure — instruments, studios, and art supplies — is available.</li>
              <li>Foster industry connections for real-world exposure and placement support.</li>
              <li>Maintain discipline and engage learners positively throughout the training.</li>
              <li>Collect feedback from learners to improve training quality and outcomes.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Instructure;
