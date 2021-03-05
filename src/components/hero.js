import PropTypes from "prop-types"
import React from "react"
import SocialButtons from "./social"
import image from "../images/08.png"
import { GiHobbitDoor } from "react-icons/all"


const Hero = ({ siteTitle, siteBajada, social }) => (
  <div className="pt-16 md:pt-40 md:pb-20">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="w-full md:w-2/5 py-6 text-center">
        <img className="-ml-12 w-full md:w-4/5" src={image} />
      </div>
      <div className="order-1 flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
        <h1 className="md:my-4 text-5xl font-title text-marron leading-tight mx-auto lg:mx-0">
          La Comuna
        </h1>
        <p className="order-3 w-5/6 leading-normal text-2xl mb-8 mx-auto lg:mx-0">
          {siteBajada}
        </p>
        <a href="https://www.patreon.com/eltemplodelfuturo" target="_blank"
           className="order-2 md:order-4 text-lg flex justify-between items-center lg:mx-0 bg-marron text-white rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mx-auto">
          <span className="text-4xl"><GiHobbitDoor/></span> <span className="pl-2 font-title">Ingresar a La Comuna</span>
        </a>
      </div>

    </div>
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
  siteBajada: PropTypes.string
}

Hero.defaultProps = {
  siteTitle: ``,
  siteBajada: ``
}

export default Hero
