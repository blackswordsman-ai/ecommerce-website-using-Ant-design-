import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Input, Avatar, List, Space, Typography, Badge, Tooltip } from 'antd';
import { 
  MessageOutlined, 
  CloseOutlined, 
  SendOutlined, 
  RobotOutlined
} from '@ant-design/icons';
import './ChatBot.css';

const { Text, Title } = Typography;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm your FreshGrocer Assistant. How can I help you find the freshest groceries today?", 
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response Logic
    setTimeout(() => {
      let botResponse = "";
      const query = input.toLowerCase();

      if (query.includes('apple')) botResponse = "We have wonderful Organic Red Apples in stock! You can find them in the Fruits category.";
      else if (query.includes('order') || query.includes('track')) botResponse = "To track your order, please visit your Profile > My Orders section or use your tracking ID FG-99214.";
      else if (query.includes('delivery') || query.includes('shipping')) botResponse = "We offer free delivery on orders over $50! Standard delivery takes about 24 hours.";
      else if (query.includes('discount') || query.includes('offer')) botResponse = "Check out our 'Hot Deals' page for up to 30% off on fresh produce!";
      else if (query.includes('hello') || query.includes('hi')) botResponse = "Hello! I'm here to help. What are you looking for today?";
      else botResponse = "That's a great question! I'm still learning, but you can definitely find most items in our 'Shop All' section. Would you like me to connect you with a human agent?";

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Floating Action Button */}
      {!isOpen && (
        <Badge count={1} offset={[-5, 5]} size="small">
          <Tooltip title="Need help?" placement="left">
            <Button 
              type="primary" 
              shape="circle" 
              size="large" 
              icon={<MessageOutlined />} 
              onClick={() => setIsOpen(true)}
              className="chatbot-fab"
            />
          </Tooltip>
        </Badge>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card 
          className="chatbot-window"
          title={
            <div className="chat-header">
              <Space>
                <Avatar icon={<RobotOutlined />} style={{ backgroundColor: 'var(--primary-color)' }} />
                <div>
                  <Title level={5} style={{ margin: 0, color: 'white' }}>Fresh Bot</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Always active</Text>
                </div>
              </Space>
              <Button 
                type="text" 
                icon={<CloseOutlined style={{ color: 'white' }} />} 
                onClick={() => setIsOpen(false)} 
              />
            </div>
          }
          footer={
            <div className="chat-footer">
              <Input 
                placeholder="Type a message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPressEnter={handleSend}
                suffix={
                  <Button 
                    type="primary" 
                    shape="circle" 
                    size="small" 
                    icon={<SendOutlined />} 
                    onClick={handleSend}
                    disabled={!input.trim()}
                  />
                }
              />
              <div className="chat-footer-note">
                <Text type="secondary" style={{ fontSize: '10px' }}>Powered by FreshGrocer AI</Text>
              </div>
            </div>
          }
        >
          <div className="chat-messages-content">
            <List
              dataSource={messages}
              renderItem={(msg) => (
                <div className={`message-wrapper ${msg.sender}`}>
                  <div className="message-bubble">
                    <Text>{msg.text}</Text>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
              )}
            />
            {isTyping && (
              <div className="message-wrapper bot">
                <div className="message-bubble typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
