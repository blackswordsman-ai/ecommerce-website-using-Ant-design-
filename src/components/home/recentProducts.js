import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Card, Typography, Space, Tooltip } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { useCart } from '../../context/CartContext';
import { products as allProducts } from '../../data/products';
import './RecentProducts.css';

const { Title, Text } = Typography;
const { Meta } = Card;

function RecentProducts() {
  const { addToCart } = useCart();
  
  // Pick a few representative "Recent" items from different categories
  const recentProductIds = ['g1', 'g15', 'g19', 'g23'];
  const recentProducts = allProducts.filter(p => recentProductIds.includes(p.id));

  return (
    <div className="section-padding recent-products">
      <div className="container">
        <div className="section-header">
          <Title level={2}>Recent Arrivals</Title>
          <Text type="secondary">Just arrived! Fresh stock from all your favorite categories</Text>
        </div>
        
        <Row gutter={[24, 24]}>
          {recentProducts.map(product => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                className="modern-product-card"
                cover={
                  <Link to={`/product/${product.id}`}>
                    <div className="card-image-wrapper">
                      <img alt={product.name} src={product.image} />
                      <div className="card-actions-overlay">
                        <Space direction="vertical">
                          <Tooltip title="Quick View" placement="left">
                            <Button shape="circle" icon={<EyeOutlined />} />
                          </Tooltip>
                          <Tooltip title="Add to Wishlist" placement="left">
                            <Button shape="circle" icon={<HeartOutlined />} />
                          </Tooltip>
                        </Space>
                      </div>
                    </div>
                  </Link>
                }
                actions={[
                  <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />} 
                    block
                    className="add-basket-btn"
                    onClick={() => addToCart({
                      id: product.id,
                      title: product.name,
                      price: `$${(product.discountPrice || product.price).toFixed(2)}`,
                      image: product.image
                    })}
                  >
                    Add to basket
                  </Button>
                ]}
              >
                <div className="product-category-tag">{product.category}</div>
                <Link to={`/product/${product.id}`}>
                  <Meta
                    title={product.name}
                    description={
                      <div className="price-tag">
                        <Text strong className="current-price">
                          ${(product.discountPrice || product.price).toFixed(2)}
                        </Text>
                      </div>
                    }
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default RecentProducts;