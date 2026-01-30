import { useNavigate } from 'react-router-dom';
import { Col, Row, Typography, Avatar } from 'antd';
import './ProductCategories.css';

const { Title, Text } = Typography;

const productCategories = [
  {
    key: 1,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb",
    title: "Fruits"
  },
  {
    key: 2,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    title: "Vegetables"
  },
  {
    key: 3,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    title: "Bakery"
  },
  {
    key: 4,
    image: "https://images.unsplash.com/photo-1506976781803-8cd62c7e65ee",
    title: "Dairy & Eggs"
  },
  {
    key: 5,
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    title: "Meat & Seafood"
  },
  {
    key: 6,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    title: "Pantry"
  },
  {
    key: 7,
    image: "https://images.unsplash.com/photo-1600266175161-c6938e3d141c",
    title: "Beverages"
  },
  {
    key: 8,
    image: "https://images.unsplash.com/photo-1566478431365-2e701e1b321a",
    title: "Snacks"
  }
];

function ProductCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/shop', { state: { selectedCategory: category } });
  };

  return (
    <div className='section-padding product-categories-section'>
      <div className="container">
        <div className="section-header">
          <Title level={2}>Shop by Category</Title>
          <Text type="secondary">Explore our wide range of fresh grocery categories</Text>
        </div>
        
        <Row gutter={[32, 24]} justify="center">
          {productCategories.map(category => (
            <Col xs={12} sm={8} md={6} lg={4} key={category.key}>
              <div 
                className='category-item-modern' 
                onClick={() => handleCategoryClick(category.title)}
                style={{ cursor: 'pointer' }}
              >
                <div className='category-circle-wrapper'>
                  <Avatar 
                    size={100} 
                    src={category.image} 
                    className="category-avatar-modern"
                  />
                </div>
                <Title level={5} className="category-title-modern">{category.title}</Title>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ProductCategories;