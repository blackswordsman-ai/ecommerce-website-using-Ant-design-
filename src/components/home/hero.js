import { Col, Row, Carousel, Button, Typography, Space, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, ArrowRightOutlined, TruckOutlined, SafetyCertificateOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import image1 from '../../assets/images/banner-img1.jpg';
import image2 from '../../assets/images/banner-img2.jpg';
import image3 from '../../assets/images/banner-img3.jpg';
import './Hero.css';

const { Title, Paragraph } = Typography;

function Hero() {
  const navigate = useNavigate();
  
  const handleShopNow = () => {
    navigate('/shop');
  };

  const carouselSettings = {
    autoplay: true,
    dots: true,
    effect: 'fade',
    autoplaySpeed: 5000,
    className: 'hero-carousel'
  };
  
  const serviceBlocks = [
    {
      icon: <TruckOutlined />,
      title: 'Global Shipping',
      description: 'Free on orders over $50'
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: 'Secure Payment',
      description: '100% encrypted processing'
    },
    {
      icon: <CustomerServiceOutlined />,
      title: '24/7 Support',
      description: 'Dedicated help center'
    }
  ];

  return (
    <div className='hero-block'>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={18}>
            <div className="carousel-container">
              <Carousel {...carouselSettings}>
                {/* ... existing carousel items ... */}
                <div className="carousel-item">
                  <div className="carousel-image-wrapper">
                    <img src={image1} alt='Fresh organic vegetables' />
                    <div className="carousel-overlay"></div>
                  </div>
                  <div className="carousel-content">
                    <Space direction="vertical" size="middle">
                      <Tag color="green">Premium Quality</Tag>
                      <Title level={1}>Fresh From The Farm</Title>
                      <Paragraph>Experience the taste of nature with our hand-picked organic products delivered to your doorstep.</Paragraph>
                      <Button 
                        type="primary" 
                        size="large" 
                        icon={<ShoppingCartOutlined />} 
                        className="cta-button"
                        onClick={handleShopNow}
                      >
                        Shop Now <ArrowRightOutlined />
                      </Button>
                    </Space>
                  </div>
                </div>
                
                <div className="carousel-item">
                  <div className="carousel-image-wrapper">
                    <img src={image2} alt='Seasonal fruits' />
                    <div className="carousel-overlay"></div>
                  </div>
                  <div className="carousel-content">
                    <Space direction="vertical" size="middle">
                      <Tag color="orange">Seasonal Deals</Tag>
                      <Title level={1}>Summer Harvest 2024</Title>
                      <Paragraph>Get up to 30% off on all seasonal fruits and berry collections this month only.</Paragraph>
                      <Button 
                        type="primary" 
                        size="large" 
                        icon={<ShoppingCartOutlined />} 
                        className="cta-button"
                        onClick={handleShopNow}
                      >
                        View Collection <ArrowRightOutlined />
                      </Button>
                    </Space>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-image-wrapper">
                    <img src={image3} alt='Eco-friendly packaging' />
                    <div className="carousel-overlay"></div>
                  </div>
                  <div className="carousel-content">
                    <Space direction="vertical" size="middle">
                      <Tag color="blue">Sustainable Life</Tag>
                      <Title level={1}>Eco-Friendly Living</Title>
                      <Paragraph>Join our mission for a greener planet with our 100% biodegradable packaging and sustainable sourcing.</Paragraph>
                      <Button 
                        type="primary" 
                        size="large" 
                        icon={<ShoppingCartOutlined />} 
                        className="cta-button"
                        onClick={handleShopNow}
                      >
                        Learn More <ArrowRightOutlined />
                      </Button>
                    </Space>
                  </div>
                </div>
              </Carousel>
            </div>
          </Col>
          
          <Col xs={24} lg={6}>
            <div className="service-blocks">
              {serviceBlocks.map((block, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon-wrapper">
                    {block.icon}
                  </div>
                  <div className="service-text">
                    <Title level={5}>{block.title}</Title>
                    <Paragraph type="secondary">{block.description}</Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>

  );
}

export default Hero;