import { z } from "zod"

const required_error = "وارد نمودن این مورد الزامیست"

export const otpForm = z.object({
   code: z
      .number({
         required_error,
      })
      .min(5, {
         message: "رمز وارد شده ۵ رقمی نیست",
      })
      .max(5, {
         message: "رمز وارد شده ۵ رقمی نیست",
      }),
})
