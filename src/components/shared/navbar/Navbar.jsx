/* eslint-disable no-console */
import { React, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';
import { GrUserSettings, GrMenu, GrClose, GrFormDown } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { setAnswer1, setAnswer2 } from '../../../features/user/userSlice';
import Button from '../button/Button';

function Navbar(props) {
  const { isLoggedIn, isLoggedInFun, auth } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLoginClick() {
    navigate('/login');
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        swal('Signed Out', `Hope to see you soon!`);
        isLoggedInFun(0);
        navigate('/');

        dispatch(setAnswer1(''));
        dispatch(setAnswer2(''));
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        console.log(error.message);
      });
  }

  const [SideMenuClose, setSideMenuClose] = useState('hidden');
  const [SideMenu, setSideMenu] = useState('');
  const [ShowHide, setShowHide] = useState('left-[-400px] opacity-0 z-[-1]');

  function handleSideMenu() {
    if (SideMenuClose === 'hidden') {
      setSideMenu('hidden');
      setSideMenuClose('');
      setShowHide('left-[0px] opacity-100 z-[1]');
    } else {
      setSideMenu('');
      setSideMenuClose('hidden');
      setShowHide('left-[-400px] opacity-0 z-[-1]');
    }
  }

  const [NavDropDown, setNavDropDown] = useState('opacity-0 hidden z-[-1]');
  const [OpenCloseAboutNavDropDown, setOpenCloseAboutNavDropDown] =
    useState(true);

  function handleNavAboutDropDown(bool = null) {
    if (bool === true) {
      setOpenCloseAboutNavDropDown(false);
    }
    if (OpenCloseAboutNavDropDown) {
      setNavDropDown('opacity-100 z-[1]');
    } else {
      setNavDropDown('opacity-0 block');
      setTimeout(() => setNavDropDown('opacity-0 hidden z-[-1]'), 500);
    }
  }

  function handleOpenCloseAbout() {
    if (OpenCloseAboutNavDropDown) {
      setOpenCloseAboutNavDropDown(false);
    } else {
      setOpenCloseAboutNavDropDown(true);
    }
  }

  const [NavDropDownProfile, setNavDropDownProfile] = useState(
    'opacity-0 hidden z-[-1]'
  );

  function handleNavAboutDropDownProfile() {
    if (NavDropDownProfile === 'opacity-0 hidden z-[-1]') {
      setNavDropDownProfile('opacity-100 z-[1]');
    } else {
      setNavDropDownProfile('opacity-0 block');
      setTimeout(() => setNavDropDownProfile('opacity-0 hidden z-[-1]'), 500);
    }
  }

  let ConditionalComponent = '';
  if (isLoggedIn) {
    ConditionalComponent = (
      <button type="button" onClick={handleNavAboutDropDownProfile}>
        <GrUserSettings className="text-2xl" />
      </button>
    );
  } else {
    ConditionalComponent = (
      <Button
        className="col-span-2"
        type="button"
        name="Login"
        classList="py-2 px-5  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"
        function={() => handleLoginClick()}
      />
    );
  }

  // useEffect(()=>{

  // },[ref])
  return (
    <div className="bg-main-background">
      <div className="p-3">
        <div className="grid grid-cols-4">
          <div className="grid grid-cols-2 md:grid-col-2 col-span-2">
            <Link to="/">
              <span className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ml-3 sm:ml-3 md:ml-8 text-3xl md:text-5xl cursor-pointer">
                <img
                  className="w-min inline float-right md:col-start-2 lg:col-start-3"
                  src="/logo.png"
                  alt="Healing logo"
                />
                <span>Healing</span>
              </span>
            </Link>
          </div>
          <button
            type="button"
            className="cursor-pointer md:hidden block col-start-4 grid grid-flow-col grid-cols-4 grid-rows-5"
            onClick={() => handleSideMenu()}
          >
            <GrClose
              className={`col-start-5 row-start-2 row-span-3 text-3xl ${SideMenuClose}`}
            />
            <GrMenu
              className={`col-start-5 row-start-2 row-span-3 w-8 text-3xl ${SideMenu}`}
            />
          </button>
          <ul
            className={`grid place-content-center md:grid-cols-12 mt-16 md:my-0 col-span-2 content-center  md:z-auto absolute md:static bg-main-background left-0 w-full md:w-auto py-4 ma:py-0 pl-7 md:pl-0  md:opacity-100  transition-all ease-in duration-500 gap-4 ${ShowHide}`}
          >
            <li className="py-2 text-center md:col-span-2">
              <NavLink to="/" className="hover:text-yellow-white duration-300">
                Home
              </NavLink>
            </li>
            <li className="py-2 text-center md:col-span-2">
              <NavLink
                to="/blogs"
                className="hover:text-yellow-white duration-300"
              >
                Blogs
              </NavLink>
            </li>
            <li className="py-2 flex justify-center grid md:col-span-3 cursor-pointer">
              <button
                type="button"
                className=" grid grid-cols-2 md:grid-cols-3 w-30 "
                onClick={() => {
                  handleNavAboutDropDown();
                  handleOpenCloseAbout();
                }}
              >
                <span className="col-span-1 md:col-span-2 hover:text-yellow-white duration-300">
                  About
                </span>
                <span>
                  <GrFormDown className="text-xl hover:text-yellow-white duration-300" />
                </span>
                <ul
                  className={`row-span-2 col-span-2 md:col-span-1 bg-white grid gap-3 px-8 divide-y divide-slate-300 border-2 border-slate-400 mt-10 static md:block md:absolute transition-all ease-in duration-500 ${NavDropDown}`}
                  onMouseLeave={() => {
                    handleNavAboutDropDown(true);
                    setOpenCloseAboutNavDropDown(true);
                  }}
                >
                  <li className="text-center py-2 w-full">
                    <NavLink
                      onClick={() => {
                        handleNavAboutDropDown(true);
                        setOpenCloseAboutNavDropDown(true);
                      }}
                      className="hover:text-yellow-white duration-300"
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="text-center py-2 w-full">
                    <NavLink
                      onClick={() => {
                        handleNavAboutDropDown(true);
                        setOpenCloseAboutNavDropDown(true);
                      }}
                      className="hover:text-yellow-white duration-300"
                      to="/team"
                    >
                      Team
                    </NavLink>
                  </li>
                  <li className="text-center py-2  w-full">
                    <NavLink
                      onClick={() => {
                        handleNavAboutDropDown(true);
                        setOpenCloseAboutNavDropDown(true);
                      }}
                      className="hover:text-yellow-white duration-300"
                      to="/career"
                    >
                      Career
                    </NavLink>
                  </li>
                </ul>
              </button>
            </li>
            <li className="py-2 text-center md:col-span-2">
              <NavLink
                className="hover:text-yellow-white duration-300"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="md:col-span-3 grid place-content-center w-32">
              {ConditionalComponent}
              <ul
                className={`row-span-2 bg-white grid gap-3 px-8 divide-y divide-slate-300 border-2 border-slate-400 mt-12 static md:block md:absolute transition-all ease-in duration-500 ${NavDropDownProfile}`}
                onMouseLeave={() => handleNavAboutDropDownProfile()}
              >
                <li className="text-center py-2 w-full hover:text-yellow-white duration-300 ">
                  <button
                    className="place-self-center"
                    type="button"
                    onClick={() => {
                      handleSignOut();
                      handleNavAboutDropDownProfile();
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
