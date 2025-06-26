import React from 'react';
import culture from '../assets/logo/ministryc.png'
import gov from '../assets/logo/gov.png'
import ccrt from '../assets/logo/ccrt.jpg'
import sangeet from '../assets/logo/sangeet.png'
import national from '../assets/logo/national.png'

const Government = () => {
  const governmentLogos = [
    { 
      src: culture, 
      alt: 'Ministry of Culture',
      title: 'Ministry of Culture',
      url: 'https://www.indiaculture.gov.in/'
    },
    { 
      src: gov, 
      alt: 'Ministry of Skill Development',
      title: 'Ministry of Skill Development',
      url: 'https://www.msde.gov.in/'
    },
    { 
      src: ccrt, 
      alt: 'ccrt',
      title: 'Center For Culture Resources And Training',
      url: 'https://ccrtindia.gov.in/'
    },
    { 
      src: sangeet, 
      alt: 'Sangeet Natak Akademi',
      title: 'Sangeet Natak Akademi',
      url: 'https://sangeetnatak.gov.in/'
    },
     { 
      src: national, 
      alt: 'National School Of Drama',
      title: 'National School Of Drama',
      url: 'https://nsd.gov.in/'
    }
  ];

  const handleLogoClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Government Partners</h1>
          <p className="lead text-muted">
            Recognized and supported by leading government institutions for excellence in cultural education and skill development
          </p>
        </div>

        {/* Two Major Functions Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-4">
              
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 bg-primary text-white">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="fs-2 me-3">🎓</span>
                          <h5 className="card-title mb-0">Educational Excellence</h5>
                        </div>
                        <p className="card-text">
                          Providing comprehensive cultural education and skill development programs that meet national standards and promote artistic excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 bg-danger text-white">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="fs-2 me-3">🌟</span>
                          <h5 className="card-title mb-0">Cultural Preservation</h5>
                        </div>
                        <p className="card-text">
                          Preserving and promoting India's rich cultural heritage through innovative teaching methods and community engagement programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Logos - Centered Grid */}
        <div className="row justify-content-center g-4 mb-5">
          {governmentLogos.slice(0, 4).map((logo, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div 
                className="card h-100 shadow-sm" 
                style={{ cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}
                onClick={() => handleLogoClick(logo.url)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="mb-3" 
                    style={{ 
                      height: '80px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#e3f2fd',
                      borderRadius: '10px',
                      padding: '15px',
                      border: '2px solid #bbdefb'
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid"
                      style={{ maxHeight: '80px', maxWidth: '100%' }}
                    />
                  </div>
                  <h6 className="card-title text-primary fw-semibold">
                    {logo.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last Logo Centered - National School of Drama with background */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 col-lg-3">
            <div 
              className="card shadow-sm" 
              style={{ cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}
              onClick={() => handleLogoClick(governmentLogos[4].url)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-body text-center p-4">
                <div 
                  className="mb-3" 
                  style={{ 
                    height: '80px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#fff3e0',
                    borderRadius: '10px',
                    padding: '15px',
                    border: '2px solid #ffcc02'
                  }}
                >
                  <img
                    src={governmentLogos[4].src}
                    alt={governmentLogos[4].alt}
                    className="img-fluid"
                    style={{ maxHeight: '60px', maxWidth: '100%' }}
                  />
                </div>
                <h6 className="card-title text-primary fw-semibold">
                  {governmentLogos[4].title}
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section with Background Color */}
     
      </div>
    </div>
  );
};

export default Government;