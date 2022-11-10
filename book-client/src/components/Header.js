import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="bg-sky-900 text-white flex justify-between items-center p-5">
      <div className="text-2xl font-bold ">
        <h1>Books</h1>
      </div>
      <div>
        <button
          onClick={() => dispatch(logInOut())}
          className="py-2 px-5 rounded-lg border-2 hover:bg-sky-800 font-semibold outline-none w-32"
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
}

export default Header;
