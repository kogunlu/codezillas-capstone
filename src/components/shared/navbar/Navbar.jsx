import {React,useState} from 'react';
import {Link,NavLink } from 'react-router-dom';
import Button from '../button/Button';



function Navbar() {
  const [SideMenuClose, setSideMenuClose] = useState("hidden")
  const [SideMenu, setSideMenu] = useState("")
  const [ShowHide, setShowHide] = useState("left-[-400px] opacity-0 ")

  function handleSideMenu()
  {
    if(SideMenuClose === 'hidden')
    {
      setSideMenu('hidden')
      setSideMenuClose("")
      setShowHide('left-[0px] opacity-100')
    }else{
      setSideMenu("")
      setSideMenuClose('hidden')
      setShowHide("left-[-400px] opacity-0 ")
    }
  }

  const [NavDropDown, setNavDropDown] = useState("opacity-0 hidden")

  function handleNavAboutDropDown()
  {
    if(NavDropDown === 'opacity-0 hidden')
    {
      setNavDropDown('opacity-100')
    }else{
      setNavDropDown('opacity-0 block')
      setTimeout(()=>setNavDropDown('opacity-0 hidden'),500)

    }

  }

  return (
    <div className='bg-main-background'>
      <div className='p-3'>
        <div className='md:grid md:grid-cols-4 justify-center'>
          <div className='grid grid-cols-3 md:grid-col-2 col-span-2'>
            <Link to="/">
              <span className='grid grid-cols-2 ml-3 sm:ml-3 md:ml-8  text-2xl sm:text-3xl md:text-5xl gap-1 sm:gap-4 lg:gap-0 cursor-pointer'>
                <img className='w-min inline' src="/logo.png" alt='Healing logo' />
                <span>Healing</span>
              </span>
            </Link>
            <button type='button' className='cursor-pointer md:hidden block col-start-3 grid grid-flow-col grid-cols-5 grid-rows-5' onClick={()=> handleSideMenu() } >
                <svg className={`col-start-5 row-start-2 row-span-3 ${SideMenuClose}`} width="32" height="32" viewBox="0 0 24 24">
                    <g id="close">
                        <path id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"/>
                    </g>
                </svg>
                <svg className={`col-start-5 row-start-2 row-span-3 w-8 ${SideMenu}`} height="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </button>
          </div>
          <ul className={`grid place-content-center md:grid-cols-12 my-0 col-span-2 content-center z-[1] md:z-auto absolute md:static bg-main-background left-0 w-full md:w-auto py-4 ma:py-0 pl-7 md:pl-0  md:opacity-100  transition-all ease-in duration-500 gap-4 ${ShowHide}` }>
            <li className='py-2 text-center md:col-span-2'><NavLink to="/" className="hover:text-yellow-white duration-300">Home</NavLink></li>
            <li className='py-2 text-center md:col-span-2'><NavLink to="/blogs" className="hover:text-yellow-white duration-300" >Blogs</NavLink></li>
            <li className='py-2 flex justify-center grid  md:col-span-3'>
              <button type='button' className='hover:text-yellow-white duration-300 grid grid-cols-3 w-36' onClick={()=>handleNavAboutDropDown()}>
                <span className='col-span-2'>About</span>
                <span>
                  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" width="20px">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </span>
              </button>
              <ul className={`row-span-2 bg-white grid gap-3 px-8 divide-y divide-slate-300 border-2 border-slate-400 mt-10 static md:block md:absolute transition-all ease-in duration-500 z-[1] ${NavDropDown}`}>
                <li className='text-center py-2 w-full'><NavLink className='hover:text-yellow-white duration-300' to="/about">About Us</NavLink></li>
                <li className='text-center py-2 w-full'><NavLink className='hover:text-yellow-white duration-300' to="/team">Team</NavLink></li>
                <li className='text-center py-2  w-full'><NavLink className='hover:text-yellow-white duration-300' to="/career">Career</NavLink></li>
              </ul>
            </li>
            <li className='py-2 text-center md:col-span-2'><NavLink className='hover:text-yellow-white duration-300' to="/contact">Contact Us</NavLink></li>
            <li className="text-center md:col-span-3"><Button className="col-span-2 duration-500" type='button' name="Login" classes="py-2 px-5  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar