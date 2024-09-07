import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery, useDeleteProductMutation } from '../store/ProductsApi';

function AllProducts() {
  const navigate = useNavigate();
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleEdit = (product) => {
    navigate('/add-products', { state: { product } });
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-2">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-[1000px]">
        <div className="flex items-center justify-between bg-blue-600 w-full rounded-t-lg p-4">
          <h1 className="font-bold text-[25px] text-white">All Phones</h1>
          <Button
            onClick={() => navigate('/add-products')}
            className="rounded-md"
            type="primary"
            size="large"
            style={{ backgroundColor: '#1D4ED8', borderColor: '#1D4ED8' }}
          >
            Add Phone
          </Button>
        </div>

        <div className="p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Model</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data?.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-100 "
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {product.model}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center space-x-2 ">
                      <Button
                        type="default"
                        size="large"
                        className="rounded-md"
                        style={{ backgroundColor: '#4CAF50', color: '#fff' }}
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </Button>
                      <Button
                        type="default"
                        danger
                        size="large"
                        className="rounded-md"
                        style={{ backgroundColor: '#F44336', color: '#fff' }}
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
