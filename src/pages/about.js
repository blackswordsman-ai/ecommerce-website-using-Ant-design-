import { Row, Col, Card, Avatar, Typography, Divider, Image } from 'antd';
import { TeamOutlined, TrophyOutlined, SafetyOutlined, RocketOutlined } from '@ant-design/icons';
import './About.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

function About() {
  return (
    <div className="about-page">
      {/* Hero Section with Image */}
      <div className="about-header">
        <Title level={1} className="about-title">About Us</Title>
        <div className="about-image-container">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Our team working together"
            preview={false}
            className="about-image"
          />
          <div className="image-overlay"></div>
          <Paragraph className="hero-subtitle">
            Building trust through quality products and exceptional service since 2010
          </Paragraph>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <Row gutter={[24, 24]} className="about-section">
          <Col xs={24} md={12}>
            <Title level={2}>Our Story</Title>
            <Paragraph>
              Founded in 2010, we started as a small team with a big vision - to revolutionize the shopping experience.
              What began as a modest local store has now grown into a trusted brand serving customers nationwide.
            </Paragraph>
            <Title level={2}>Our Mission</Title>
            <Paragraph>
              We're committed to providing high-quality products at affordable prices while maintaining
              sustainable business practices. Our goal is to make premium goods accessible to everyone
              without compromising on quality or ethical standards.
            </Paragraph>
            <Paragraph>
              Through innovation and customer-focused approaches, we strive to redefine the shopping
              experience for the modern consumer.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <div className="mission-image"></div>
          </Col>
        </Row>

        <Divider />

        {/* Values Section */}
        <div className="about-section">
          <Title level={2} className="section-title">Our Core Values</Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
              <Card className="value-card">
                <Meta
                  avatar={<Avatar size={64} icon={<TeamOutlined />} className="value-avatar" />}
                  title="Customer First"
                  description="We prioritize customer satisfaction above all else"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="value-card">
                <Meta
                  avatar={<Avatar size={64} icon={<TrophyOutlined />} className="value-avatar" />}
                  title="Quality"
                  description="Only the best products make it to our shelves"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="value-card">
                <Meta
                  avatar={<Avatar size={64} icon={<SafetyOutlined />} className="value-avatar" />}
                  title="Integrity"
                  description="Honest business practices always"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="value-card">
                <Meta
                  avatar={<Avatar size={64} icon={<RocketOutlined />} className="value-avatar" />}
                  title="Innovation"
                  description="Constantly evolving to serve you better"
                />
              </Card>
            </Col>
          </Row>
        </div>

        <Divider />

        {/* Team Section */}
        <div className="about-section">
          <Title level={2} className="section-title">Meet Our Team</Title>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card
                cover={
                  <div className="team-member-image" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }}></div>
                }
              >
                <Meta
                  title="Sarah Johnson"
                  description="CEO & Founder"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                cover={
                  <div className="team-member-image" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }}></div>
                }
              >
                <Meta
                  title="Michael Chen"
                  description="Head of Operations"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                cover={
                  <div className="team-member-image" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/68.jpg')" }}></div>
                }
              >
                <Meta
                  title="Emma Rodriguez"
                  description="Customer Experience Director"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;