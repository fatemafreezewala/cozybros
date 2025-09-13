
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Naugh...",
      timeAgo: "10 months ago",
      rating: 5,
      text: "Cozy Bros is affordable and reliable. They were flexible with scheduling and answered all my questions clearly. I’ll definitely call them again if I need help in the future.",
      avatar: "/assets/images/testimonials/john.jpg",
      verified: true
    },
    {
      id: 2,
      name: "Jessie Kli...",
      timeAgo: "8 months ago",
      rating: 5,
      text: "Amazing people and excellent service! They came the very next day, explained how my new AC works, and even walked me through the thermostat. Couldn’t ask for a better experience...",
      avatar: "/assets/images/testimonials/jessie.jpg",
      verified: true
    },
    {
      id: 3,
      name: "Adam Steele",
      timeAgo: "7 months ago",
      rating: 5,
      text: "The Cozy Bros team is knowledgeable and easy to work with. They helped troubleshoot my issue quickly and made the whole process stress-free. Highly recommend!",
      avatar: "/assets/images/testimonials/adam.jpg",
      verified: false
    },
    {
      id: 4,
      name: "Joanne Gme...",
      timeAgo: "6 months ago",
      rating: 5,
      text: "Excellent company to do business with! Ahmed was professional, communicated clearly, and kept the appointment on time. He explained everything thoroughly and made the process simple.",
      avatar: "/assets/images/testimonials/joanne.jpg",
      verified: false
    }
  ];


  return (
    <section className="section-lg" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header Section - Left Aligned */}
        <div className="row align-items-start mb-5">
          <div className="col-lg-5">
            <div className="pbmit-heading-subheading">
              <h4 className="fs-6 fw-semibold">WHAT OUR CUSTOMERS SAY</h4>
              <h2 className="pbmit-title what-we-do-title mb-0" >
                The Cozy Bros Promise
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="mb-0" style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#64748b',
              marginTop: '25px',
              paddingLeft: '20px'
            }}>
              At Cozy Bros, we believe every customer deserves fair pricing, honest service,
               and dependable results. With years of experience and a commitment to integrity, 
              we work hard to earn your trust and provide your family with the best comfort solutions possible.
            </p>
          </div>
          <div className="col-lg-1 d-flex justify-content-end align-items-start" style={{ marginTop: '25px' }}>
            {/* Navigation Arrows */}
            <div className="testimonial-navigation d-flex">
              <button className="nav-arrow me-2" style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#28a745',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(40, 167, 69, 0.25)',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#218838'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#28a745'}
              >
                ←
              </button>
              <button className="nav-arrow" style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#28a745',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(40, 167, 69, 0.25)',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#218838'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#28a745'}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-3">
              <div className="testimonial-card bg-white rounded p-4 h-100 position-relative" style={{
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                }}
              >
                {/* Profile Section */}
                <div className="d-flex align-items-center mb-3">
                  <div className="position-relative me-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback to colored circle with initials if image fails
                        const target = e.target as HTMLImageElement;
                        const fallback = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div
                      className="rounded-circle d-none align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: testimonial.id === 1 ? '#8B4513' :
                          testimonial.id === 2 ? '#20B2AA' :
                            testimonial.id === 3 ? '#333' : '#666',
                        fontSize: '16px'
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {testimonial.verified && (
                      <div className="position-absolute" style={{ bottom: '-2px', right: '-2px' }}>
                        <span style={{
                          backgroundColor: '#ff6b35',
                          color: 'white',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px'
                        }}>
                          ✓
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold" style={{ fontSize: '15px', color: '#1e293b' }}>
                      {testimonial.name}
                    </h6>
                    <small style={{ fontSize: '13px', color: '#64748b' }}>
                      {testimonial.timeAgo}
                    </small>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-3">
                  <div className="d-flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} style={{ color: '#ffa500', fontSize: '16px', marginRight: '2px' }}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text mb-0" style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#475569'
                }}>
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial