import React, { useState } from 'react'; // Add this import
import { 
  Row, 
  Col, 
  Card, 
  Input, 
  Select, 
  Slider, 
  Button, 
  Typography, 
  Pagination,
  Rate,
  Badge,
  Space,
  Divider
} from 'antd';
import { 
  SearchOutlined, 
  ShoppingCartOutlined, 
  HeartOutlined,
  FilterOutlined
} from '@ant-design/icons';
import './Shop.css';

// ... (rest of your code remains the same)
  
  const { Title, Text } = Typography;
  const { Meta } = Card;
  const { Option } = Select;
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      discountPrice: 69.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics',
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      discountPrice: 24.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      category: 'Clothing',
      inStock: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Stainless Steel Water Bottle',
      price: 24.99,
      discountPrice: null,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      category: 'Accessories',
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: 'Smart Fitness Tracker',
      price: 59.99,
      discountPrice: 49.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics',
      inStock: false,
      isNew: false
    },
    {
      id: 5,
      name: 'Leather Wallet',
      price: 45.00,
      discountPrice: 39.99,
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1591561954555-607968c989ab',
      category: 'Accessories',
      inStock: true,
      isNew: false
    },
    {
      id: 6,
      name: 'Ceramic Coffee Mug',
      price: 18.99,
      discountPrice: null,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38',
      category: 'Home',
      inStock: true,
      isNew: true
    },
    {
      id: 7,
      name: 'Yoga Mat',
      price: 34.99,
      discountPrice: 29.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
      category: 'Fitness',
      inStock: true,
      isNew: false
    },
    {
      id: 8,
      name: 'Wireless Phone Charger',
      price: 32.99,
      discountPrice: 27.99,
      rating: 4.0,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90',
      category: 'Electronics',
      inStock: true,
      isNew: true
    }
  ];
  
  function AppShop() {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
  
    const filteredProducts = products.filter(product => {
      // Filter by price range
      const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Filter by categories if any are selected
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);
      
      return withinPriceRange && matchesCategory;
    });
  
    const paginatedProducts = filteredProducts.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  
    const categories = [...new Set(products.map(product => product.category))];
  
    return (
      <div className="shop-page">
        {/* Shop Header */}
        <div className="shop-header">
          <Title level={2} className="shop-title">Our Products</Title>
          <Text className="shop-subtitle">
            Browse our wide selection of high-quality products
          </Text>
        </div>
  
        <div className="container">
          {/* Filters Sidebar */}
          <Row gutter={[24, 24]}>
            <Col xs={24} md={6}>
              <Card className="filters-card">
                <Title level={4} className="filters-title">
                  <FilterOutlined /> Filters
                </Title>
                
                <div className="filter-section">
                  <Title level={5}>Search</Title>
                  <Input 
                    placeholder="Search products..." 
                    prefix={<SearchOutlined />}
                  />
                </div>
  
                <Divider />
  
                <div className="filter-section">
                  <Title level={5}>Price Range</Title>
                  <Slider
                    range
                    min={0}
                    max={200}
                    defaultValue={[0, 100]}
                    onChange={setPriceRange}
                    value={priceRange}
                    tooltipVisible
                  />
                  <div className="price-range">
                    <Text>${priceRange[0]}</Text>
                    <Text>${priceRange[1]}</Text>
                  </div>
                </div>
  
                <Divider />
  
                <div className="filter-section">
                  <Title level={5}>Categories</Title>
                  <Select
                    mode="multiple"
                    placeholder="Select categories"
                    style={{ width: '100%' }}
                    onChange={setSelectedCategories}
                  >
                    {categories.map(category => (
                      <Option key={category} value={category}>{category}</Option>
                    ))}
                  </Select>
                </div>
  
                <Divider />
  
                <div className="filter-section">
                  <Title level={5}>Availability</Title>
                  <Button 
                    type="text" 
                    block 
                    style={{ textAlign: 'left' }}
                  >
                    In Stock Only
                  </Button>
                </div>
              </Card>
            </Col>
  
            {/* Products Grid */}
            <Col xs={24} md={18}>
              <div className="products-header">
                <Text strong>{filteredProducts.length} products found</Text>
                <Select defaultValue="popular" style={{ width: 150 }}>
                  <Option value="popular">Popular</Option>
                  <Option value="newest">Newest</Option>
                  <Option value="price-low">Price: Low to High</Option>
                  <Option value="price-high">Price: High to Low</Option>
                  <Option value="rating">Highest Rating</Option>
                </Select>
              </div>
  
              <Row gutter={[16, 24]}>
                {paginatedProducts.map(product => (
                  <Col xs={24} sm={12} lg={8} key={product.id}>
                    <Badge.Ribbon 
                      text={product.isNew ? "NEW" : ""} 
                      color="volcano"
                      className={!product.isNew ? "hidden" : ""}
                    >
                      <Card
                        hoverable
                        cover={
                          <div className="product-image-container">
                            <img
                              alt={product.name}
                              src={product.image}
                              className="product-image"
                            />
                            {!product.inStock && (
                              <div className="out-of-stock">Out of Stock</div>
                            )}
                          </div>
                        }
                        actions={[
                          <HeartOutlined key="wishlist" />,
                          <ShoppingCartOutlined key="cart" />,
                        ]}
                        className="product-card"
                      >
                        <Meta
                          title={product.name}
                          description={
                            <Space direction="vertical" size={4}>
                              <Rate 
                                disabled 
                                defaultValue={product.rating} 
                                allowHalf 
                                style={{ fontSize: 14 }}
                              />
                              <div className="price-section">
                                {product.discountPrice ? (
                                  <>
                                    <Text delete className="original-price">
                                      ${product.price.toFixed(2)}
                                    </Text>
                                    <Text strong className="discount-price">
                                      ${product.discountPrice.toFixed(2)}
                                    </Text>
                                  </>
                                ) : (
                                  <Text strong className="original-price">
                                    ${product.price.toFixed(2)}
                                  </Text>
                                )}
                              </div>
                            </Space>
                          }
                        />
                      </Card>
                    </Badge.Ribbon>
                  </Col>
                ))}
              </Row>
  
              {/* Pagination */}
              <div className="pagination-container">
                <Pagination
                  current={currentPage}
                  total={filteredProducts.length}
                  pageSize={pageSize}
                  onChange={setCurrentPage}
                  showSizeChanger={false}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  
  export default AppShop;