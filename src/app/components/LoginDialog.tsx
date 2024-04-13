"use client"

import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"

interface LoginDialogProps {
   Trigger: React.ReactNode
}

const LoginDialog: React.FC<LoginDialogProps> = ({ Trigger }) => {
   return (
      <>
         <Dialog>
            <DialogTrigger children={Trigger} />
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>وارد داشبورد کاربری خود شوید</DialogTitle>
               </DialogHeader>
               <div></div>
            </DialogContent>
         </Dialog>
      </>
   )
}

export default LoginDialog
