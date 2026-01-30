import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, message, Card, Typography, Spin } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { productAPI } from '../../services/api';

const { Title } = Typography;
const { Option } = Select;

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await productAPI.getAll();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      message.error('Failed to connect to backend. Make sure the Flask server is running.');
    } finally {
      setLoading(false);
    }
  };

  const showModal = (product = null) => {
    setEditingProduct(product);
    if (product) {
      form.setFieldsValue(product);
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id) => {
    try {
      await productAPI.delete(id);
      message.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      message.error('Failed to delete product');
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (editingProduct) {
        await productAPI.update(editingProduct.id, values);
        message.success('Product updated successfully');
      } else {
        const productData = {
          ...values,
          id: String(Date.now()), // Proper unique ID for Redis
          image: 'https://via.placeholder.com/150'
        };
        await productAPI.create(productData);
        message.success('Product added successfully');
      }
      setIsModalVisible(false);
      fetchProducts();
    } catch (error) {
      message.error('Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price ? Number(price).toFixed(2) : '0.00'}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="primary" 
            ghost 
            icon={<EditOutlined />} 
            onClick={() => showModal(record)}
          />
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
          <Title level={2}>Product Management</Title>
          <Space>
            <Button 
                icon={<ReloadOutlined />} 
                onClick={fetchProducts}
                disabled={loading}
            >
                Refresh
            </Button>
            <Button 
                type="primary" 
                icon={<PlusOutlined />} 
                onClick={() => showModal()}
            >
                Add Product
            </Button>
          </Space>
        </div>
        
        {loading && !products.length ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <Spin size="large" tip="Loading products from backend..." />
            </div>
        ) : (
            <Table 
                columns={columns} 
                dataSource={products} 
                rowKey="id"
                pagination={{ pageSize: 10 }}
            />
        )}

        <Modal
          title={editingProduct ? "Edit Product" : "Add New Product"}
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose
          confirmLoading={loading}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ category: 'Fruits' }}
          >
            <Form.Item
              name="name"
              label="Product Name"
              rules={[{ required: true, message: 'Please input product name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please select category!' }]}
            >
              <Select>
                <Option value="Fruits">Fruits</Option>
                <Option value="Vegetables">Vegetables</Option>
                <Option value="Dairy">Dairy</Option>
                <Option value="Meat">Meat</Option>
                <Option value="Bakery">Bakery</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input price!' }]}
            >
              <InputNumber style={{ width: '100%' }} min={0} step={0.01} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  {editingProduct ? "Update" : "Create"}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

export default ProductManagement;
