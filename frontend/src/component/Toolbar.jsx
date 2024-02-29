import React, { useState } from "react";
import { Modal } from "./Modal";
import AddProductForm from "./AddProductForm";

const Toolbar = ({ setOrder, setGenderFilter, setCategoryFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex gap-4 items-center justify-between mb-8">
      <div className="flex gap-12 items-center w-1/2 ">
        <div>
          <select
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow"
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option selected>Filter By Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <select
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option selected>Filter By Category</option>
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="haircare">Haircare</option>
          </select>
        </div>
        <div>
          <select
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option selected>Sort By Price</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <button className="btn" onClick={openModal}>
        Add Product
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProductForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Toolbar;
