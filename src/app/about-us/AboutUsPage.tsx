"use client"

import Benefits from "../components/sections/about-us/Benefits"
import Customers from "../components/sections/about-us/Customers"
import Introduction from "../components/sections/about-us/Introduction"
import Slogan from "../components/sections/about-us/Slogan"

const AboutUsPage = () => {
   return (
      <div className="flex flex-col gap-10 w-11/12 mx-auto text-secondary">
         <Slogan />
         <Benefits />
         <Introduction />
         <Customers />
      </div>
   )
}

export default AboutUsPage
