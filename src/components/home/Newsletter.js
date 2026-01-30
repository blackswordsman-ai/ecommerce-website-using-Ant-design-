import React from 'react';
import { Typography, Input, Button, Row, Col, message } from 'antd';
import { SendOutlined, MailOutlined } from '@ant-design/icons';
import './Newsletter.css';

const { Title, Text } = Typography;

function Newsletter() {
  const onSubscribe = (v) => {
    message.success("Thank you for subscribing! Check your inbox for a 20% discount code.");
  };

  return (
    <div className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <Row align="middle" gutter={[40, 40]}>
            <Col xs={24} lg={12}>
              <div className="newsletter-content">
                <div className="newsletter-icon-box">
                  <MailOutlined />
                </div>
                <Title level={2} className="newsletter-title">
                  Freshness in Your <span className="accent">Inbox!</span>
                </Title>
                <Text className="newsletter-desc">
                  Join our 20k+ organic foodies. Subscribe for daily farm updates, 
                  exclusive recipes, and <Text strong>20% off</Text> your first order.
                </Text>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="newsletter-form-box">
                <div className="premium-input-group">
                  <Input 
                    placeholder="Enter your email address" 
                    size="large" 
                    className="newsletter-input"
                  />
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<SendOutlined />} 
                    className="newsletter-btn"
                    onClick={onSubscribe}
                  >
                    Subscribe
                  </Button>
                </div>
                <Text className="privacy-note">
                  Written for you, with zero spam. Unsubscribe at any time.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
