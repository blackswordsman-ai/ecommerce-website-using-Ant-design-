import { Col, Row, Typography, Card } from 'antd';
import './TopBrand.css';

const { Title, Text } = Typography;

const brands = [
  {
    key: '1',
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    name: 'Nike'
  },
  {
    key: '2',
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: 'Apple'
  },
  {
    key: '3',
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    name: 'Starbucks'
  },
  {
    key: '4',
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    name: 'Adidas'
  },
  {
    key: '5',
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    name: 'H&M'
  },
  {
    key: '6',
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    name: 'Samsung'
  }
];

function TopBrand() {
  return (
    <div className="section-padding top-brands-section">
      <div className="container">
        <div className="section-header">
          <Title level={2}>Top Brands</Title>
          <Text type="secondary">We only host the best brands in the world</Text>
        </div>
        
        <Row gutter={[24, 24]} justify="center" align="middle">
          {brands.map(brand => (
            <Col 
              key={brand.key} 
              xs={12} 
              sm={8} 
              md={6} 
              lg={4}
            >
              <Card hoverable className="brand-logo-card">
                <div className="brand-logo-wrapper">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="brand-logo-img"
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default TopBrand;