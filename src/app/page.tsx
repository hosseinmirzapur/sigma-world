import Hero from "./components/sections/Hero"
import Overview from "./components/sections/Overview"
import StartHere from "./components/sections/StartHere"
import WhyUs from "./components/sections/WhyUs"

export default function Home() {
   return (
      <div className="w-11/12 mx-auto space-y-10">
         <Hero />
         <WhyUs />
         <Overview />
         <StartHere />
         <hr className="border-b-[1px] border-secondary" />
      </div>
   )
}
