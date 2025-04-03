import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import image1 from '../../assets/images/banner-img1.jpg';
import image2 from '../../assets/images/banner-img2.jpg';
import image3 from '../../assets/images/banner-img3.jpg';
import './Hero.css';

function Hero() {
  const carouselSettings = {
    autoplay: true,
    dots: true,
    effect: 'fade',
    autoplaySpeed: 5000
  };
  
  const serviceBlocks = [
    {
      icon: 'fa-solid fa-truck',
      title: 'Free Shipping & Return',
      description: 'Free Shipping On Order Over $20'
    },
    {
      icon: 'fa-solid fa-credit-card',
      title: 'Secure Payment',
      description: '100% Secure Online Payment'
    },
    {
      icon: 'fa-solid fa-headset',
      title: '24/7 Customer Support',
      description: 'Call Us Anytime You Need Help'
    }
  ];

  return (
    <div className='hero-block'>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={18}>
          <div className="carousel-container">
            <Carousel {...carouselSettings}>
              <div className="carousel-item">
                <img src={image1} alt='Banner: Special offers on electronics' />
                <div className="carousel-content">
                  <h2>Special Offers</h2>
                  <p>Save up to 50% on selected items</p>
                  <button className="shop-now-btn">Shop Now</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} alt='Banner: New arrivals for summer' />
                <div className="carousel-content">
                  <h2>New Arrivals</h2>
                  <p>Check out our summer collection</p>
                  <button className="shop-now-btn">View Collection</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} alt='Banner: Limited time offers' />
                <div className="carousel-content">
                  <h2>Limited Time Offers</h2>
                  <p>Don't miss out on these deals</p>
                  <button className="shop-now-btn">See Deals</button>
                </div>
              </div>
            </Carousel>
          </div>
        </Col>
        
        <Col xs={24} lg={6}>
          <div className="service-blocks">
            {serviceBlocks.map((block, index) => (
              <div className="service-block" key={index}>
                <div className="service-content">
                  <div className="service-icon">
                    <i className={block.icon}></i>
                  </div>
                  <div className="service-text">
                    <h3>{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;