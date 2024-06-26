"use client"

import Image from "next/image"
import Typewriter from "typewriter-effect"

const Hero = () => {
   return (
      <div className="my-10 relative dark:text-secondary text-primary">
         <div
            className="
               absolute
					text-center
					top-[50%]
					lg:top-[50%]
					left-[50%]
					translate-x-[-50%]
					translate-y-[-50%]
					w-full
            "
         >
            <p className="font-extrabold text-xl md:text-3xl lg:text-6xl mb-10">
               شرکت بازرگانی گستره جهان سیگما
            </p>

            <Typewriter
               options={{
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 10,
                  strings: [
                     "همراهی مطمئن در تجارت بین الملل",
                     "امور پیچیده تجاری خود را به تیم حرفه ای ما بسپارید",
                     "ارائه دهنده خدمات اختصاصی برای نیاز های تجاری شما",
                     "رابط کاربری ساده برای تسهیل امور تجار و بازرگانان محترم",
                  ],
                  wrapperClassName:
                     "text-lg md:text-xl w-9/12 md:w-10/12 mx-auto",
               }}
            />
         </div>
         <div className="flex items-center justify-center">
            <Image
               src={"/images/hero.jpg"}
               alt="hero-section"
               id="hero"
               width={1600}
               height={500}
               draggable={false}
               className="rounded-sm shadow-md shadow-black dark:opacity-25 opacity-30"
            />
         </div>
      </div>
   )
}

export default Hero
