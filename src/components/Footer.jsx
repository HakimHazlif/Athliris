import { FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { LuMapPin } from 'react-icons/lu'
import { MdOutlinePhoneEnabled } from 'react-icons/md'
import { IoMailOpenOutline, IoMailOutline } from 'react-icons/io5'
import Logo from './ui/Logo'
import { logoDark } from '../assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="w-32">
                <img
                  src={logoDark}
                  alt="Athliris' logo"
                  className="w-full min-w-24"
                />
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Personalized fitness solutions for athletes of all levels.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#" // https://facebook.com/Athliris
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to="#" // https://x.com/Athliris
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaSquareXTwitter size={20} />
              </Link>
              <Link
                to="#" // https://instagram.com/Athliris
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <RiInstagramFill size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li> */}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <LuMapPin
                  size={20}
                  className="text-neon-500 mr-2 mt-1 shrink-0"
                />
                <span className="text-gray-400">
                  1234 Fitness Avenue, Workout City, FL 12345
                </span>
              </li>
              <li className="flex items-center">
                <MdOutlinePhoneEnabled
                  size={20}
                  className="text-neon-500 mr-2 shrink-0"
                />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <IoMailOutline
                  size={20}
                  className="text-neon-500 mr-2 shrink-0"
                />
                <span className="text-gray-400">support@athliris.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Athliris. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
