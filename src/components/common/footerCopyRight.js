import { BackTop, Typography, Divider } from 'antd';
import payment from '../../assets/images/payment.png';
import './FooterCopyright.css'; // We'll create this CSS file

const { Text, Link } = Typography;

function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <Divider className="copyright-divider" />
      <div className="container">
        <div className="copyright-content">
          <div className="copyright-text">
            <Text type="secondary">
              © {new Date().getFullYear()} <Link href="/" strong>Grocery</Link>. All Rights Reserved.
            </Text>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="payment-methods">
            <img 
              src={payment} 
              alt="Accepted payment methods" 
              className="payment-image"
            />
          </div>
        </div>
      </div>
      <BackTop className="back-top">
        <div className="back-top-content">↑</div>
      </BackTop>
    </div>
  );
}

export default FooterCopyright;