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
        <h2
          className="text-center mb-5"
          style={{ fontWeight: '700', color: '#5a2a83' }}
          data-aos="fade-down"
        >
          Assessment Agencies in the Field of Art & Culture
        </h2>

        <Row className="mb-4">
          <Col md={12}>
            <Card data-aos="fade-up" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  Assessment agencies in the field of art and culture play a crucial role in evaluating the quality, impact,
                  and effectiveness of various initiatives, programs, and organizations. These agencies utilize different
                  methodologies to assess various aspects such as skills, heritage preservation, and organizational effectiveness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Section 1: Skill Assessment Agencies */}
        <Row className="mb-4">
          <Col md={12}>
            <Card data-aos="fade-right" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h4 style={{ color: '#5a2a83' }}>1. Skill Assessment Agencies</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  <li><strong>Purpose:</strong> Focused on assessing the skills and competencies of individuals in performing arts, visual arts, and crafts.</li>
                  <li><strong>Examples:</strong> Trendsetter Skill Assessors, Vedokt Skill and Consulting Pvt Ltd, Mettl.</li>
                  <li><strong>Functions:</strong> Conduct evaluations to determine if individuals meet required standards for qualifications.</li>
                  <li><strong>Recognition:</strong> Recognized by NCVET to offer assessment services in relevant sectors.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Section 2: Heritage Assessment Agencies */}
        <Row className="mb-4">
          <Col md={12}>
            <Card data-aos="fade-left" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h4 style={{ color: '#5a2a83' }}>2. Heritage Assessment Agencies</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  <li><strong>Purpose:</strong> Evaluate initiatives aimed at preserving and promoting India’s cultural heritage.</li>
                  <li><strong>Examples:</strong> Social auditors following SAS 600 framework (Social Audit Standard for heritage protection).</li>
                  <li><strong>Functions:</strong> Collect data and apply metrics to assess the effectiveness of heritage-related programs.</li>
                  <li><strong>Key Aspects:</strong> Impact on preservation, employment, and socio-cultural sustainability.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Section 3: Organizational Assessment Agencies */}
        <Row>
          <Col md={12}>
            <Card data-aos="fade-up" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h4 style={{ color: '#5a2a83' }}>3. Organizational Assessment Agencies</h4>
                <ul style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  <li><strong>Purpose:</strong> Assess the performance of organizations working in arts and culture, including NGOs and government bodies.</li>
                  <li><strong>Examples:</strong> Triodos Bank (known for its internal assessment in art and culture support).</li>
                  <li><strong>Functions:</strong> Evaluate organizational mission alignment, financial health, program effectiveness, and community involvement.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Assement;
