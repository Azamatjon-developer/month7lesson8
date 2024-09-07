import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateProductMutation, useUpdateProductMutation } from '../store/ProductsApi';
import { Button, Input, message } from 'antd';

function AddProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {};
  const [form, setForm] = useState({ name: '', model: '', price: '' });
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (product && product.id) {
      setForm({ name: product.name, model: product.model, price: product.price });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.model || !form.price) {
      message.error('All fields are required.');
      return;
    }

    try {
      if (product.id) {
        await updateProduct({ id: product.id, ...form });
      } else {
        await createProduct(form);
      }
      navigate('/');
    } catch (error) {
      message.error('An error occurred while saving the product.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-2">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-[600px] p-4">
        <h1 className="font-bold text-[25px] text-center mb-4">
          {product.id ? 'Edit Phone' : 'Add Phone'}
        </h1>
        <div className="flex flex-col space-y-4">
          <Input
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Model"
            name="model"
            value={form.model}
            onChange={handleChange}
          />
          <Input
            placeholder="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
          <Button
            type="primary"
            className="rounded-md"
            size="large"
            onClick={handleSubmit}
          >
            {product.id ? 'Update Phone' : 'Add Phone'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
