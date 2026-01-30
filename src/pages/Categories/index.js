import React from 'react';
import { Row, Col, Card, Typography, Button, Breadcrumb } from 'antd';
import { ArrowRightOutlined, ShoppingOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import './Categories.css';

const { Title, Text } = Typography;

const categoriesData = [
  {
    id: 1,
    title: "Fruits",
    items: "120+ Products",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb",
    color: "#fff0f0"
  },
  {
    id: 2,
    title: "Vegetables",
    items: "85+ Products",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    color: "#f0f5ff"
  },
  {
    id: 3,
    title: "Bakery",
    items: "40+ Products",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    color: "#f6ffed"
  },
  {
    id: 4,
    title: "Dairy & Eggs",
    items: "200+ Products",
    image: "https://images.unsplash.com/photo-1506976781803-8cd62c7e65ee",
    color: "#fff7e6"
  },
  {
    id: 5,
    title: "Meat & Seafood",
    items: "150+ Products",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    color: "#e6fffb"
  },
  {
    id: 6,
    title: "Pantry",
    items: "60+ Products",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    color: "#feffe6"
  },
  {
    id: 7,
    title: "Snacks",
    items: "95+ Products",
    image: "https://images.unsplash.com/photo-1566478431365-2e701e1b321a",
    color: "#f0fff4"
  },
  {
    id: 8,
    title: "Beverages",
    items: "110+ Products",
    image: "https://images.unsplash.com/photo-1625772290748-3912a2df1442",
    color: "#fdf2f8"
  }
];


const CategoriesPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/shop', { state: { selectedCategory: category } });
  };

  return (
    <div className="categories-page section-padding">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb-wrapper" style={{ marginBottom: 20 }}>
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: 'Categories' }
            ]}
          />
        </div>

        <div className="section-header" style={{ textAlign: 'center', marginBottom: 50 }}>
          <Title level={1}>Fresh <span className="accent">Categories</span></Title>
          <Text type="secondary" style={{ fontSize: 16 }}>
            Browse our curated selection of farm-fresh essentials and gourmet groceries
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          {categoriesData.map(category => (
            <Col xs={24} sm={12} md={8} lg={6} key={category.id}>
              <Card 
                hoverable 
                className="category-full-card"
                onClick={() => handleCategoryClick(category.title)}
                style={{ backgroundColor: category.color }}
                cover={
                  <div className="category-image-container">
                    <img alt={category.title} src={category.image} className="category-img" />
                    <div className="category-overlay-main">
                      <Button type="primary" shape="circle" icon={<ShoppingOutlined />} size="large" />
                    </div>
                  </div>
                }
              >
                <div className="category-card-body">
                  <Title level={4}>{category.title}</Title>
                  <Text type="secondary">{category.items}</Text>
                  <div className="explore-link">
                    Shop Now <ArrowRightOutlined />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CategoriesPage;
