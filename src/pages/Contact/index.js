import { 
  Row, 
  Col, 
  Form, 
  Input, 
  Button, 
  Typography, 
  Card,
  Space,
  message 
} from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  SendOutlined,
  UserOutlined,
  ClockCircleOutlined,
  TwitterOutlined,
  FacebookFilled,
  InstagramFilled
} from '@ant-design/icons';
import './Contact.css';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Thanks for reaching out! We will get back to you shortly.');
    form.resetFields();
  };

  const contactOptions = [
    {
      icon: <PhoneOutlined />,
      title: "Call Anytime",
      detail: "+1 (555) fresh-01",
      sub: "24/7 dedicated support"
    },
    {
      icon: <MailOutlined />,
      title: "Email Us",
      detail: "hello@freshgrocer.com",
      sub: "Average response: 2 hours"
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Visit Store",
      detail: "88 Market St, SF",
      sub: "Mon - Sat (9am - 8pm)"
    }
  ];

  return (
    <div className="contact-page-modern">
      {/* Contact Hero Background */}
      <div className="contact-hero-banner">
        <div className="container">
          <div className="hero-text-center">
            <Title level={1}>Let's <span className="accent">Connect</span></Title>
            <Paragraph>Have questions about our organic selection? Our team is here to help you live a fresher life.</Paragraph>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-80px' }}>
        <Row gutter={[32, 32]}>
          {/* Contact Methods Cards */}
          {contactOptions.map((opt, i) => (
            <Col xs={24} md={8} key={i}>
              <Card className="contact-info-pill">
                <div className="pill-icon">{opt.icon}</div>
                <Title level={4}>{opt.title}</Title>
                <Text strong style={{ display: 'block' }}>{opt.detail}</Text>
                <Text type="secondary" size="small">{opt.sub}</Text>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="section-padding">
          <Row gutter={[48, 48]}>
            {/* Form Section */}
            <Col xs={24} lg={14}>
              <div className="form-container-modern">
                <Title level={2}>Send a Message</Title>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                        <Input prefix={<UserOutlined />} placeholder="John Doe" className="modern-input" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
                        <Input prefix={<MailOutlined />} placeholder="john@example.com" className="modern-input" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="subject" label="Subject">
                    <Input placeholder="How can we help?" className="modern-input" />
                  </Form.Item>
                  <Form.Item name="message" label="Your Message" rules={[{ required: true }]}>
                    <TextArea rows={6} placeholder="Tell us more about your request..." className="modern-input" />
                  </Form.Item>
                  <Button type="primary" size="large" icon={<SendOutlined />} htmlType="submit" className="contact-submit-btn">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Social & Hours Section */}
            <Col xs={24} lg={10}>
              <div className="contact-sidebar">
                <div className="sidebar-block">
                  <Title level={4}><ClockCircleOutlined /> Working Hours</Title>
                  <div className="hours-row">
                    <Text>Mon - Fri</Text>
                    <Text strong>08:00 AM - 09:00 PM</Text>
                  </div>
                  <div className="hours-row">
                    <Text>Sat - Sun</Text>
                    <Text strong>10:00 AM - 06:00 PM</Text>
                  </div>
                </div>

                <div className="sidebar-block" style={{ marginTop: 40 }}>
                  <Title level={4}>Follow Our Growth</Title>
                  <Paragraph>Join our community on social media for daily farm updates and flash sale alerts.</Paragraph>
                  <Space size="middle">
                    <Button shape="circle" icon={<TwitterOutlined />} className="social-btn" />
                    <Button shape="circle" icon={<FacebookFilled />} className="social-btn" />
                    <Button shape="circle" icon={<InstagramFilled />} className="social-btn" />
                  </Space>
                </div>

                <div className="map-thumbnail">
                   <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.325538729889!2d-122.4194155846823!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 20 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Contact;