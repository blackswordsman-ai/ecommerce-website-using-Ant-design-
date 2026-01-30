import { Col, Row, Typography, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import bgImage1 from '../../assets/images/ad-img1.png';
import bgImage2 from '../../assets/images/ad-img2.png';
import './Information.css';

const { Title, Paragraph, Text } = Typography;

function Information() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <div className='section-padding information-section'>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <div className='promo-card-modern'>
              <div 
                className='promo-bg'
                style={{ backgroundImage: `url(${bgImage1})` }}
              ></div>
              <div className='promo-content'>
                <Space direction="vertical" size="small">
                  <Text className="promo-label">Daily Essentials</Text>
                  <Title level={2}>Everyday Low Prices</Title>
                  <Paragraph>High quality products for your family at prices you'll love.</Paragraph>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<ArrowRightOutlined />}
                    onClick={handleShopNow}
                  >
                    Shop Essentials
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className='promo-card-modern delivery-promo'>
              <div 
                className='promo-bg'
                style={{ backgroundImage: `url(${bgImage2})` }}
              ></div>
              <div className='promo-content'>
                <Space direction="vertical" size="small">
                  <Text className="promo-label">Fast Shipping</Text>
                  <Title level={2}>Same Day Delivery</Title>
                  <Paragraph>Free on orders over $20. Delivered fresh to your door.</Paragraph>
                  <Button 
                    ghost 
                    size="large" 
                    className="learn-more-btn" 
                    icon={<ArrowRightOutlined />}
                    onClick={handleShopNow}
                  >
                    Learn More
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Information;