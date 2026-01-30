import { FloatButton, Typography, Divider, Space } from 'antd';

import payment from '../../assets/images/payment.png';
import './FooterCopyright.css';

const { Text, Link } = Typography;

function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <Divider className="copyright-divider" />
      <div className="container">
        <div className="copyright-content">
          <div className="copyright-text">
            <Text type="secondary">
              © {new Date().getFullYear()} <Link href="/" strong>FreshGrocer</Link>. All Rights Reserved.
            </Text>
            <div className="footer-links" style={{ marginTop: 8 }}>
              <Space split={<Divider type="vertical" />}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
              </Space>
            </div>
          </div>
          <div className="payment-methods">
            <img 
              src={payment} 
              alt="Accepted payment methods" 
              className="payment-image"
              style={{ maxHeight: 30 }}
            />
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}

export default FooterCopyright;