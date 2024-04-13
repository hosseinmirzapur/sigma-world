import { z } from "zod"

const loginForm = z.object({
   mobile: z
      .string({
         required_error: "وارد نمودن این مورد الزامیست",
      })
      .length(11, {
         message: "شماره موبایل باید ۱۱ رقمی باشد",
      }),
   password: z
      .string({
         required_error: "وارد نمودن این مورد الزامیست",
      })
      .min(8),
})
