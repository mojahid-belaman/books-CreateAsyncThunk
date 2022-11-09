import React, { useEffect } from "react";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/bookSlice";
import Error from "./Error";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      {error ? (
        <Error text={"Server Is Down!."} />
      ) : (
        <div className="flex gap-5">
          <BookList books={data} isLoading={isLoading} />
          <BookInfo />
        </div>
      )}
    </>
  );
};

export default BookContainer;
