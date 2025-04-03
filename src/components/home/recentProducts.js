import { Col, Row, Button } from 'antd';
import './RecentProducts.css'; // You'll need to create this CSS file

const products = [
  {
    key: '1',
    image: require('../../assets/images/img1.jpg'),
    title: "Fairy Clean and Fresh Washing Lotion",
    price: '$55.00'
  },
  {
    key: '2',
    image: require('../../assets/images/img2.jpg'),
    title: "Fairy Clean and Fresh Washing Lotion",
    price: '$4.00'
  },
  {
    key: '3',
    image: require('../../assets/images/img3.jpg'),
    title: "Fairy Clean and Fresh Washing Lotion",
    price: '$22.00'
  },
  {
    key: '4', // Fixed duplicate key '3' to '4'
    image: require('../../assets/images/img4.jpg'),
    title: "Fairy Clean and Fresh Washing Lotion",
    price: '$3.00'
  }
];

function RecentProducts() {
  return (
    <div className="block products">
      <h2>Recent Products</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.key}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-price">{product.price}</div>
                <Button type="primary" className="add-to-cart-btn">
                  Add to basket
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecentProducts;