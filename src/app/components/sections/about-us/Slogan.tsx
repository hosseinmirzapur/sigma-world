"use client"

import Image from "next/image"

const Slogan = () => {
   return (
      <div className="flex flex-col md:flex-row gap-10 lg:gap-0 w-10/12 mx-auto mt-10">
         <div className="flex flex-col gap-10">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
               همراه شما هستیم در دنیای تجارت بین الملل
            </div>
            <div className="w-11/12 md:w-10/12 lg:w-7/12 mx-auto md:mx-0 text-lg">
               برای موفقیت در دنیای پیچیده و تخصصی تجارت بین ­الملل یک همراه خوب
               انتخاب کنید. گستره جهان سیگما یک شرکت موفق و با تجربه در دنیای
               تجارت است که نزد تمامی فعالان اقتصادی به عنوان چهره‌­ای مطرح
               شناخته شده است. با وجود تحریم‌­ها و مشکلات و موانع موجود نگران
               تجارت خود نباشید و کار را به ما بسپارید. بدون محدودیت و فراتر از
               مرزها، تجارت خود را زنده نگه دارید.
            </div>
         </div>
         <div className="flex justify-center items-center">
            <Image
               src={"/images/working.svg"}
               alt="working"
               width={1400}
               height={1400}
            />
         </div>
      </div>
   )
}

export default Slogan
