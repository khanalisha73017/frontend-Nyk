import axios from "axios";
import {
  DELETELOADING,
  DELETEFAIL,
  DELETESUCESS,
  PRODUCTFAIL,
  PRODUCTLOADING,
  PRODUCTSUCESS,
  ADDLOADING,
  ADDSUCESS,
  ADDFAIL,
  EDITLOADING,
  EDITSUCESS,
  EDITFAIL,
} from "./actionType";

export const getProducts =
  (params, currentPage, perPageData) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCTLOADING });
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products`,
        {
          params: {
            ...params,
            page: currentPage,
            limit: perPageData,
          },
        }
      );
      dispatch({ type: PRODUCTSUCESS, payload: res.data.products });
    } catch (error) {
      console.log(error);
      dispatch({ type: PRODUCTFAIL });
    }
  };

//Delete Product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETELOADING });
    let res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/products/${id}`
    );

    dispatch({ type: DELETESUCESS, payload: id });
  } catch (err) {
    console.log(err);
    dispatch({ type: DELETEFAIL });
  }
};

//add product
export const addProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADDLOADING });
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/products`,
      formData
    );
    dispatch({ type: ADDSUCESS, payload: res.data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADDFAIL });
  }
};

//editproduct
export const EditProduct = (id, formData, closeModal) => async (dispatch) => {
  try {
    dispatch({ type: EDITLOADING });
    let res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/products/${id}`,
      formData
    );
    dispatch({ type: EDITSUCESS, payload: res.data.singleProduct });
    closeModal();
  } catch (error) {
    console.log(error);
    dispatch({ type: EDITFAIL });
    closeModal();
  }
};
