import { Col, Row, Button } from 'antd';
import './RecentProducts.css'; // You'll need to create this CSS file

 const products = [
    {
      key: '1',
      image: require('../../assets/images/img5.jpg'),
      title: "Organic Lavender Hand Wash",
      price: '$55.00',
      SalePrice: '$65.00'
    },
    {
      key: '2',
      image: require('../../assets/images/img6.jpg'),
      title: "Eucalyptus Mint Dish Soap",
      price: '$4.00',
      SalePrice: '$5.50'
    },
    {
      key: '3',
      image: require('../../assets/images/img7.jpg'),
      title: "Citrus Burst Multi-Surface Cleaner",
      price: '$22.00',
      SalePrice: '$25.00'
    },
    {
      key: '4',
      image: require('../../assets/images/img4.jpg'),
      title: "Tea Tree Antibacterial Spray",
      price: '$3.00',
      SalePrice: '$3.99'
    },
    {
      key: '5',
      image: require('../../assets/images/img8.jpg'),
      title: "Aloe Vera Fabric Softener",
      price: '$12.00',
      SalePrice: '$14.50'
    },
    {
      key: '6',
      image: require('../../assets/images/img9.jpg'),
      title: "Bamboo Charcoal Air Freshener",
      price: '$8.00',
      SalePrice: '$9.99'
    }
  ];

function SaleProducts() {
  return (
    <div className="block products">
      <h2>Sale Products</h2>
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
                <span className='salePrice'>{product.SalePrice}</span>
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

export default SaleProducts;