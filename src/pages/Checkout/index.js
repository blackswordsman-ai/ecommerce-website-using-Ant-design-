import React from 'react';
import { 
  Row, 
  Col, 
  Typography, 
  Form, 
  Input, 
  Button, 
  Radio, 
  Space, 
  Card, 
  Divider, 
  Breadcrumb,
  message,
  Result
} from 'antd';
import { 
  HomeOutlined, 
  CreditCardOutlined, 
  RocketOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const { Title, Text } = Typography;

const Checkout = () => {
  const { cartItems, cartCount, clearCart } = useCart();
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => {
    const p = parseFloat(item.price.replace('$', ''));
    return acc + p * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  const onFinish = (values) => {
    setSubmitted(true);
    clearCart();
    message.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <div className="section-padding">
        <Result
          status="success"
          title="Successfully Purchased Fresh Groceries!"
          subTitle="Order number: #FG-99214. We have sent your receipt to your email."
          extra={[
            <Button type="primary" key="home" onClick={() => navigate('/')}>
              Back Home
            </Button>,
            <Button key="track">Track Order</Button>,
          ]}
        />
      </div>
    );
  }

  if (cartCount === 0) {
    return (
      <div className="section-padding container" style={{ textAlign: 'center' }}>
        <Title level={2}>Your cart is empty.</Title>
        <Link to="/shop">
          <Button type="primary">Go to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page section-padding">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb-wrapper" style={{ marginBottom: 30 }}>
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: <Link to="/cart">Cart</Link> },
              { title: 'Checkout' }
            ]}
          />
        </div>

        <Title level={1} className="checkout-main-title">Checkout</Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ payment: 'credit-card' }}
        >
          <Row gutter={[40, 40]}>
            {/* Shipping Details */}
            <Col xs={24} lg={15}>
              <Card className="checkout-form-card" title="1. Shipping Information">
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                      <Input placeholder="John" className="checkout-input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                      <Input placeholder="Doe" className="checkout-input" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="address" label="Street Address" rules={[{ required: true }]}>
                  <Input placeholder="123 Fresh Ave" className="checkout-input" />
                </Form.Item>
                <Row gutter={16}>
                  <Col xs={24} md={8}>
                    <Form.Item name="city" label="City" rules={[{ required: true }]}>
                      <Input placeholder="San Francisco" className="checkout-input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="state" label="State" rules={[{ required: true }]}>
                      <Input placeholder="CA" className="checkout-input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="zip" label="Zip Code" rules={[{ required: true }]}>
                      <Input placeholder="94101" className="checkout-input" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>

              <Card className="checkout-form-card" title="2. Payment Method" style={{ marginTop: 30 }}>
                <Form.Item name="payment">
                  <Radio.Group className="payment-radio-group">
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Radio value="credit-card" className="payment-option">
                        <Space>
                          <CreditCardOutlined />
                          <Text strong>Credit Card</Text>
                        </Space>
                      </Radio>
                      <Radio value="paypal" className="payment-option">
                        <Space>
                          <Text strong>PayPal</Text>
                        </Space>
                      </Radio>
                      <Radio value="cod" className="payment-option">
                        <Space>
                          <Text strong>Cash on Delivery</Text>
                        </Space>
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Card>
            </Col>

            {/* Order Summary Summary */}
            <Col xs={24} lg={9}>
              <Card title="Order Summary" className="order-summary-card checkout-summary">
                <div className="summary-items-list">
                  {cartItems.map(item => (
                    <div className="summary-item" key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div className="item-details">
                        <Text strong className="item-title">{item.title}</Text>
                        <Text type="secondary">Qty: {item.quantity}</Text>
                      </div>
                      <Text strong className="item-price">{item.price}</Text>
                    </div>
                  ))}
                </div>
                
                <Divider />
                
                <div className="summary-row">
                  <Text>Subtotal</Text>
                  <Text strong>${subtotal.toFixed(2)}</Text>
                </div>
                <div className="summary-row">
                  <Text>Shipping</Text>
                  <Text strong>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</Text>
                </div>
                
                <Divider />
                
                <div className="summary-row total-row">
                  <Title level={4}>Total Amount</Title>
                  <Title level={4} className="accent-text">${total.toFixed(2)}</Title>
                </div>

                <Button 
                  type="primary" 
                  size="large" 
                  block 
                  htmlType="submit"
                  className="place-order-btn"
                  icon={<CheckCircleOutlined />}
                >
                  Place Order Now
                </Button>
                
                <div className="trust-badges">
                  <Space>
                    <div className="trust-item"><RocketOutlined /> <Text size="small">Fast Delivery</Text></div>
                    <div className="trust-item"><CheckCircleOutlined /> <Text size="small">Secure Payment</Text></div>
                  </Space>
                </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
