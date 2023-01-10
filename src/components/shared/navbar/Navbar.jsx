import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrUserSettings } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Button from '../button/Button';

function Navbar() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  function handleLoginClick() {
    navigate('/login');
  }
  return (
    <div className="nav-bg">
      <div className="p-3">
        <div className="grid grid-cols-4">
          <div className="grid grid-cols-3 col-span-2">
            <Link to="/">
              <div className="grid grid-cols-2 ml-20">
                <img src="/logo.png" alt="Healing logo" />
                <h1 className="text-5xl">Healing</h1>
              </div>
            </Link>
          </div>
          <ul className="grid grid-cols-6 col-span-2 content-center ">
            <li className="py-2">
              <Link className="hover:text-yellow-white" to="/">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-yellow-white" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-yellow-white" to="/about">
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-yellow-white" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="flex justify-center items-center">
              {user.email ? (
                <GrUserSettings className="text-2xl" />
              ) : (
                <Button
                  className="col-span-2"
                  type="button"
                  name="Login"
                  classes="py-2 px-5  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"
                  function={() => handleLoginClick()}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
