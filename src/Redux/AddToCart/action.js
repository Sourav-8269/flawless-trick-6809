import * as types from "./actiontype";
import axios from "axios";
const getCartRequest = () => {
  return {
    type: types.GET_CART_REQUEST,
  };
};

const getCartSuccess = (payload) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload,
  };
};

const getCartError = () => {
  return {
    type: types.GET_CART_ERROR,
  };
};

const GetCartData = () => (dispatch) => {
  // console.log(params)
  dispatch(getCartRequest());
  return axios
    .get(`https://bfc-i90o.onrender.com/cart`)
    .then((res) => dispatch(getCartSuccess(res.data)))

    .catch((e) => dispatch(getCartError()));
};

const PostData = (param) => (dispatch) => {
    // console.log(params)
    dispatch(getCartRequest());
    return axios
      .post(`https://bfc-i90o.onrender.com/cart`,param)
      .then((res) => dispatch(getCartSuccess(res.data)))
  
      .catch((e) => dispatch(getCartError()));
  };

export { GetCartData,PostData };
