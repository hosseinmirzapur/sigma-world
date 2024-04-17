import { AxiosResponse } from "axios"

export const processResponse = (res: AxiosResponse): any => {
   let status = res.status
   status = Math.floor(status / 100)

   switch (status) {
      case 2:
         return res.data
      case 4:
         return {
            error: "خطا در دریافت اطلاعات از وب سرویس",
         }
      case 5:
         return {
            error: "خطا در سمت سرور",
         }
   }
}
