import React, { useState } from 'react';
import { 
  Collapse, 
  Input, 
  Typography, 
  Divider, 
  Button,
  Space,
  Tag,
  Tabs,
  Row,
  Col
} from 'antd';
import { 
  SearchOutlined, 
  PlusOutlined, 
  MinusOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  MailOutlined
} from '@ant-design/icons';
import './FAQ.css';

const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      key: '1',
      question: 'How do I place an order?',
      answer: 'You can place an order through our website by adding products to your cart and proceeding through the checkout process. You can also order via our mobile app or by calling our customer service.',
      category: 'Ordering',
      popular: true
    },
    {
      key: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for certain orders.',
      category: 'Payments',
      popular: true
    },
    {
      key: '3',
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.',
      category: 'Shipping',
      popular: true
    },
    {
      key: '5',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.',
      category: 'Shipping'
    },
    {
      key: '4',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be unused and in their original packaging with all tags attached. Some exclusions may apply.',
      category: 'Returns',
      popular: true
    },
    {
      key: '8',
      question: 'Are your products eco-friendly?',
      answer: 'We are committed to sustainability. Many of our products are made from recycled materials and we use eco-friendly packaging whenever possible.',
      category: 'Products'
    }
  ];

  const categories = ['All', 'Ordering', 'Payments', 'Shipping', 'Returns', 'Products'];

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderFaqList = (category) => {
    const list = category === 'All' 
      ? filteredFaqs 
      : filteredFaqs.filter(f => f.category === category);

    if (list.length === 0) {
      return (
        <div className="no-faqs">
          <Text type="secondary">No questions found in this category.</Text>
        </div>
      );
    }

    return (
      <Collapse 
        accordion
        expandIconPosition="end"
        expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
        className="premium-faq-collapse"
      >
        {list.map(faq => (
          <Panel 
            header={
              <Space>
                <Text strong className="faq-question-text">{faq.question}</Text>
                {faq.popular && <Tag color="green">Popular</Tag>}
              </Space>
            } 
            key={faq.key}
            className="faq-panel-modern"
          >
            <Paragraph className="faq-answer-text">{faq.answer}</Paragraph>
          </Panel>
        ))}
      </Collapse>
    );
  };

  return (
    <div className="faq-page-modern">
      {/* Hero Header */}
      <div className="faq-hero">
        <div className="container">
          <Row justify="center" align="middle" style={{ textAlign: 'center' }}>
            <Col xs={24} md={16}>
              <QuestionCircleOutlined className="hero-icon-large" />
              <Title level={1}>Help Center</Title>
              <Paragraph className="hero-subtitle">
                How can we help you today? Search our knowledge base or browse by category.
              </Paragraph>
              <div className="faq-search-wrapper">
                <Input 
                  placeholder="Type your question here (e.g. 'Shipping', 'Returns')" 
                  prefix={<SearchOutlined />}
                  size="large"
                  className="modern-search-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container section-padding">
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={16}>
            <div className="faq-tabs-container">
              <Tabs 
                defaultActiveKey="All" 
                size="large"
                className="modern-faq-tabs"
                items={categories.map(cat => ({
                  key: cat,
                  label: cat,
                  children: renderFaqList(cat)
                }))}
              />
            </div>
          </Col>

          {/* Contact Support Sidebar */}
          <Col xs={24} lg={8}>
            <div className="support-sidebar">
              <div className="support-card-modern">
                <CustomerServiceOutlined className="sidebar-icon" />
                <Title level={4}>Still Need Help?</Title>
                <Paragraph type="secondary">
                  If you can't find the answer you're looking for, our support team is available 24/7.
                </Paragraph>
                <Divider />
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Button type="primary" block size="large" icon={<MailOutlined />}>
                    Email Support
                  </Button>
                  <Button block size="large" ghost style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
                    Live Chat
                  </Button>
                </Space>
              </div>

              <div className="popular-topics">
                <Title level={5}>Quick Links</Title>
                <ul className="quick-links-list">
                  <li><a href="#!">Track My Order</a></li>
                  <li><a href="#!">Return Policy</a></li>
                  <li><a href="#!">Privacy Policy</a></li>
                  <li><a href="#!">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQ;