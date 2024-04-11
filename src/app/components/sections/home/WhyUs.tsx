"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
} from "@/components/ui/card"
import { IconType } from "react-icons"
import { BiLineChart } from "react-icons/bi"
import { BsStopwatch } from "react-icons/bs"
import { PiHandshakeLight, PiMoney } from "react-icons/pi"

interface ReasonProps {
   title: string
   description: string
   Icon: IconType
}

const Reason: React.FC<ReasonProps> = ({ Icon, description, title }) => (
   <Card
      className="
    flex
    flex-col
    mx-auto
    gap-3
    w-[300px]
    h-[300px]
    items-center
    bg-teal-300
    hover:scale-105
    transition-all
"
   >
      <CardHeader>
         <Icon fontSize={40} />
      </CardHeader>
      <CardContent className="font-bold text-lg">{title}</CardContent>
      <CardContent className="w-11/12 mx-auto text-center">
         {description}
      </CardContent>
   </Card>
)

const WhyUs = () => {
   return (
      <div className="flex flex-col gap-14 dark:text-secondary text-primary py-10">
         <h1 className="flex justify-center items-center text-center text-xl md:text-2xl lg:text-3xl font-bold">
            چرا گستره جهان سیگما را انتخاب کنید؟
         </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row justify-center gap-8">
            <Reason
               Icon={BiLineChart}
               description="گستره جهان سیگما با بیش از ۲۰ سال سابقه در حوزه بازرگانی در خدمت تجار و بازرگانان محترم است"
               title="تیم حرفه ای"
            />
            <Reason
               Icon={BsStopwatch}
               description="شما تمام فعالیت های خود را به صورت آنلاین انجام میدهید، پس شکی نیست که در زمان خود نهایت صرفه جویی را خواهید داشت"
               title="صرفه جویی در زمان"
            />
            <Reason
               Icon={PiHandshakeLight}
               description="با ایجاد امکان مشاهده همه اطلاعات خود در داشبورد شخصی و امکان پیگیری لحظه ای سفارشات، تجارتی بی دغدغه برای شما مهیا شده است"
               title="تجارت مطمئن"
            />
            <Reason
               Icon={PiMoney}
               description="با استفاده از خدمات آنلاین جهان سیگما، امور مالی خود را مشاهده، مدیریت و بهینه سازی می کنید"
               title="سود بیشتر"
            />
         </div>
      </div>
   )
}

export default WhyUs
