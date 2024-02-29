import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProduct } from "../redux/appProduct/action";

export const Edit = ({ editPro, closeModal }) => {
  console.log(editPro, "product");
  const [formData, setFormData] = useState({
    name: editPro.name,
    picture: editPro.picture,
    gender: editPro.gender,
    category: editPro.category,
    price: editPro.price,
    description: editPro.description,
  });
  console.log(formData);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, editPro._id, "edit");
    dispatch(EditProduct(editPro._id, formData, closeModal));
  };
  return (
    <div>
      <form class="p-8 w-96">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text-area"
            placeholder="Add a description..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          <p class="text-red-500 text-xs italic">Please add a description.</p>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={formData.gender}
            placeholder="Gender"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, gender: e.target.value };
              })
            }
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={formData.picture}
            placeholder="Product Image URL"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, picture: e.target.value };
              })
            }
          />
        </div>
        <div class="mb-4">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select a category"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  category: e.target.value,
                };
              })
            }
          >
            <option value="makeup">MakeUp</option>
            <option value="skincare">SkinCare</option>
            <option value="haircare">HairCare</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, price: e.target.value };
              })
            }
          />
        </div>

        <button class="btn" type="submit" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </div>
  );
};
