import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, RiPenNibFill } from "react-icons/all"


const Header = ({ siteTitle, subtitle, social }) => (
  <nav id="header" className="fixed w-full z-30 top-0 bg-ocre text-marron">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between h-16 md:h-20 my-auto py-2">
      <div className="pl-4 flex">
        <a className="flex items-center toggleColour no-underline hover:no-underline text-2xl lg:text-4xl" href="#">
          <span className="transform -rotate-45"><RiPenNibFill/></span>
          <div className="flex items-baseline">
          <span className="mx-3 font-title">{siteTitle}</span>
          <span className="hidden md:block ml-0 font-normal text-lg lowercase">{subtitle}</span>
          </div>
        </a>

      </div>
      <div className="block lg:hidden pr-4">
        <button id="nav-toggle"
                className="flex items-center p-1 text-marron hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
        id="nav-content">
        <div className="mx-5 lg:flex justify-end flex-1 items-center mx-auto">
          <a className="mx-2" href={"https://www.youtube.com/" + social.youtube}><FaYoutube /></a>
          <a className="mx-2" href={"https://www.facebook.com/" + social.facebook}><FaFacebook /></a>
          <a className="mx-2" href={"https://www.instagram.com/" + social.instagram}><FaInstagram /></a>
          <a className="mx-2" href={"https://twitter.com/" + social.twitter}><FaTwitter /></a>
        </div>
        {/*<ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
               href="#">link</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
               href="#">link</a>
          </li>
        </ul>*/}
        <button
          id="navAction"
          className="mx-auto lg:mx-3 bg-white text-marron font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
         La Comuna
        </button>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
