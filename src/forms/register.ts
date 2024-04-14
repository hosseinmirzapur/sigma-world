import { z } from "zod"

const required_error = "پر کردن این فیلد الزامیست"

export const registerForm = z.object({
   mobile: z.string({ required_error }).length(11, {
      message: "شماره موبایل باید ۱۱ رقمی باشد",
   }),
   password: z
      .string({
         required_error,
      })
      .min(8, {
         message: "رمز عبور باید حداقل ۸ رقمی باشد",
      }),
   fullName: z.string({ required_error }),
   nationalCode: z.string({ required_error }).length(10, {
      message: "کد ملی باید ده رقمی باشد",
   }),
})
