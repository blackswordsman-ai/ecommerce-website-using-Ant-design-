import { Col, Row, List, Avatar, Tag, Typography, Space, Divider } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  ArrowRightOutlined
} from '@ant-design/icons';
import './FooterWidget.css';

const { Title, Text, Paragraph } = Typography;

const featuredProducts = [
  {
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb",
    title: "Organic Red Apples",
    cost: "$9.99",
    link: "/shop",
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    title: "Whole Grain Bread",
    cost: "$2.99",
    link: "/shop",
    rating: 4.7
  },
  {
    image: "https://images.unsplash.com/photo-1563636619-e9107da5a76a",
    title: "Organic Whole Milk",
    cost: "$4.20",
    link: "/shop",
    rating: 4.9
  }
];

const recentPosts = [
  { title: 'Top 10 seasonal veggies for spring', date: 'Mar 15, 2024' },
  { title: '5 Quick and healthy breakfast ideas', date: 'Mar 12, 2024' },
  { title: 'Understanding organic food labels', date: 'Mar 10, 2024' }
];

const tags = [
  'Organic', 'Fresh', 'Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Healthy', 'Local', 'Eco-friendly'
];

function FooterWidget() {
  return (
    <div className="footer-widget-modern">
      <div className="container">
        <Row gutter={[40, 40]}>
          {/* Company Info */}
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-brand">
              <span className="brand-dot"></span>
              <span className="brand-name">Fresh<span className="accent">Grocer</span></span>
            </div>
            <Paragraph className="footer-company-desc">
              Your neighborhood digital marketplace for farm-fresh, sustainable, and organic groceries delivered to your doorstep.
            </Paragraph>
            <Space direction="vertical" size="middle" className="footer-contact">
              <div className="contact-item">
                <EnvironmentOutlined /> <Text>88 Market St, San Francisco</Text>
              </div>
              <div className="contact-item">
                <PhoneOutlined /> <Text>+1 (555) fresh-01</Text>
              </div>
              <div className="contact-item">
                <MailOutlined /> <Text>hello@freshgrocer.com</Text>
              </div>
            </Space>
          </Col>

          {/* Featured Groceries */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="widget-title-modern">Featured Fresh</Title>
            <List
              itemLayout="horizontal"
              dataSource={featuredProducts}
              renderItem={item => (
                <List.Item className="footer-product-item">
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} shape="square" size={60} className="footer-avatar" />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={<Text className="footer-price-text">{item.cost}</Text>}
                  />
                </List.Item>
              )}
            />
          </Col>

          {/* Recent News */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="widget-title-modern">Healthy Living</Title>
            <List
              dataSource={recentPosts}
              renderItem={item => (
                <List.Item className="footer-post-item">
                  <a href="#!" className="post-link">
                    <ArrowRightOutlined className="post-arrow" /> {item.title}
                  </a>
                  <Text type="secondary" className="post-date">{item.date}</Text>
                </List.Item>
              )}
            />
          </Col>

          {/* Categories & Social */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="widget-title-modern">Quick Labels</Title>
            <div className="footer-tags-cloud">
              {tags.map(tag => (
                <Tag key={tag} className="footer-tag-modern">{tag}</Tag>
              ))}
            </div>
            <Divider style={{ margin: '20px 0' }} />
            <Title level={5} className="social-header">Join the Community</Title>
            <Space size="middle" className="footer-social-links">
              <a href="#!" className="social-icon-box fb"><FacebookFilled /></a>
              <a href="#!" className="social-icon-box tw"><TwitterCircleFilled /></a>
              <a href="#!" className="social-icon-box ig"><InstagramFilled /></a>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}


export default FooterWidget;