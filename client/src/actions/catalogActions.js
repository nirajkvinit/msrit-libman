import axios from "axios";
import { GET_BOOKS, GET_ERRORS } from "./types";

//get Books List
export const getBooksList = () => dispatch => {
  axios
    .get("/api/books")
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BOOKS,
        payload: {}
      })
    );
};

//Create book
export const createBook = (bookData, history) => dispatch => {
  axios.post("/api/book", bookData).catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};
