"use client"

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { registerForm } from "@/forms"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUserStore } from "@/zustand/hooks"

const RegisterForm = () => {
   const form = useForm<z.infer<typeof registerForm>>({
      resolver: zodResolver(registerForm),
      defaultValues: {
         mobile: "",
         password: "",
         fullName: "",
         nationalCode: "",
      },
   })

   const { login } = useUserStore()

   const onSubmit = (values: z.infer<typeof registerForm>) => {
      console.log(values)
      login()
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <FormField
               control={form.control}
               name="mobile"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-lg">شماره موبایل</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="09123456789"
                           className="text-primary"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-lg">رمز عبور</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="12345678"
                           className="text-primary"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="fullName"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-lg">نام کامل</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="حسین حسینی"
                           className="text-primary"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="nationalCode"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-lg">کد ملی</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="9876543210"
                           className="text-primary"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="flex justify-center">
               <Button
                  type="submit"
                  variant={"outline"}
                  className="text-primary"
                  size={"lg"}
               >
                  ورود
               </Button>
            </div>
         </form>
      </Form>
   )
}

export default RegisterForm
