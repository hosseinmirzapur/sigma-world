"use client"

import CountUp from "react-countup"

import { IconType } from "react-icons"
import { BsBox, BsPersonPlus } from "react-icons/bs"
import { FiPlus } from "react-icons/fi"
import { RiCustomerService2Line } from "react-icons/ri"

interface OverviewItem {
   Icon: IconType
   count: number
   title: string
}

const Item: React.FC<OverviewItem> = ({ Icon, count, title }) => (
   <div className="flex flex-col gap-8">
      <div className="flex justify-center">
         <Icon fontSize={30} />
      </div>
      <div className="flex gap-1 align-baseline items-baseline text-center justify-center">
         <CountUp
            end={count}
            duration={3}
            className="text-4xl text-center"
            delay={0.5}
         />
         <FiPlus fontSize={20} />
      </div>
      <div className="text-center text-xl font-bold">{title}</div>
   </div>
)

const Overview = () => {
   return (
      <div
         className="
            flex
            flex-col
            md:flex-row
            justify-around
            text-secondary
            py-14
            border-t-[1px]
            border-b-[1px]
            border-secondary
            gap-16
            md:gap-0
        "
      >
         <Item title="مشتریان ما" count={1000} Icon={BsPersonPlus} />
         <Item title="ترخیص کالا" count={350} Icon={BsBox} />
         <Item
            title="مشاوره بازرگانی"
            count={1400}
            Icon={RiCustomerService2Line}
         />
      </div>
   )
}

export default Overview
