"use client"

import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import RegisterForm from "../forms/RegisterForm"
import Image from "next/image"

interface LoginDialogProps {
   Trigger: React.ReactNode
}

const RegisterDialog: React.FC<LoginDialogProps> = ({ Trigger }) => {
   return (
      <Dialog>
         <DialogTrigger children={Trigger} />
         <DialogContent className="h-[500px] w-11/12 mx-auto md:h-auto overflow-auto rounded-lg border-none">
            <DialogHeader>
               <DialogTitle className="text-center">
                  در جهان سیگما ثبت نام کنید
               </DialogTitle>
            </DialogHeader>
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
               <RegisterForm />
               <Image
                  src={"/images/register.svg"}
                  alt="register"
                  width={220}
                  height={220}
               />
            </div>
         </DialogContent>
      </Dialog>
   )
}

export default RegisterDialog
