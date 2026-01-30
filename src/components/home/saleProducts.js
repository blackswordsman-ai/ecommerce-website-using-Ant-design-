import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Card, Typography, Space, Badge, Tooltip } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { useCart } from '../../context/CartContext';
import { products as allProducts } from '../../data/products';
import './RecentProducts.css';

const { Title, Text } = Typography;
const { Meta } = Card;

function SaleProducts() {
  const { addToCart } = useCart();

  // Show products that have a discountPrice
  const saleProducts = allProducts.filter(p => p.discountPrice !== null).slice(0, 4);

  return (
    <div className="section-padding sale-products" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="section-header">
          <Title level={2}>Flash Sale</Title>
          <Text type="secondary">Grab these fresh deals before they're gone!</Text>
        </div>
        
        <Row gutter={[24, 24]}>
          {saleProducts.map(product => {
            const discountPercent = Math.round(((product.price - product.discountPrice) / product.price) * 100);
            return (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Badge.Ribbon text={`${discountPercent}% OFF`} color="red">
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
                        danger
                        icon={<ShoppingCartOutlined />} 
                        block
                        className="add-basket-btn"
                        onClick={() => addToCart({
                          id: product.id,
                          title: product.name,
                          price: `$${product.discountPrice.toFixed(2)}`,
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
                            <Space small>
                              <Text strong className="current-price" style={{ color: '#ff4d4f' }}>
                                ${product.discountPrice.toFixed(2)}
                              </Text>
                              <Text delete type="secondary" className="old-price">
                                ${product.price.toFixed(2)}
                              </Text>
                            </Space>
                          </div>
                        }
                      />
                    </Link>
                  </Card>
                </Badge.Ribbon>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default SaleProducts;