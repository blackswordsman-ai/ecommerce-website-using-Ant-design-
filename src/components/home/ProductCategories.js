import { useNavigate } from 'react-router-dom';
import { Col, Row, Typography, Avatar } from 'antd';
import './ProductCategories.css';

import fruitsImg from '../../assets/images/cat-fruits.png';
import vegImg from '../../assets/images/cat-veg.png';
import bakeryImg from '../../assets/images/cat-bakery.png';
import dairyImg from '../../assets/images/cat-dairy.png';
import meatImg from '../../assets/images/cat-meat.png';
import pantryImg from '../../assets/images/cat-pantry.png';

const { Title, Text } = Typography;

const productCategories = [
  {
    key: 1,
    image: fruitsImg,
    title: "Fruits"
  },
  {
    key: 2,
    image: vegImg,
    title: "Vegetables"
  },
  {
    key: 3,
    image: bakeryImg,
    title: "Bakery"
  },
  {
    key: 4,
    image: dairyImg,
    title: "Dairy & Eggs"
  },
  {
    key: 5,
    image: meatImg,
    title: "Meat & Seafood"
  },
  {
    key: 6,
    image: pantryImg,
    title: "Pantry"
  },
  {
    key: 7,
    image: "https://images.unsplash.com/photo-1544666668-f9659f8c67c2?auto=format&fit=crop&q=80&w=300&h=300",
    title: "Beverages"
  },
  {
    key: 8,
    image: "https://images.unsplash.com/photo-1599490659223-e153c3d20542?auto=format&fit=crop&q=80&w=300&h=300",
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