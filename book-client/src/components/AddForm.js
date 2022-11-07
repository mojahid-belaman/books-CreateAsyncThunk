import React from "react";

function AddForm() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <fieldset className="border-2 px-5">
          <legend className="p-2">Add a new book:</legend>
          <form className="py-5 flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input
                  className="mt-2 px-2 h-9 outline-none border-2 border-sky-800 rounded-lg"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the title..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price">Price:</label>
                <input
                  className="mt-2 px-2 h-9 outline-none border-2 border-sky-800 rounded-lg"
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter the price..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <label htmlFor="description">Description:</label>
              <textarea
                className="mt-2 p-2 outline-none border-2 border-sky-800 rounded-lg"
                id="description"
                name="description"
                rows={5}
                placeholder="Enter the description..."
                required
              />
            </div>
            <button
              className="mt-5 py-2 px-5 rounded-lg text-white font-bold bg-sky-900 hover:bg-sky-800 hover:font-semibold"
              type="button"
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default AddForm;
