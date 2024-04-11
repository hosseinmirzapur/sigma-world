import Hero from "./components/sections/home/Hero"
import Overview from "./components/sections/home/Overview"
import StartHere from "./components/sections/home/StartHere"
import WhyUs from "./components/sections/home/WhyUs"

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
