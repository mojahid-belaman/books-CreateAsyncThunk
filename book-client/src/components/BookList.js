import React from "react";

function BookList() {
  return (
    <div className="w-1/2">
      <fieldset className="border-2 p-5 relative">
        <legend className="p-2">Book List:</legend>
        <ul>
          <li className="flex justify-between items-center">
            <div>
              <span>Book Title</span>
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
        </ul>
        {/* <table className="w-full my-10 border-separate">
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
                <button className="py-2 px-2 rounded-lg text-white font-bold bg-red-600 hover:bg-red-500">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </fieldset>
    </div>
  );
}

export default BookList;
