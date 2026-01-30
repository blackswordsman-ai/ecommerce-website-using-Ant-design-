import React from 'react';
import { Table, Button, Space, Typography, Empty, Card, Row, Col, Divider, Breadcrumb } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined, ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const { Title, Text } = Typography;

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const columns = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'product',
      render: (text, record) => (
        <Space size="middle">
          <img src={record.image} alt={text} style={{ width: 50, borderRadius: 4 }} />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Text>{price}</Text>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (q) => <Text>{q}</Text>,
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => {
        const p = parseFloat(record.price.replace('$', ''));
        return <Text strong>${(p * record.quantity).toFixed(2)}</Text>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button 
          type="text" 
          danger 
          icon={<DeleteOutlined />} 
          onClick={() => removeFromCart(record.id)}
        />
      ),
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => {
    const p = parseFloat(item.price.replace('$', ''));
    return acc + p * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="section-padding empty-cart-container">
        <Empty
          image={<ShoppingCartOutlined style={{ fontSize: 64, color: '#d9d9d9' }} />}
          description={
            <Space direction="vertical">
              <Title level={4}>Your cart is empty</Title>
              <Text type="secondary">Looks like you haven't added anything to your cart yet.</Text>
            </Space>
          }
        >
          <Link to="/shop">
            <Button type="primary" size="large">Continue Shopping</Button>
          </Link>
        </Empty>
      </div>
    );
  }

  return (
    <div className="section-padding cart-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb-wrapper" style={{ marginBottom: 20 }}>
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: 'Shopping Cart' }
            ]}
          />
        </div>

        <div className="section-header" style={{ textAlign: 'left', marginBottom: 30 }}>
          <Title level={2}>Shopping Cart</Title>
          <Text type="secondary">Manage your selected items and proceed to checkout</Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={16}>
            <Card className="cart-list-card">
              <Table 
                columns={columns} 
                dataSource={cartItems} 
                rowKey="id" 
                pagination={false}
              />
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/shop">
                  <Button icon={<ArrowLeftOutlined />}>Continue Shopping</Button>
                </Link>
                <Button danger onClick={clearCart}>Clear Cart</Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Order Summary" className="order-summary-card">
              <div className="summary-row">
                <Text>Subtotal</Text>
                <Text strong>${subtotal.toFixed(2)}</Text>
              </div>
              <div className="summary-row">
                <Text>Shipping</Text>
                <Text strong>{subtotal > 50 ? 'Free' : '$10.00'}</Text>
              </div>
              <Divider />
              <div className="summary-row total-row">
                <Title level={4}>Total</Title>
                <Title level={4} style={{ color: 'var(--primary-color)' }}>
                  ${(subtotal > 50 ? subtotal : subtotal + 10).toFixed(2)}
                </Title>
              </div>
              <Link to="/checkout">
                <Button type="primary" size="large" block style={{ marginTop: 24, height: 50, borderRadius: 8 }}>
                  Proceed to Checkout
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
