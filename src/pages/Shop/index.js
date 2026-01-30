import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  Divider,
  Breadcrumb
} from 'antd';
import { 
  SearchOutlined, 
  ShoppingCartOutlined, 
  FilterOutlined,
  HomeOutlined
} from '@ant-design/icons';
import './Shop.css';
import { useCart } from '../../context/CartContext';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Modern grocery products
const products = [
  {
    id: 'g1',
    name: "Organic Red Apples",
    price: 12.99,
    discountPrice: 9.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb",
    category: "Fruits",
    inStock: true,
    isNew: true
  },
  {
    id: 'g2',
    name: "Fresh Broccoli Florets",
    price: 4.50,
    discountPrice: null,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    category: "Vegetables",
    inStock: true,
    isNew: false
  },
  {
    id: 'g3',
    name: "Whole Grain Bread",
    price: 3.50,
    discountPrice: 2.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "Bakery",
    inStock: true,
    isNew: true
  },
  {
    id: 'g4',
    name: "Farm Fresh Large Eggs",
    price: 5.20,
    discountPrice: null,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506976781803-8cd62c7e65ee",
    category: "Dairy & Eggs",
    inStock: true,
    isNew: false
  },
  {
    id: 'g5',
    name: "Organic Whole Milk",
    price: 4.80,
    discountPrice: 4.20,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563636619-e9107da5a76a",
    category: "Dairy & Eggs",
    inStock: true,
    isNew: false
  },
  {
    id: 'g6',
    name: "Hass Avocados (3 pack)",
    price: 6.50,
    discountPrice: 5.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    category: "Fruits",
    inStock: true,
    isNew: true
  },
  {
    id: 'g7',
    name: "Salmon Fillet (Fresh)",
    price: 18.00,
    discountPrice: 15.50,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    category: "Meat & Seafood",
    inStock: true,
    isNew: false
  },
  {
    id: 'g8',
    name: "Extra Virgin Olive Oil",
    price: 14.99,
    discountPrice: null,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    category: "Pantry",
    inStock: true,
    isNew: false
  },
  {
    id: 'g9',
    name: "Greek Yogurt (Family Pack)",
    price: 7.50,
    discountPrice: 6.50,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    category: "Dairy & Eggs",
    inStock: true,
    isNew: false
  },
  {
    id: 'g10',
    name: "Organic Bananas",
    price: 2.99,
    discountPrice: null,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    category: "Fruits",
    inStock: true,
    isNew: false
  },
  {
    id: 'g11',
    name: "Cheddar Cheese Block",
    price: 8.99,
    discountPrice: 7.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844",
    category: "Dairy & Eggs",
    inStock: true,
    isNew: false
  },
  {
    id: 'g12',
    name: "Fresh Strawberries",
    price: 6.00,
    discountPrice: 4.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464965224031-937d952a42b1",
    category: "Fruits",
    inStock: false,
    isNew: true
  }
];

function Shop() {
  const { addToCart } = useCart();
  const location = useLocation();
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setSelectedCategories([location.state.selectedCategory]);
    }
  }, [location]);

  const filteredProducts = products.filter(product => {
    const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
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
    <div className="shop-page-modern section-padding">
      <div className="container">
        <div className="breadcrumb-wrapper" style={{ marginBottom: 20 }}>
          <Breadcrumb
            items={[
              { title: <Link to="/"><HomeOutlined /> Home</Link> },
              { title: 'Shop' },
              ...(selectedCategories.length === 1 ? [{ title: selectedCategories[0] }] : [])
            ]}
          />
        </div>

        <div className="shop-header-v2">
          <Title level={1}>Fresh <span className="accent">Marketplace</span></Title>
          <Paragraph>Explore our curated selection of farm-fresh groceries delivered to your door.</Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={6}>
            <div className="shop-sidebar-v2">
              <Card bordered={false} className="filter-card-v2">
                <Title level={4}><FilterOutlined /> Filters</Title>
                <Divider />
                
                <div className="filter-group">
                  <Text strong>Search Items</Text>
                  <Input 
                    placeholder="Search groceries..." 
                    prefix={<SearchOutlined />} 
                    className="sidebar-input"
                  />
                </div>

                <div className="filter-group">
                  <Text strong>Price Range (${priceRange[0]} - ${priceRange[1]})</Text>
                  <Slider
                    range
                    min={0}
                    max={50}
                    value={priceRange}
                    onChange={setPriceRange}
                    trackStyle={{ backgroundColor: 'var(--primary-color)' }}
                  />
                </div>

                <div className="filter-group">
                  <Text strong>Categories</Text>
                  <Select
                    mode="multiple"
                    placeholder="All Categories"
                    style={{ width: '100%', marginTop: 10 }}
                    onChange={setSelectedCategories}
                    value={selectedCategories}
                  >
                    {categories.map(cat => (
                      <Option key={cat} value={cat}>{cat}</Option>
                    ))}
                  </Select>
                </div>
                
                <Button type="primary" block size="large" className="reset-filter-btn" onClick={() => {
                  setPriceRange([0, 50]);
                  setSelectedCategories([]);
                }}>
                  Reset All Filters
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} lg={18}>
            <div className="shop-top-bar">
              <Text strong>{filteredProducts.length} Items Found</Text>
              <Select defaultValue="popular" style={{ width: 160 }} className="sort-select">
                <Option value="popular">Most Popular</Option>
                <Option value="price-low">Price: Low to High</Option>
                <Option value="price-high">Price: High to Low</Option>
                <Option value="newest">New Arrivals</Option>
              </Select>
            </div>

            <Row gutter={[20, 20]}>
              {paginatedProducts.map(product => (
                <Col xs={24} sm={12} xl={8} key={product.id}>
                  <Badge.Ribbon text={product.isNew ? "NEW" : ""} color="green" className={!product.isNew ? "hidden" : ""}>
                    <Card
                      hoverable
                      className="shop-product-card-v2"
                      cover={
                        <Link to={`/product/${product.id}`} className="shop-img-link">
                          <div className="shop-img-wrapper-v2">
                            <img alt={product.name} src={product.image} />
                            {!product.inStock && <div className="stock-overlay">Out of Stock</div>}
                          </div>
                        </Link>
                      }
                    >
                      <div className="shop-card-body">
                        <Text type="secondary" className="product-cat-label">{product.category}</Text>
                        <Link to={`/product/${product.id}`}>
                          <Title level={5} className="product-name-v2">{product.name}</Title>
                        </Link>
                        <Rate disabled defaultValue={product.rating} style={{ fontSize: 12 }} allowHalf />
                        <div className="shop-price-row">
                          <div className="price-box-v2">
                            {product.discountPrice ? (
                              <>
                                <Text strong className="new-price">${product.discountPrice.toFixed(2)}</Text>
                                <Text delete type="secondary" className="old-price-v2">${product.price.toFixed(2)}</Text>
                              </>
                            ) : (
                              <Text strong className="new-price">${product.price.toFixed(2)}</Text>
                            )}
                          </div>
                          <Button 
                            type="primary" 
                            shape="circle" 
                            icon={<ShoppingCartOutlined />} 
                            disabled={!product.inStock}
                            onClick={() => addToCart({
                              id: product.id,
                              title: product.name,
                              price: `$${(product.discountPrice || product.price).toFixed(2)}`,
                              image: product.image
                            })}
                          />
                        </div>
                      </div>
                    </Card>
                  </Badge.Ribbon>
                </Col>
              ))}
            </Row>

            <div className="shop-pagination-v2">
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

export default Shop;