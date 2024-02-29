import {
  PRODUCTFAIL,
  PRODUCTLOADING,
  PRODUCTSUCESS,
  DELETEFAIL,
  DELETELOADING,
  DELETESUCESS,
  ADDFAIL,
  ADDLOADING,
  ADDSUCESS,
  EDITLOADING,
  EDITFAIL,
  EDITSUCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCTLOADING:
      return { ...state, isLoading: true, isError: false };
    case PRODUCTSUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    case PRODUCTFAIL:
      return { ...state, isLoading: false, isError: true };
    case DELETELOADING:
      return { ...state, isLoading: true, isError: false };
    case DELETEFAIL:
      return { ...state, isLoading: false, isError: true };
    case DELETESUCESS:
      let prodsAfterDelete = [...state.products].filter(
        (el) => el._id !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: prodsAfterDelete,
      };
    case ADDLOADING:
      return { ...state, isLoading: true, isError: false };
    case ADDFAIL:
      return { ...state, isLoading: false, isError: true };
    case ADDSUCESS:
      let prodsAfterAdding = [...state.products, action.payload]; //newly added product
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: prodsAfterAdding,
      };

    case EDITLOADING:
      return { ...state, isLoading: true, isError: false };
    case EDITFAIL:
      return { ...state, isLoading: false, isError: true };
    case EDITSUCESS:
      let EditProduct = [...state.products].map((el) => {
        if (el._id === action.payload._id) {
          return action.payload;
        }
       return el
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: EditProduct,
      };

    default:
      return { ...state };
  }
};
