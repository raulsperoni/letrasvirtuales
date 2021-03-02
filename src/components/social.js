import PropTypes from "prop-types"
import React from "react"
import { FaFacebook, FaInstagram, FaPatreon, FaTwitter, FaYoutube } from "react-icons/all"

class SocialButtons extends React.Component {
  render() {
    return <div className="flex flex-col text-2xl justify-between items-center mx-auto lg:mx-0 z-30">
      <a href="https://www.patreon.com/eltemplodelfuturo" target="_blank"
         className="text-lg flex justify-between items-center lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <FaPatreon /> <span className="pl-2">Apoyar en Patreon</span>
      </a>
      <div className="flex justify-between items-center mx-auto">
        <a className="mx-2" href={"https://www.youtube.com/" + this.props.youtube}><FaYoutube /></a>
        <a className="mx-2" href={"https://www.facebook.com/" + this.props.facebook}><FaFacebook /></a>
        <a className="mx-2" href={"https://www.instagram.com/" + this.props.instagram}><FaInstagram /></a>
        <a className="mx-2" href={"https://twitter.com/" + this.props.twitter}><FaTwitter /></a>
      </div>
    </div>
  }
}

SocialButtons.propTypes = {
  youtube: PropTypes.any,
  facebook: PropTypes.any,
  instagram: PropTypes.string,
  twitter: PropTypes.string
}


export default SocialButtons
