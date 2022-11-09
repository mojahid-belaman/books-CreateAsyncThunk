import React from "react";

function BookList({ books, isLoading }) {
  const bookList =
    books.length > 0 ?
    books.map((item, idx) => (
      <li key={idx} className="flex justify-between items-center my-3">
        <div>
          <span>{item.title}</span>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg text-white font-bold bg-sky-900 hover:bg-sky-700">
            Read
          </button>
          <button className="p-2 rounded-lg text-white font-bold bg-red-600 hover:bg-red-500">
            Delete
          </button>
        </div>
      </li>
    )) : (<div className="text-center bg-gray-300 py-2">Book Data Is Empty!</div>);
  return (
    <div className="w-1/2">
      <fieldset className="border-2 p-5 relative">
        <legend className="p-2">Book List:</legend>
        {isLoading ? (
          <div className="text-center bg-gray-300 py-2">LOADING...</div>
        ) : (
          <ul>{bookList}</ul>
        )}
      </fieldset>
    </div>
  );
}

export default BookList;
