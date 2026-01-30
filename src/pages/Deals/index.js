import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Badge, Space, Progress, Statistic, Breadcrumb } from 'antd';
import { ShoppingCartOutlined, FireOutlined, ThunderboltOutlined, HomeOutlined } from '@ant-design/icons';
import { useCart } from '../../context/CartContext';
import './Deals.css';

const { Title, Text, Paragraph } = Typography;
const { Countdown } = Statistic;
const { Meta } = Card;

// Countdown to end of day
const deadline = Date.now() + 1000 * 60 * 60 * 12; 

const dealsData = [
  {
    id: 'g12',
    title: "Organic Red Strawberries (500g)",
    originalPrice: "$12.00",
    dealPrice: "$7.99",
    discount: "33% OFF",
    stockLeft: 12,
    totalStock: 50,
    image: "https://images.unsplash.com/photo-1464965224031-937d952a42b1",
    tag: "Bestseller"
  },
  {
    id: 'g13',
    title: "Whole Chicken (Cage Free)",
    originalPrice: "$25.00",
    dealPrice: "$18.50",
    discount: "26% OFF",
    stockLeft: 8,
    totalStock: 30,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
    tag: "Low Stock"
  },
  {
    id: 'g7',
    title: "Fresh Atlantic Salmon Fillet",
    originalPrice: "$32.00",
    dealPrice: "$22.00",
    discount: "30% OFF",
    stockLeft: 15,
    totalStock: 40,
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    tag: "Hot"
  },
  {
    id: 'g6',
    title: "Organic Hass Avocados (5 Pack)",
    originalPrice: "$15.00",
    dealPrice: "$9.99",
    discount: "33% OFF",
    stockLeft: 45,
    totalStock: 100,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    tag: "Flash Sale"
  }
];

const Deals = () => {
  const { addToCart } = useCart();

  return (
    <div className="deals-page section-padding">
      <div className="container">
        {/* Breadcrumb ... (existing code) */}
        <div className="breadcrumb-wrapper" style={{ marginBottom: 20 }}>
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: 'Hot Deals' }
            ]}
          />
        </div>
        
        {/* Banner Section ... (existing code) */}
        <div className="deals-banner">
          <Row align="middle" gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large">
                <Badge count="Limited Time Only" style={{ backgroundColor: '#ff4d4f' }} />
                <Title level={1} className="banner-title">
                  <FireOutlined style={{ color: '#ff4d4f' }} /> Hot Deals of the Week
                </Title>
                <Paragraph className="banner-desc">
                  Exclusive discounts on our most popular items. Don't wait — these prices expire soon!
                </Paragraph>
                <div className="timer-wrapper">
                  <Text strong>Deals end in: </Text>
                  <Countdown value={deadline} format="HH:mm:ss" valueStyle={{ color: '#ff4d4f', fontWeight: 800 }} />
                </div>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <div className="thunder-icon-wrapper">
                <ThunderboltOutlined />
              </div>
            </Col>
          </Row>
        </div>

        {/* Deals Grid */}
        <Row gutter={[24, 24]}>
          {dealsData.map(deal => (
            <Col xs={24} sm={12} lg={6} key={deal.id}>
              <Badge.Ribbon text={deal.discount} color="#ff4d4f">
                <Card
                  hoverable
                  className="deal-item-card"
                  cover={
                    <Link to={`/product/${deal.id}`}>
                      <div className="deal-img-wrapper">
                        <img alt={deal.title} src={deal.image} />
                        <div className="deal-badge-tag">{deal.tag}</div>
                      </div>
                    </Link>
                  }
                  actions={[
                    <Button 
                      type="primary" 
                      danger 
                      block 
                      icon={<ShoppingCartOutlined />}
                      onClick={() => addToCart({
                        id: deal.id,
                        title: deal.title,
                        price: deal.dealPrice,
                        image: deal.image
                      })}
                    >
                      Add to basket
                    </Button>
                  ]}
                >
                  <Link to={`/product/${deal.id}`}>
                    <Meta
                      title={deal.title}
                      description={
                        <div className="deal-info-content">
                          <div className="deal-prices">
                            <Text strong className="current-price">{deal.dealPrice}</Text>
                            <Text delete type="secondary" className="old-price">{deal.originalPrice}</Text>
                          </div>
                          <div className="deal-stock">
                            <div className="stock-info">
                              <Text size="small">Stock Left: {deal.stockLeft}</Text>
                              <Text size="small" type="secondary">{Math.round((deal.stockLeft/deal.totalStock)*100)}%</Text>
                            </div>
                            <Progress 
                              percent={(deal.stockLeft/deal.totalStock)*100} 
                              showInfo={false} 
                              strokeColor="#ff4d4f"
                              status="active"
                            />
                          </div>
                        </div>
                      }
                    />
                  </Link>
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};


export default Deals;
