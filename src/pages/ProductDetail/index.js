import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Typography, 
  Button, 
  Rate, 
  InputNumber, 
  Tabs, 
  Divider, 
  Badge, 
  Space, 
  Breadcrumb,
  Tag,
  Card
} from 'antd';
import { 
  ShoppingCartOutlined, 
  HeartOutlined, 
  HomeOutlined, 
  SafetyCertificateOutlined,
  TruckOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

const { Title, Text, Paragraph } = Typography;

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="section-padding container" style={{ textAlign: 'center' }}>
        <Title level={2}>Product Not Found</Title>
        <Link to="/shop">
          <Button type="primary">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.name,
        price: `$${(product.discountPrice || product.price).toFixed(2)}`,
        image: product.image
      });
    }
  };

  return (
    <div className="product-detail-page section-padding">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: <Link to="/shop">Shop</Link> },
              { title: <Link to="/shop" state={{ selectedCategory: product.category }}>{product.category}</Link> },
              { title: product.name }
            ]}
          />
        </div>

        <Row gutter={[48, 48]} className="product-main-row">
          {/* Image Gallery */}
          <Col xs={24} md={12}>
            <div className="product-image-container">
              <Badge.Ribbon text={product.isNew ? "NEW" : ""} color="green" className={!product.isNew ? "hidden" : ""}>
                <img src={product.image} alt={product.name} className="main-product-image" />
              </Badge.Ribbon>
            </div>
          </Col>

          {/* Product Info */}
          <Col xs={24} md={12}>
            <div className="product-info-content">
              <Tag color="cyan" className="category-tag">{product.category}</Tag>
              <Title level={1} className="detail-title">{product.name}</Title>
              
              <Space direction="vertical" size={4} style={{ marginBottom: 20 }}>
                <Space>
                  <Rate disabled defaultValue={product.rating} allowHalf />
                  <Text type="secondary">({product.reviews} Customer Reviews)</Text>
                </Space>
                <Text type="success" strong>{product.inStock ? '● In Stock' : '○ Out of Stock'}</Text>
              </Space>

              <div className="detail-price-box">
                {product.discountPrice ? (
                  <>
                    <Title level={2} className="detail-new-price">
                      ${product.discountPrice.toFixed(2)}
                    </Title>
                    <Text delete className="detail-old-price">
                      ${product.price.toFixed(2)}
                    </Text>
                    <Tag color="red" className="save-tag">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </Tag>
                  </>
                ) : (
                  <Title level={2} className="detail-new-price">
                    ${product.price.toFixed(2)}
                  </Title>
                )}
              </div>

              <Paragraph className="detail-description">
                {product.description}
              </Paragraph>

              <Divider />

              <div className="purchase-actions">
                <Space size="large" align="center">
                  <InputNumber 
                    min={1} 
                    max={10} 
                    value={quantity} 
                    onChange={setQuantity} 
                    size="large"
                    className="quantity-input"
                  />
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<ShoppingCartOutlined />} 
                    className="add-to-cart-btn-large"
                    disabled={!product.inStock}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button shape="circle" size="large" icon={<HeartOutlined />} />
                </Space>
              </div>

              <div className="product-features-grid">
                <div className="feature-item">
                  <TruckOutlined className="feature-icon" />
                  <div>
                    <Text strong>Free Delivery</Text><br/>
                    <Text type="secondary" size="small">On orders over $50</Text>
                  </div>
                </div>
                <div className="feature-item">
                  <ReloadOutlined className="feature-icon" />
                  <div>
                    <Text strong>Easy Returns</Text><br/>
                    <Text type="secondary" size="small">30 Days Return Policy</Text>
                  </div>
                </div>
                <div className="feature-item">
                  <SafetyCertificateOutlined className="feature-icon" />
                  <div>
                    <Text strong>100% Organic</Text><br/>
                    <Text type="secondary" size="small">Certified Source</Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Tabs Section */}
        <div className="product-tabs-wrapper">
          <Tabs defaultActiveKey="1" items={[
            {
              key: '1',
              label: 'Description',
              children: (
                <div className="tab-content">
                  <Title level={4}>Product Overview</Title>
                  <Paragraph>{product.description}</Paragraph>
                  <Title level={4}>Key Specifications</Title>
                  <ul>
                    <li>Origin: {product.origin}</li>
                    <li>Weight: {product.weight}</li>
                    <li>Shelf Life: {product.shelfLife}</li>
                    <li>Storage: Keep in a cool, dry place</li>
                  </ul>
                </div>
              ),
            },
            {
              key: '2',
              label: 'Reviews',
              children: <div className="tab-content"><Text type="secondary">No reviews yet for this batch.</Text></div>,
            },
          ]} />
        </div>

        {/* Related Products Section */}
        <div className="related-products-section section-padding">
          <Divider orientation="left">
            <Title level={3}>Related <span className="accent">Products</span></Title>
          </Divider>
          <Row gutter={[20, 20]}>
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedP => (
                <Col xs={24} sm={12} lg={6} key={relatedP.id}>
                  <Card
                    hoverable
                    className="related-product-card"
                    cover={
                      <Link to={`/product/${relatedP.id}`}>
                        <div className="related-img-wrapper">
                          <img alt={relatedP.name} src={relatedP.image} />
                        </div>
                      </Link>
                    }
                  >
                    <div className="related-card-content">
                      <Link to={`/product/${relatedP.id}`}>
                        <Title level={5} className="related-name">{relatedP.name}</Title>
                      </Link>
                      <div className="related-price-row">
                        <Text strong className="related-price">
                          ${(relatedP.discountPrice || relatedP.price).toFixed(2)}
                        </Text>
                        <Button 
                          type="primary" 
                          shape="circle" 
                          size="small"
                          icon={<ShoppingCartOutlined />} 
                          onClick={() => addToCart({
                            id: relatedP.id,
                            title: relatedP.name,
                            price: `$${(relatedP.discountPrice || relatedP.price).toFixed(2)}`,
                            image: relatedP.image
                          })}
                        />
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
