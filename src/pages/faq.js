import React, { useState } from 'react';
import { 
  Collapse, 
  Input, 
  Typography, 
  Divider, 
  Button,
  Space,
  Tag
} from 'antd';
import { 
  SearchOutlined, 
  PlusOutlined, 
  MinusOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import './FAQ.css';

const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

const AppFaq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeKeys, setActiveKeys] = useState([]);

  const faqData = [
    {
      key: '1',
      question: 'How do I place an order?',
      answer: 'You can place an order through our website by adding products to your cart and proceeding through the checkout process. You can also order via our mobile app or by calling our customer service.',
      category: 'ordering',
      popular: true
    },
    {
      key: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for certain orders.',
      category: 'payments',
      popular: true
    },
    {
      key: '3',
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.',
      category: 'shipping'
    },
    {
      key: '4',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be unused and in their original packaging with all tags attached. Some exclusions may apply.',
      category: 'returns',
      popular: true
    },
    {
      key: '5',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.',
      category: 'shipping'
    },
    {
      key: '6',
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team 24/7 through live chat on our website, by email at support@yourcompany.com, or by phone at +1 (800) 123-4567.',
      category: 'contact'
    },
    {
      key: '7',
      question: 'Can I change or cancel my order?',
      answer: 'You can change or cancel your order within 1 hour of placing it by contacting our customer service. After that, changes may not be possible as we process orders quickly.',
      category: 'ordering'
    },
    {
      key: '8',
      question: 'Are your products eco-friendly?',
      answer: 'We are committed to sustainability. Many of our products are made from recycled materials and we use eco-friendly packaging whenever possible.',
      category: 'products'
    }
  ];

  const categories = [
    { label: 'All Questions', value: 'all' },
    { label: 'Ordering', value: 'ordering' },
    { label: 'Payments', value: 'payments' },
    { label: 'Shipping', value: 'shipping' },
    { label: 'Returns', value: 'returns' },
    { label: 'Products', value: 'products' },
    { label: 'Contact', value: 'contact' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const togglePanel = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter(k => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <Title level={2} className="faq-title">
          <QuestionCircleOutlined /> Frequently Asked Questions
        </Title>
        <Text type="secondary" className="faq-subtitle">
          Find answers to common questions about our products and services
        </Text>
      </div>

      <div className="container">
        {/* Search and Filter Section */}
        <div className="faq-controls">
          <Search
            placeholder="Search FAQs..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search"
          />
          
          <div className="category-filter">
            <Space wrap>
              {categories.map(cat => (
                <Button
                  key={cat.value}
                  type={selectedCategory === cat.value ? 'primary' : 'default'}
                  onClick={() => setSelectedCategory(cat.value)}
                  size="middle"
                >
                  {cat.label}
                </Button>
              ))}
            </Space>
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            <Collapse 
              activeKey={activeKeys}
              onChange={togglePanel}
              expandIconPosition="right"
              expandIcon={({ isActive }) => 
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
              bordered={false}
              ghost
            >
              {filteredFaqs.map(faq => (
                <Panel
                  key={faq.key}
                  header={
                    <div className="panel-header">
                      <Text strong>{faq.question}</Text>
                      {faq.popular && (
                        <Tag color="orange" className="popular-tag">
                          Popular
                        </Tag>
                      )}
                    </div>
                  }
                  className="faq-panel"
                >
                  <Paragraph>{faq.answer}</Paragraph>
                  {faq.followUp && (
                    <Text type="secondary">{faq.followUp}</Text>
                  )}
                </Panel>
              ))}
            </Collapse>
          ) : (
            <div className="no-results">
              <Title level={4}>No results found</Title>
              <Text>Try adjusting your search or filter criteria</Text>
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <Divider />
        <div className="contact-support">
          <Title level={3}>Still have questions?</Title>
          <Text>
            Can't find what you're looking for? Our support team is ready to help.
          </Text>
          <Button type="primary" size="large" className="contact-button">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppFaq;