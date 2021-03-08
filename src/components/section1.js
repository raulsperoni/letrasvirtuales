import React from "react"
import ReactPlayer from "react-player"
import image from "../images/05.png"
import image2 from "../images/06.png"


const Section1 = ({}) => (
  <section className="bg-negro py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
        Los Talleres
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img className="w-full md:w-4/5" src={image} />
        </div>
      </div>
    </div>
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
        La Comuna
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 p-6">
          <img className="-ml-12 w-full md:w-4/5" src={image2} />
        </div>
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </p>
        </div>

      </div>
    </div>
  </section>
)

Section1.propTypes = {}

Section1.defaultProps = {}

export default Section1
