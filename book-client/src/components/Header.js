import React from "react";

function Header() {
  return (
    <div className="bg-sky-900 text-white flex justify-between items-center p-5">
      <div className="text-2xl font-bold ">
        <h1>Books</h1>
      </div>
      <div>
        <button className="py-2 px-5 rounded-lg border-2 hover:bg-sky-800 font-semibold outline-none w-32">Log in</button>
      </div>
    </div>
  );
}

export default Header;
