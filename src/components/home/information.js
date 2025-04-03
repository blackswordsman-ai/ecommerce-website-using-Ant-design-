import { Col, Row } from 'antd';
import bgImage1 from '../../assets/images/ad-img1.png';
import bgImage2 from '../../assets/images/ad-img2.png';
import './Information.css';

function Information() {
  return (
    <div className='block information-block'>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div 
            className='info-card promotion-card'
            style={{
              backgroundImage: `url(${bgImage1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='content-overlay'>
              <h3>Every day essentials from</h3>
              <div className='price'>P20</div>
              <button className='shop-now-btn'>Shop Now</button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div 
            className='info-card delivery-card'
            style={{
              backgroundImage: `url(${bgImage2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='content-overlay'>
              <h3>Same Day Delivery</h3>
              <p>Free when you spend over $20</p>
              <button className='learn-more-btn'>Learn More</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Information;