import { Col, Row, Typography } from 'antd';
import './TopBrand.css'; // We'll create this CSS file

const { Title } = Typography;

const brands = [
  {
    key: '1',
    image: require('../../assets/images/img9.jpg'),
    name: 'Nike',
    category: 'Sportswear'
  },
  {
    key: '2',
    image: require('../../assets/images/img10.jpg'),
    name: 'Apple',
    category: 'Electronics'
  },
  {
    key: '3',
    image: require('../../assets/images/img11.jpg'),
    name: 'Starbucks',
    category: 'Beverages'
  },
  {
    key: '4',
    image: require('../../assets/images/img9.jpg'),
    name: 'Adidas',
    category: 'Sportswear'
  }
];

function TopBrand() {
  return (
    <div className="block top-brands">
      <Title level={2} className="section-title">Top Brands</Title>
      <Row gutter={[24, 24]} justify="center">
        {brands.map(brand => (
          <Col 
            key={brand.key} 
            xs={12} 
            sm={8} 
            md={6} 
            lg={6}
          >
            <div className="brand-card">
              <div className="brand-image-container">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="brand-image"
                />
              </div>
              <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-category">{brand.category}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TopBrand;