"use client"

import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"

import LoginForm from "../forms/LoginForm"
import Image from "next/image"

interface LoginDialogProps {
   Trigger: React.ReactNode
}

const LoginDialog: React.FC<LoginDialogProps> = ({ Trigger }) => {
   return (
      <Dialog>
         <DialogTrigger children={Trigger} />
         <DialogContent className="h-[400px] w-11/12 mx-auto md:h-auto overflow-auto">
            <DialogHeader>
               <DialogTitle className="text-center">
                  وارد داشبورد کاربری خود شوید
               </DialogTitle>
            </DialogHeader>
            <div
               className="
                  flex
                  flex-col
                  md:flex-row
                  justify-between
                  mx-auto
                  gap-10
                  md:gap-6
                  lg:gap-3
               "
            >
               <LoginForm />
               <Image
                  src={"/images/login.svg"}
                  alt="login"
                  width={220}
                  height={220}
               />
            </div>
         </DialogContent>
      </Dialog>
   )
}

export default LoginDialog
