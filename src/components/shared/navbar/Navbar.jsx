import {React,useState} from 'react';
import {Link } from 'react-router-dom';
import Button from '../button/Button';



function Navbar() {
  const [SideMenuClose, setSideMenuClose] = useState("hidden")
  const [SideMenu, setSideMenu] = useState()
  const [ShowHide, setShowHide] = useState()


  function handleSideMenu()
  {
    if(SideMenuClose === 'hidden')
    {
      setSideMenu('hidden')
      setSideMenuClose()
      setShowHide('z-[-1] left-[0px] opacity-100 ')
    }else{
      setSideMenu()
      setSideMenuClose('hidden')
      setShowHide()
    }
  }
  return (
    <div className='nav-bg'>
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
                <svg className={`col-start-5 row-start-2 row-span-3 ${SideMenuClose}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <g id="close">
                        <path id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"/>
                    </g>
                </svg>
                <svg className={`col-start-5 row-start-2 row-span-3 ${SideMenu}`} height="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </button>
          </div>
          <ul className={`grid place-content-center md:grid-cols-6 my-0 col-span-2 content-center z-[1] md:z-auto absolute md:static nav-bg left-0 w-full md:w-auto py-4 ma:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100 left-[-400px] transition-all ease-in duration-500 gap-4 ${ShowHide}` }>
            <li className='py-2 text-center'><Link className='hover:text-yellow-white duration-300' to="/">Home</Link></li>
            <li className='py-2 text-center'><Link className='hover:text-yellow-white duration-300' to="/blogs">Blogs</Link></li>
            <li className='py-2 text-center'><Link className='hover:text-yellow-white duration-300' to="/about">About Us</Link></li>
            <li className='py-2 text-center'><Link className='hover:text-yellow-white duration-300' to="/contact">Contact Us</Link></li>
            <li className="text-center"><Button className="col-span-2 duration-500" type='button' name="Login" classes="py-2 px-5  hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg"/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar