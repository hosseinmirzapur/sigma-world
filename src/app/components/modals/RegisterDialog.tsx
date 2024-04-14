"use client"

import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegisterForm from "../forms/RegisterForm"
import Image from "next/image"

interface LoginDialogProps {
   Trigger: React.ReactNode
}

const RegisterDialog: React.FC<LoginDialogProps> = ({ Trigger }) => {
   // ** variables
   const [userType, setUserType] = useState<"real" | "legal">("real")

   return (
      <Dialog>
         <DialogTrigger children={Trigger} />
         <DialogContent className="h-[500px] w-11/12 mx-auto md:h-auto overflow-auto rounded-lg border-none">
            <DialogHeader>
               <DialogTitle className="text-center">
                  در جهان سیگما ثبت نام کنید
               </DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="real" className="flex flex-col justify-center">
               <TabsList>
                  <TabsTrigger
                     value="real"
                     onClick={() => setUserType("real")}
                     className="w-30 md:w-35 lg:w-40"
                  >
                     حقیقی
                  </TabsTrigger>
                  <TabsTrigger
                     value="legal"
                     onClick={() => setUserType("legal")}
                     className="w-30 md:w-35 lg:w-40"
                  >
                     حقوقی
                  </TabsTrigger>
               </TabsList>
               <TabsContent value="real" dir="rtl">
                  <div
                     className="
                        flex
                        flex-col
                        md:flex-row
                        mx-auto
                        justify-between
                        gap-10
                        md:gap-6
                        lg:gap-3
                     "
                  >
                     <RegisterForm userType="real" />
                     <Image
                        src={"/images/register.svg"}
                        alt="register"
                        width={220}
                        height={220}
                     />
                  </div>
               </TabsContent>
               <TabsContent value="legal" dir="rtl">
                  <div
                     className="
                        flex
                        flex-col
                        md:flex-row
                        mx-auto
                        justify-between
                        gap-10
                        md:gap-6
                        lg:gap-3
                     "
                  >
                     <RegisterForm userType="legal" />
                     <Image
                        src={"/images/register.svg"}
                        alt="register"
                        width={220}
                        height={220}
                     />
                  </div>
               </TabsContent>
            </Tabs>
         </DialogContent>
      </Dialog>
   )
}

export default RegisterDialog
