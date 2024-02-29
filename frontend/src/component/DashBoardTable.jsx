import React, { useEffect, useState } from "react";
import { BrokenCirclesLoader, GooeyCircleLoader } from "react-loaders-kit";
// import Typed from "react-typed";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/appProduct/action";
import { Modal } from "./Modal";
import { Edit } from "./Edit";

export const DashBoardTable = ({
  order,
  search,
  categoryFilter,
  genderFilter,
  currentPage,
  perPageData,
}) => {
  // console.log(order);
  // console.log(categoryFilter, "t");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPro, setEditPro] = useState("");
  const { isLoading, isError, products } = useSelector(
    (store) => store.appReducer
  );
  // console.log(token, "dash aa");
  console.log(products, "pro");

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loaderProps = {
    loading: true,
    size: 150,
    duration: 2,
    colors: ["#0f76de", "#020f2e", "#042549"],
  };

  const EditHandler = (editPro) => {
    // e.preventDefault();
    setEditPro(() => editPro);
    OpenModal();
  };
  useEffect(() => {
    const filter_sort = {
      name: search,
      category: categoryFilter,
      gender: genderFilter,
      sort: "price",
      order: order || "asc",
    };
    dispatch(getProducts(filter_sort, currentPage, perPageData));
  }, [
    search,
    order,
    categoryFilter,
    genderFilter,
    currentPage,
    dispatch,
  ]); // category: categoryFilter,
  // gender: genderFilter,

  function handleDeleteProduct(id) {
    dispatch(deleteProduct(id));
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        {/* <GooeyCircleLoader {...loaderProps} /> */}
        <BrokenCirclesLoader {...loaderProps} />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <div className=" bg-white shadow-lg rounded-lg p-8">
      <div className="text-left text-lg text-gray-800 mb-6">
        <h2>Latest Orders</h2>
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-200 rounded-top-2 rounded-left-2">
          <tr>
            <th className="p-4 px-6 text-gray-500">Products</th>
            <th className="p-4 px-6 text-gray-500">Gender</th>
            <th className="p-4 px-6 text-gray-500">Category</th>
            <th className="p-4 px-6 text-gray-500">Price</th>
            <th className="p-4 px-6 text-gray-500">Description</th>
            <th className="p-4 px-6 text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {/* Show the Row here  */}
          {products.length > 0 &&
            products.map((el) => {
              return (
                <tr
                  key={el.name + el.picture}
                  style={{ borderBottom: "1px solid #3333" }}
                >
                  <td className="p-4 px-6 text-gray-800 flex items-center gap-4 ">
                    <img
                      src={el.picture}
                      className="w-8 h-8 object-cover object-center rounded-1/2"
                      style={{ borderRadius: "50%", overflow: "hidden" }}
                    />
                    {el.name}
                  </td>
                  <td className="p-4 px-6 text-gray-800">{el.gender}</td>
                  <td className="p-4 px-6 text-gray-800">{el.category}</td>
                  <td className="p-4 px-6 text-gray-800">${el.price}</td>
                  <td className="p-4 px-6 text-gray-800">{el.description}</td>

                  <td className="flex gap-2 item-center justify-around p-4 px-6 text-gray-800">
                    <img
                      src="edit-3.svg"
                      alt=""
                      onClick={(e) => EditHandler(el)}
                    />
                    <img
                      src="trash-2.svg"
                      alt=""
                      className="cursor-pointer"
                      onClick={() => handleDeleteProduct(el._id)}
                    />
                    <img src="more-horizontal.svg" alt="" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Edit closeModal={closeModal} editPro={editPro} />
      </Modal>
      <button>0</button>
    </div>
  );
};
