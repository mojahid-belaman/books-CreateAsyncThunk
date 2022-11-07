import React from "react";

function BookList() {
  return (
    <div>
      <fieldset className="border-2 px-5 relative">
        <legend className="p-2">Book List:</legend>
        <table className="w-full my-10 border-separate">
          <thead className="bg-sky-900 text-white">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>Book 1</td>
              <td>100</td>
              <td>Book 1 description</td>
              <td className="text-center">
                <button className="py-0.5 px-2 rounded-xl text-white font-bold bg-red-600 hover:bg-red-500">
                  x
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}

export default BookList;
