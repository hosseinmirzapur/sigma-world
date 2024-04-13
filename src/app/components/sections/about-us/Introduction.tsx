"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface Employee {
   imgSrc: string
   fullName: string
   role: string
}

const employees: Employee[] = [
   {
      fullName: "احمد رضایی",
      imgSrc: "/images/employee.png",
      role: "حسابداری",
   },
   {
      fullName: "سارا احمدی",
      imgSrc: "/images/employee.png",
      role: "مسئول ترخیص",
   },
   {
      fullName: "محمد امین منتظری",
      imgSrc: "/images/employee.png",
      role: "مدیر بخش بازرگانی",
   },
   {
      fullName: "رضا حضرتی",
      imgSrc: "/images/employee.png",
      role: "مدیر عامل",
   },
]

const Introduction = () => {
   return (
      <div className="flex flex-col gap-10 mt-20 w-11/12 mx-auto">
         <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            آشنایی با تیم گستره جهان سیگما
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employees.map((employee, index) => (
               <Card
                  key={index}
                  className="
                     bg-blue-700
                     text-secondary
                     border-none
                     hover:scale-105
                     shadow-lg
                     transition-all
                  "
               >
                  <CardHeader className="text-center text-xl font-semibold">
                     {employee.role}
                  </CardHeader>
                  <CardContent>
                     <Image
                        src={employee.imgSrc}
                        alt={employee.role}
                        width={300}
                        height={300}
                        className="rounded-md"
                     />
                  </CardContent>
                  <CardFooter className="flex justify-center text-center text-xl">
                     {employee.fullName}
                  </CardFooter>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default Introduction
