import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import SubsInput from '../subsInput/SubsInput';

function Footer({ isShortContent = false }) {
  let classForFooter = '';
  if (isShortContent) {
    classForFooter =
      'inset-x-0 bottom-0 w-full h-60 md:h-44 bg-amber-200 flex justify-center ';
  } else {
    classForFooter = 'w-full h-60 md:h-44 bg-amber-200 flex justify-center ';
  }

  return (
    <div className={classForFooter}>
      <div className="w-full md:w-10/12 h-full flex flex-col md:flex-row justify-between items-center">
        <div className="h-5/6 w-5/6 md:w-4/12 flex flex-col items-center md:items-start justify-around">
          <div className="flex flex-col items-center md:items-start gap-2 w-full ">
            <h2 className="text-2xl font-semibold">Subscribe</h2>
            <p className="text-gray-500 ">
              We`ll never to spam you or share your email
            </p>
          </div>

          <SubsInput />
        </div>

        <div className="h-5/6 w-full md:w-4/12 flex flex-col justify-evenly items-center">
          <div className="w-full flex justify-between items-center gap-2">
            <Link
              to="/"
              className="text-gray-500 hover:scale-110 hover:underline hover:underline-offset-4 text-lg"
            >
              Home
            </Link>
            <Link
              to="blogs"
              className="text-gray-500 hover:scale-110 hover:underline hover:underline-offset-4 text-lg"
            >
              Blogs
            </Link>
            <Link
              to="about"
              className="text-gray-500 hover:scale-110 hover:underline hover:underline-offset-4 text-lg"
            >
              About
            </Link>
            <Link
              to="contact"
              className="text-gray-500 hover:scale-110 hover:underline hover:underline-offset-4 text-lg"
            >
              Contact
            </Link>
          </div>

          <div className="w-6/12 flex justify-around items-center">
            <button
              type="button"
              alt="Twitter"
              className="text-3xl hover:text-cyan-400"
            >
              <FaTwitter />
            </button>
            <button
              type="button"
              alt="Facebook"
              className="text-3xl hover:text-blue-800"
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              alt="Google"
              className="text-3xl hover:text-white"
            >
              <GrGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
