import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, message, Card, Typography, Spin, Switch, Upload, Rate } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, ReloadOutlined, UploadOutlined } from '@ant-design/icons';
import { productAPI } from '../../services/api';

const { Title } = Typography;
const { Option } = Select;

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

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
    setFileList([]);
    setIsModalVisible(true);
    
    // Set form values
    if (product) {
        // Filter out "undefined" string if it exists in the product data
        const cleanProduct = { ...product };
        if (cleanProduct.image === 'undefined') cleanProduct.image = '';
        
        form.setFieldsValue({
            ...cleanProduct,
            isNew: cleanProduct.isNew,
            inStock: cleanProduct.inStock,
        });
    } else {
        form.resetFields();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
    setFileList([]);
    form.resetFields();
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
        // Handle Edit
        await productAPI.update(editingProduct.id, values);
        message.success('Product updated successfully');
      } else {
        // Handle Create
        const formData = new FormData();
        
        // Append all regular fields
        Object.keys(values).forEach(key => {
            if (values[key] !== undefined && values[key] !== null) {
                formData.append(key, values[key]);
            }
        });

        // Append Image if exists
        if (fileList.length > 0) {
            // Check if it's the raw File object (from beforeUpload) or AntD wrapper (from onChange)
            const file = fileList[0].originFileObj || fileList[0];
            formData.append('image', file);
        }

        await productAPI.create(formData);
        message.success('Product created successfully');
      }
      setIsModalVisible(false);
      form.resetFields(); // Reset form after success
      fetchProducts();
    } catch (error) {
      console.error(error);
      message.error('Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const uploadProps = {
    onRemove: (file) => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]); // Only keep the newest file
      return false; // Prevent auto upload
    },
    fileList,
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
    { 
        title: 'Image', 
        dataIndex: 'image', 
        key: 'image',
        render: (src) => <img src={src} alt="product" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4 }} />
    },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { 
        title: 'Price', 
        dataIndex: 'price', 
        key: 'price',
        render: (price) => `$${Number(price).toFixed(2)}`
    },
    { 
        title: 'Stock', 
        dataIndex: 'inStock', 
        key: 'inStock',
        render: (inStock) => inStock ? <span style={{color: 'green'}}>In Stock</span> : <span style={{color: 'red'}}>Out</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" ghost icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
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
            <Button icon={<ReloadOutlined />} onClick={fetchProducts} disabled={loading}>Refresh</Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>Add Product</Button>
          </Space>
        </div>
        
        {loading && !products.length ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <Spin size="large" />
                <div style={{ marginTop: 10 }}>Loading products...</div>
            </div>
        ) : (
            <Table columns={columns} dataSource={products} rowKey="id" />
        )}

        <Modal
          title={editingProduct ? "Edit Product" : "Add New Product"}
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}
          forceRender // Pre-render the form to avoid 'instance not connected' warning
        >
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ category: 'Fruits', inStock: true, isNew: false, rating: 5 }}>
            <Space style={{ display: 'flex', marginBottom: 8 }} align="start">
                 <Form.Item name="name" label="Product Name" rules={[{ required: true }]} style={{ width: '400px' }}>
                    <Input />
                 </Form.Item>
                 <Form.Item name="category" label="Category" rules={[{ required: true }]} style={{ width: '200px' }}>
                    <Select>
                        <Option value="Fruits">Fruits</Option>
                        <Option value="Vegetables">Vegetables</Option>
                        <Option value="Dairy">Dairy</Option>
                        <Option value="Meat">Meat</Option>
                        <Option value="Bakery">Bakery</Option>
                    </Select>
                 </Form.Item>
            </Space>

            <Space style={{ display: 'flex', marginBottom: 8 }} align="start">
                <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}>
                    <InputNumber min={0} step={0.01} style={{ width: 120 }} />
                </Form.Item>
                <Form.Item name="discountPrice" label="Discount Price ($)">
                    <InputNumber min={0} step={0.01} style={{ width: 120 }} />
                </Form.Item>
                <Form.Item name="rating" label="Rating">
                    <Rate allowHalf />
                </Form.Item>
            </Space>

            <Form.Item name="description" label="Description">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Space style={{ display: 'flex', marginBottom: 8 }} align="start">
                <Form.Item name="origin" label="Origin">
                    <Input />
                </Form.Item>
                <Form.Item name="weight" label="Weight">
                    <Input />
                </Form.Item>
                <Form.Item name="shelfLife" label="Shelf Life">
                    <Input />
                </Form.Item>
            </Space>
            
            <Space size="large">
                <Form.Item name="inStock" label="In Stock" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item name="isNew" label="Mark as New" valuePropName="checked">
                    <Switch />
                </Form.Item>
            </Space>

            {!editingProduct && (
                 <Form.Item label="Product Image">
                    <Upload {...uploadProps} listType="picture" maxCount={1}>
                        <Button icon={<UploadOutlined />}>Select Image</Button>
                    </Upload>
                </Form.Item>
            )}

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
