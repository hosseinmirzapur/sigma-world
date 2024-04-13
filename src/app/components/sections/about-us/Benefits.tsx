"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

interface BenefitItem {
   title: string
}

const benefitItems: BenefitItem[] = [
   {
      title: "بهره‌مندی از دفاتر متعدد در خارج از کشور",
   },
   {
      title: "تسهیل امور تجارت بین ‌الملل در زمان تحریم‌ها",
   },
   {
      title: "‌استفاده از زیرساخت‌های دفاتر داخلی در اقصی نقاط کشور",
   },
   {
      title: "کسب تجارب در زمینه‌های مختلف بازرگانی طی ۲۷ سال",
   },
   {
      title: "دسترسی به آخرین اخبار، بخشنامه‌ها و اطلاعیه‌های بازرگانی",
   },
   {
      title: "توانایی ارائه کلیه خدمات مرتبط بازرگانی در مجموعه گستره جهان سیگما",
   },
   {
      title: "ارائه خدمات و همکاری با شرکت‌های بزرگ و صاحب نام در تجارت بین‌الملل",
   },
   {
      title: "بهره‌مندی از کارت حق ‌العمل کار",
   },
   {
      title: "عضویت دائمی در اتحادیه حق‌العمل­کاران ایران",
   },
   {
      title: "همکاری با مرکز آموزش اتاق بازرگانی",
   },
   {
      title: "همکاری با بیش از ۷۰۰ شخص حقیقی و حقوقی",
   },
   {
      title: "بهره‌مندی از تعداد ۸۰ نفر پرسنل متخصص در شرکت گستره جهان سیگما",
   },
   {
      title: "دریافت گواهینامه‌های معتبر بین‌المللی در زمینه آموزشی، مدیریتی، بازرگانی و مالی",
   },
]

const Benefits = () => {
   return (
      <div className="flex flex-col gap-10 mt-20">
         <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            مزیت های شرکت گستره جهان سیگما
         </div>
         <Carousel
            className="w-9/12 md:w-10/12 lg:w-11/12 mx-auto"
            opts={{
               loop: true,
            }}
         >
            <CarouselContent dir="ltr">
               {benefitItems.map((item, index) => (
                  <CarouselItem
                     key={index + 1}
                     className="
                        flex
                        justify-center
                        items-center
                        md:basis-1/3
                        lg:basis-1/5
                        cursor-grab
                        hover:scale-105
                        hover:shadow-black
                        transition-all
                        py-5
                     "
                  >
                     <Card className="w-[250px] h-[250px] bg-blue-800 text-secondary border-none">
                        <CardContent className="flex items-center aspect-square justify-center">
                           <span className="text-xl text-center">
                              {item.title}
                           </span>
                        </CardContent>
                     </Card>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselNext className="text-primary hover:text-secondary" />
            <CarouselPrevious className="text-primary hover:text-secondary" />
         </Carousel>
      </div>
   )
}

export default Benefits
