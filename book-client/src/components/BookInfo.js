import React from "react";

const BookInfo = ({ book }) => {
  return (
    <div className="w-1/2">
      <fieldset className="border-2 p-5 relative">
        <legend className="p-2">Book Info:</legend>
        {book ? (
          <div className="bg-sky-900 text-white font-bold py-2 rounded-lg flex flex-col items-center gap-4">
            <div>
              <span className="mr-2">Title: </span> {book.title}
            </div>
            <div>
              <span className="mr-2">Price: </span>
              {book.price}
            </div>
            <div>
              <span className="mr-2">Description: </span>
              {book.description}
            </div>
          </div>
        ) : (
          <div className="bg-gray-300 text-center py-2">
            There is No Book Selected yet!.
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default BookInfo;
