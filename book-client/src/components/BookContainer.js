import React, { useEffect } from "react";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/bookSlice";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.books);
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="flex gap-5">
      <BookList />
      <BookInfo />
    </div>
  );
};

export default BookContainer;
