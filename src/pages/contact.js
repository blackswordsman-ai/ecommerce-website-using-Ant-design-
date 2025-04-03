import { 
    Row, 
    Col, 
    Form, 
    Input, 
    Button, 
    Typography, 
    Divider, 
    Card,
    Avatar,
    message 
  } from 'antd';
  import { 
    MailOutlined, 
    PhoneOutlined, 
    EnvironmentOutlined,
    SendOutlined,
    UserOutlined 
  } from '@ant-design/icons';
  import './Contact.css';
  
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  
  function AppContact() {
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      console.log('Received values:', values);
      message.success('Your message has been sent successfully!');
      form.resetFields();
    };
  
    return (
      <div className="contact-page">
        {/* Hero Section */}
        <div className="contact-hero">
          <Title level={1} className="hero-title">Contact Us</Title>
          <Text className="hero-subtitle">
            We'd love to hear from you! Reach out for inquiries, support, or just to say hello.
          </Text>
        </div>
  
        <div className="container">
          <Row gutter={[24, 24]} className="contact-section">
            {/* Contact Form */}
            <Col xs={24} md={12}>
              <Card className="contact-card">
                <Title level={3} className="form-title">Send Us a Message</Title>
                <Form
                  form={form}
                  name="contact-form"
                  onFinish={onFinish}
                  layout="vertical"
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="Your Name" 
                      size="large"
                    />
                  </Form.Item>
  
                  <Form.Item
                    name="email"
                    rules={[
                      { 
                        required: true, 
                        message: 'Please input your email!' 
                      },
                      {
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input 
                      prefix={<MailOutlined />} 
                      placeholder="Your Email" 
                      size="large"
                    />
                  </Form.Item>
  
                  <Form.Item
                    name="subject"
                    rules={[{ required: true, message: 'Please input a subject!' }]}
                  >
                    <Input 
                      placeholder="Subject" 
                      size="large"
                    />
                  </Form.Item>
  
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                  >
                    <TextArea 
                      rows={6} 
                      placeholder="Your Message" 
                      size="large"
                    />
                  </Form.Item>
  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large"
                      icon={<SendOutlined />}
                      className="submit-btn"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
  
            {/* Contact Info */}
            <Col xs={24} md={12}>
              <Card className="info-card">
                <Title level={3} className="info-title">Contact Information</Title>
                
                <div className="contact-method">
                  <Avatar 
                    size={48} 
                    icon={<EnvironmentOutlined />} 
                    className="contact-icon"
                  />
                  <div className="contact-details">
                    <Text strong>Our Location</Text>
                    <Text>123 Business Street, Suite 100</Text>
                    <Text>San Francisco, CA 94107</Text>
                  </div>
                </div>
  
                <Divider className="divider" />
  
                <div className="contact-method">
                  <Avatar 
                    size={48} 
                    icon={<MailOutlined />} 
                    className="contact-icon"
                  />
                  <div className="contact-details">
                    <Text strong>Email Us</Text>
                    <Text>info@yourcompany.com</Text>
                    <Text>support@yourcompany.com</Text>
                  </div>
                </div>
  
                <Divider className="divider" />
  
                <div className="contact-method">
                  <Avatar 
                    size={48} 
                    icon={<PhoneOutlined />} 
                    className="contact-icon"
                  />
                  <div className="contact-details">
                    <Text strong>Call Us</Text>
                    <Text>+1 (555) 123-4567</Text>
                    <Text>Mon-Fri: 9am - 5pm</Text>
                  </div>
                </div>
  
                <Divider className="divider" />
  
                <Title level={4} className="hours-title">Business Hours</Title>
                <div className="business-hours">
                  <Text>Monday - Friday: 9:00 AM - 5:00 PM</Text>
                  <Text>Saturday: 10:00 AM - 2:00 PM</Text>
                  <Text>Sunday: Closed</Text>
                </div>
              </Card>
            </Col>
          </Row>
  
          {/* Map Section */}
          <div className="map-section">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.325538729889!2d-122.4194155846823!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
  export default AppContact;