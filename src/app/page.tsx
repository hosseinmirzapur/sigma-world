import Hero from "./components/sections/Hero"
import WhyUs from "./components/sections/WhyUs"

export default function Home() {
   return (
      <div className="w-11/12 mx-auto space-y-10">
         <Hero />
         <WhyUs />
      </div>
   )
}
