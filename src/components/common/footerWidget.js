import { Col, Row, List, Avatar, Tag, Typography } from 'antd';
import './FooterWidget.css'; // We'll create this CSS file
const { Title } = Typography;

const products = [
  {
    image: require('../../assets/images/img-footer1.jpg'),
    title: "iPhone 15 Pro Max",
    cost: "$1,099",
    link: "/products/iphone-15-pro-max",
    rating: 4.8
  },
  {
    image: require('../../assets/images/img-footer2.jpg'),
    title: "MacBook Air M2",
    cost: "$999",
    link: "/products/macbook-air-m2",
    rating: 4.7
  },
  {
    image: require('../../assets/images/img-footer3.jpg'),
    title: "Sony WH-1000XM5",
    cost: "$399",
    link: "/products/sony-wh1000xm5",
    rating: 4.9
  }
];

const recentPosts = [
  'New iPhone 16 leaks reveal exciting camera upgrades',
  'Best laptops for developers in 2024',
  'How to choose the perfect headphones for your needs',
  'Summer tech sales: What to expect this year',
  'Sustainable tech: Eco-friendly gadgets gaining popularity'
];

const tags = [
  'Technology',
  'Gadgets',
  'Electronics',
  'Deals',
  'Reviews',
  'Mobile',
  'Laptops',
  'Audio'
];

function FooterWidget() {
  return (
    <div className="footer-widget">
      <div className="container">
        <Row gutter={[24, 24]}>
          {/* Featured Products */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="widget-title">Featured Products</Title>
            <List
              itemLayout="horizontal"
              dataSource={products}
              renderItem={item => (
                <List.Item className="product-item">
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} shape="square" size={64} />}
                    title={<a href={item.link} className="product-title">{item.title}</a>}
                    description={
                      <>
                        <div className="product-price">{item.cost}</div>
                        <div className="product-rating">⭐ {item.rating}/5</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>

          {/* Top Rated */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="widget-title">Top Rated</Title>
            <List
              itemLayout="horizontal"
              dataSource={[...products].sort((a, b) => b.rating - a.rating)}
              renderItem={item => (
                <List.Item className="product-item">
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} shape="square" size={64} />}
                    title={<a href={item.link} className="product-title">{item.title}</a>}
                    description={
                      <>
                        <div className="product-price">{item.cost}</div>
                        <div className="product-rating">⭐ {item.rating}/5</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>

          {/* Recent Posts */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="widget-title">Recent Posts</Title>
            <List
              className="recent-posts"
              size="small"
              dataSource={recentPosts}
              renderItem={item => (
                <List.Item className="post-item">
                  <a href="#">{item}</a>
                </List.Item>
              )}
            />
          </Col>

          {/* Tags */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="widget-title">Tags</Title>
            <div className="tags-container">
              {tags.map(tag => (
                <Tag key={tag} className="tag" closable>
                  {tag}
                </Tag>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterWidget;