import React from "react"
import SocialButtons from "./social"

const Section2 = ({ social }) => (
  <section className="container mx-auto text-center py-6 mb-12">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-marron">
      Gabriela Onetto
    </h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-marron w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    <p className="mx-20 my-4 text-xl leading-tight">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. </p>
    <SocialButtons youtube={social.youtube} facebook={social.facebook} instagram={social.instagram}
                   twitter={social.twitter} />
  </section>
)

Section2.propTypes = {}

Section2.defaultProps = {}

export default Section2
