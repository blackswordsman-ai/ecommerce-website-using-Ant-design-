import { Row, Col, Card, Typography, Divider, Image, Space } from 'antd';
import { 
  TeamOutlined, 
  TrophyOutlined, 
  SafetyOutlined, 
  RocketOutlined, 
  CheckCircleFilled 
} from '@ant-design/icons';
import './About.css';

const { Title, Paragraph, Text } = Typography;

function About() {
  const values = [
    {
      icon: <TeamOutlined />,
      title: "Customer Centric",
      desc: "Putting your health and satisfaction at the core of every delivery.",
      color: "#e6f7ff"
    },
    {
      icon: <TrophyOutlined />,
      title: "Grade-A Quality",
      desc: "Only the freshest, farm-picked produce reaches your doorstep.",
      color: "#f6ffed"
    },
    {
      icon: <SafetyOutlined />,
      title: "Safe & Secure",
      desc: "Hygienic handling and 100% secure checkout experiences.",
      color: "#fff7e6"
    },
    {
      icon: <RocketOutlined />,
      title: "Fastest Delivery",
      desc: "Express shipping that respects your busy schedule.",
      color: "#fff0f0"
    }
  ];

  return (
    <div className="about-page">
      {/* Premium Hero Section */}
      <div className="about-hero-modern">
        <div className="container">
          <Row align="middle" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <Text className="about-tag">SINCE 2010</Text>
                <Title className="hero-main-title">We're Redefining The Way You <span className="accent">Shop Grocery.</span></Title>
                <Paragraph className="hero-desc">
                  FreshGrocer was born from a simple idea: everyone deserves access to fresh, healthy, and organic food without the hassle of a crowded market.
                </Paragraph>
                <div className="about-stats">
                  <div className="stat-item">
                    <Title level={3}>50K+</Title>
                    <Text type="secondary">Happy Users</Text>
                  </div>
                  <Divider type="vertical" style={{ height: 40 }} />
                  <div className="stat-item">
                    <Title level={3}>150+</Title>
                    <Text type="secondary">Farm Partners</Text>
                  </div>
                  <Divider type="vertical" style={{ height: 40 }} />
                  <div className="stat-item">
                    <Title level={3}>24h</Title>
                    <Text type="secondary">Avg. Delivery</Text>
                  </div>
                </div>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="about-hero-image-wrapper">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                  alt="Fresh groceries"
                  preview={false}
                  className="hero-img-rounded"
                />
                <div className="experience-badge">
                  <Title level={2} style={{ color: 'white', margin: 0 }}>14+</Title>
                  <Text style={{ color: 'white' }}>Years Success</Text>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <div className="section-padding">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Image 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d" 
                className="story-img"
                preview={false}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={2}>Our Organic Journey</Title>
              <Paragraph className="story-text">
                What started as a small weekend farmer's market stall in San Francisco has evolved into a digital-first grocery revolution. We spent years building direct relationships with local farmers to ensure that when we say "fresh," we mean it.
              </Paragraph>
              <ul className="check-list">
                <li><CheckCircleFilled /> Direct from organic local farms</li>
                <li><CheckCircleFilled /> Zero-waste packaging initiatives</li>
                <li><CheckCircleFilled /> AI-powered freshness tracking</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Values Section */}
        <div className="section-padding values-section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <Title level={2}>Our Core Values</Title>
            <Text type="secondary">The principles that guide our everyday operations</Text>
          </div>
          <Row gutter={[24, 24]}>
            {values.map((v, i) => (
              <Col xs={24} sm={12} md={6} key={i}>
                <Card className="modern-value-card" style={{ '--bg-color': v.color }}>
                  <div className="value-icon-box">{v.icon}</div>
                  <Title level={4}>{v.title}</Title>
                  <Text type="secondary">{v.desc}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Team Section */}
        <div className="section-padding team-section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <Title level={2}>The Minds Behind FreshGrocer</Title>
            <Text type="secondary">Innovation meets passion in our leadership team</Text>
          </div>
          <Row gutter={[32, 32]}>
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Michael Chen", role: "Head of Operations", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Emma Rodriguez", role: "Customer Experience", img: "https://randomuser.me/api/portraits/women/68.jpg" }
            ].map((member, i) => (
              <Col xs={24} sm={8} key={i}>
                <div className="modern-team-card">
                  <div className="member-image-box">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <Title level={4} style={{ margin: 0 }}>{member.name}</Title>
                    <Text type="secondary">{member.role}</Text>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;