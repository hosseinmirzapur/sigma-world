import { z } from "zod"

const required_error = "پر کردن این فیلد الزامیست"

export const loginForm = z.object({
   mobile: z.string({ required_error }).length(11, {
      message: "شماره موبایل باید ۱۱ رقمی باشد",
   }),
   password: z.string({ required_error }).min(8, {
      message: "رمز عبور باید حداقل ۸ رقمی باشد",
   }),
})
