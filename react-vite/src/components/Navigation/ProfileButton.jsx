import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();
  const buttonRef = useRef();

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
      >
        <FaUserCircle className="mr-2" />
        {user ? user.username : 'Profile'}
      </button>
      {showMenu && (
        <ul className="profile-dropdown absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" ref={ulRef}>
          {user ? (
            <>
              <li className="block px-4 py-2 text-sm text-gray-700">{user.username}</li>
              <li className="block px-4 py-2 text-sm text-gray-700">{user.email}</li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">
                <button onClick={logout} className="w-full text-left">Log Out</button>
              </li>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={() => setShowMenu(false)}
                modalComponent={<LoginFormModal />}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={() => setShowMenu(false)}
                modalComponent={<SignupFormModal />}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
              />
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
