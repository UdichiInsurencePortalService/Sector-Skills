import React, { useState } from 'react';
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container, 
  Button, 
  Row, 
  Col 
} from 'react-bootstrap';
import {  message, Space } from 'antd';

import gov from '../assets/gov-logo.png';
import logo from '../assets/logo.jpg';

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This Page is Under Developement',
    });
  };

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavSelect = () => {
    setExpanded(false);
  };

  return (
    <>
          {contextHolder}

      <style jsx>{`
        .top-bar {
          background: linear-gradient(90deg, #0f766e, #0d9488);
          color: white;
          font-size: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }
        
        .top-bar-link {
          color: white !important;
          text-decoration: none;
          font-size: 0.75rem;
          margin: 0 0.5rem;
          border: none;
          background: none;
          padding: 0.25rem 0.5rem;
          transition: color 0.2s;
        }
        
        .top-bar-link:hover {
          color: #fed7aa !important;
        }
        
        .font-size-controls {
          background-color: #115e59;
          border-radius: 0.375rem;
          padding: 0.25rem;
          display: flex;
          gap: 0.25rem;
        }
        
        .font-size-btn {
          color: white !important;
          background: none;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          transition: background-color 0.2s;
        }
        
        .font-size-btn:hover {
          background-color: #0f766e;
        }
        
        .main-header {
          background: white;
          padding: 1rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-bottom: 4px solid #f97316;
        }
        
        .logo-gov {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s;
          margin-right: 1rem;
        }
        
        .logo-gov:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .logo-gov img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .logo-ncvet {
          margin-right: 1rem;
        }
        
        .logo-ncvet img {
          width: 90px;
          height: auto;
        }
        
        .org-title {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(90deg, #0d9488, #115e59);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }
        
        .custom-navbar {
          background: linear-gradient(90deg, #0f766e, #0d9488, #0f766e) !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 0 !important;
        }
        
        .navbar-nav .nav-link {
          color: white !important;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 1rem 1.5rem !important;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .navbar-nav .nav-link:hover {
          background-color: #115e59 !important;
          color: white !important;
        }
        
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 4px;
          background-color: #fb923c;
          transition: width 0.3s;
        }
        
        .navbar-nav .nav-link:hover::after {
          width: 100%;
        }
        
        .dropdown-menu {
          background: white;
          border: none;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-top: 3px solid #f97316;
          padding: 0.5rem 0;
          min-width: 250px;
        }
        
        .dropdown-item {
          color: #374151;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s;
          border-bottom: 1px solid #f3f4f6;
        }
        
        .dropdown-item:last-child {
          border-bottom: none;
        }
        
        .dropdown-item:hover {
          background-color: #f8fafc;
          color: #0f766e;
          padding-left: 2rem;
        }
        
        .dropdown-item::before {
          content: '→';
          margin-right: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .dropdown-item:hover::before {
          opacity: 1;
        }
        
        .navbar-toggler {
          border: none;
          padding: 0.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
        
        .search-btn {
          background: none;
          border: none;
          color: white;
          padding: 1rem;
          font-size: 1.125rem;
          transition: all 0.3s;
          border-radius: 0.5rem;
        }
        
        .search-btn:hover {
          background-color: #115e59;
          transform: scale(1.1);
        }
        
        .dropdown-icon {
          width: 1rem;
          height: 1rem;
          margin-left: 0.25rem;
          transition: transform 0.2s;
        }
        
        .dropdown-toggle::after {
          display: none;
        }
        
        /* Mobile specific styles */
        @media (max-width: 991.98px) {
          .top-bar {
            font-size: 0.625rem;
            padding: 0.25rem 0;
          }
          
          .top-bar-link {
            font-size: 0.625rem;
            margin: 0 0.25rem;
            padding: 0.125rem 0.25rem;
          }
          
          .font-size-controls {
            padding: 0.125rem;
          }
          
          .main-header {
            padding: 0.5rem 0;
          }
          
          .logo-gov {
            width: 3rem;
            height: 3rem;
            margin-right: 0.5rem;
          }
          
          .logo-ncvet img {
            width: 60px;
          }
          
          .org-title {
            font-size: 1rem;
          }
          
          .navbar-nav .nav-link {
            padding: 0.75rem 1rem !important;
            border-bottom: 1px solid #14b8a6;
          }
          
          .navbar-nav .nav-link::after {
            display: none;
          }
          
          .dropdown-menu {
            background-color: #0d9488;
            border: none;
            border-radius: 0;
            box-shadow: none;
            border-top: none;
            margin-left: 1rem;
          }
          
          .dropdown-item {
            color: #e5e7eb;
            border-bottom: 1px solid #0f766e;
            padding: 0.5rem 1rem;
          }
          
          .dropdown-item:hover {
            background-color: #115e59;
            color: white;
            padding-left: 1.5rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .top-bar .d-flex {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .font-size-controls {
            order: -1;
          }
          
          .main-header .d-flex {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .org-title {
            font-size: 0.875rem;
          }
        }
        
        @media (max-width: 575.98px) {
          .logo-gov {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .logo-ncvet img {
            width: 50px;
          }
          
          .org-title {
            font-size: 0.75rem;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="top-bar">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center flex-wrap">
                <button className="top-bar-link">NQR</button>
                <button className="top-bar-link d-none d-sm-inline">Skip to Main Content</button>
                <button className="top-bar-link d-none d-sm-inline">Screen Reader Access</button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center justify-content-md-end justify-content-center flex-wrap">
                <button className="top-bar-link fw-bold">हिंदी</button>
                <div className="font-size-controls">
                  <button className="font-size-btn">A-</button>
                  <button className="font-size-btn fw-bold">A</button>
                  <button className="font-size-btn">A+</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={12}>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div className="logo-gov">
                  <img src={gov} alt="Government Logo" />
                </div>
                <div className="logo-ncvet">
                  <img src={logo} alt="NCVET Logo" />
                </div>
                <div>
                  <h1 className="org-title mb-1">Sector Skill Council</h1>
                  <h1 className="org-title mb-0">For Art And Culture</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navigation Bar */}
      <Navbar 
        expand="lg" 
        className="custom-navbar" 
        expanded={expanded}
        onToggle={handleNavToggle}
        sticky="top"
      >
        <Container>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-between" onSelect={handleNavSelect}>
              <Nav.Link href="/">HOME</Nav.Link>
              
              <NavDropdown title={
                <span>
                  ABOUT US 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="about-dropdown">
                <NavDropdown.Item href="/about">About SSCAC</NavDropdown.Item>
                <Space>
                <NavDropdown.Item onClick={error} href="#history">Who's Who</NavDropdown.Item>
                </Space>
                <NavDropdown.Item href="/about">Vision And Mission</NavDropdown.Item>
                <NavDropdown.Item href="/objective">Objectives & Functions</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={
                <span>
                  STAKEHOLDERS 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="stakeholders-dropdown">
                <NavDropdown.Item href="/assement">Assessment Agencies</NavDropdown.Item>
                <NavDropdown.Item href="/goverment">Central Government</NavDropdown.Item>
                <NavDropdown.Item href="/training">Insititutes</NavDropdown.Item>
                <NavDropdown.Item href="/Instructure">Instructor</NavDropdown.Item>
                <NavDropdown.Item href="/examiner">Examiner</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={
                <span>
                  ACTIVITIES 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="activities-dropdown">
                <NavDropdown.Item href="/art">Art</NavDropdown.Item>
                <NavDropdown.Item href="/dance">Dance</NavDropdown.Item>
                <NavDropdown.Item href="/music">Music</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/polices">POLICIES & GUIDELINES</Nav.Link>

              <NavDropdown title={
                <span>
                  RESOURCES 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="resources-dropdown">
                <NavDropdown.Item href="/Download">Downloads</NavDropdown.Item>
<NavDropdown.Item
  as="a"
  href="https://ndl.iitkgp.ac.in/"
  target="_blank"
  rel="noopener noreferrer"
>
  Digital Library
</NavDropdown.Item>

                <NavDropdown.Item href="/Form">Application Forms</NavDropdown.Item>
                <NavDropdown.Item href="/galley">Brochures & Catalogs</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={
                <span>
                  CAREERS 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="careers-dropdown">
                <NavDropdown.Item href="/opening">Current Openings</NavDropdown.Item>
                <NavDropdown.Item href="/intenship">Internships</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={
                <span>
                  UPDATES 
                  <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              } id="updates-dropdown">
<NavDropdown.Item
  as="a"
  href="https://indianculture.gov.in/"
  target="_blank"
  rel="noopener noreferrer"
>
  Latest News
</NavDropdown.Item>

               <NavDropdown.Item href="/event">Past News</NavDropdown.Item>

<NavDropdown.Item
  as="a"
  href="https://indianculture.gov.in/"
  target="_blank"
  rel="noopener noreferrer"
>
Upcoming Events
</NavDropdown.Item>
              
              </NavDropdown>

              {/* <button className="search-btn ms-auto">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;