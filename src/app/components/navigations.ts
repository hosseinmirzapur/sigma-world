import { IconType } from "react-icons"
import { BiSupport } from "react-icons/bi"
import { BsUnlock } from "react-icons/bs"
import { CiExport, CiImport } from "react-icons/ci"
import { FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6"
import { GiHomeGarage, GiTrade } from "react-icons/gi"
import { GoGitBranch, GoInbox } from "react-icons/go"
import { GrCertificate } from "react-icons/gr"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { IoBookOutline } from "react-icons/io5"
import {
   LiaChalkboardTeacherSolid,
   LiaTruckLoadingSolid,
} from "react-icons/lia"
import { LuFileSpreadsheet } from "react-icons/lu"
import { MdOutlineWarehouse, MdProductionQuantityLimits } from "react-icons/md"
import { PiCalculator, PiGlobeStandLight, PiHandshake } from "react-icons/pi"
import { RiBaseStationLine } from "react-icons/ri"
import { RxGlobe } from "react-icons/rx"

export interface NavItem {
   title: string
   href: string
   children?: NavChild[]
}

export interface NavChild {
   title: string
   href: string
   description?: string
   Icon: IconType
}

const navItems: NavItem[] = [
   {
      title: "صفحه اصلی",
      href: "/",
   },
   {
      title: "خدمات ما",
      href: "#",
      children: [
         {
            title: "خدمات گمرکی",
            href: "#",
            description: "انجام کلیه امور گمرکی بدون واسطه",
            Icon: GiHomeGarage,
         },
         {
            title: "خدمات خرید و تامین کالا",
            href: "#",
            description: "یافتن، اعتبارسنجی و خرید کالا از منابع معتبر",
            Icon: MdProductionQuantityLimits,
         },
         {
            title: "خدمات حمل خارجی و داخلی",
            href: "#",
            description: "کلیه امور مربوط به حمل داخلی و بین المللی",
            Icon: LiaTruckLoadingSolid,
         },
         {
            title: "حدمات ارزی بازرگانی",
            href: "#",
            description: "مبادلات ارز و انجام امور خدمات ارزی بازرگانی",
            Icon: FaRegMoneyBill1,
         },
         {
            title: "خدمات بیمه",
            description: "ارائه کلیه خدمات مربوط به بیمه",
            href: "#",
            Icon: GrCertificate,
         },
         {
            title: "خدمات انبارداری و استریپ",
            href: "#",
            description: "مدیریت بارگیری، نظارت امور، خدمات مکانیزه انبارداری",
            Icon: MdOutlineWarehouse,
         },
         {
            title: "خدمات تحقیق بازار صادراتی",
            href: "#",
            Icon: IoBookOutline,
            description:
               "ایجاد ارتباط و استفاده از استراتژی‌های بازاریابی جهت جذب مشتریان خارجی",
         },
         {
            title: "خدمات استاندارد، بازرسی و ایزو",
            href: "#",
            Icon: PiGlobeStandLight,
            description: "بازرسی، اعتبار سنجی، مشاوره کسب گواهینامه ایزو",
         },
         {
            title: "خدمات مشاوره و آموزش",
            href: "#",
            description: "آموزش و مشاوره در حوزه تجارت و سامانه‌ها",
            Icon: FaPeopleRoof,
         },
         {
            title: "خدمات بازاریابی بین الملل و مهندسی رشد محصول",
            href: "#",
            Icon: RxGlobe,
            description: "مهندسی محصول، کشف بازار و تسهیل صادرات",
         },
         {
            title: "خدمات مشارکت مالی و امور مالی بین الملل",
            href: "#",
            Icon: PiHandshake,
            description: "مشارکت و تامین مالی، ترانسفر پولی بین‌المللی",
         },
         {
            title: "خدمات نمایندگی و امور قرارداد",
            href: "#",
            Icon: GoGitBranch,
            description:
               "مذاکره ، عقد قرارداد، اخذ نمایندگی ، حل اختلافات بین‌المللی",
         },
         {
            title: "خدمات صندوق ضمانت صادرات",
            href: "#",
            Icon: GoInbox,
            description: " ارائه مشاوره و خدمات جهت تسهیل صادرات",
         },
         {
            title: "خدمات صادرات کالا",
            href: "#",
            Icon: CiExport,
            description: "انجام کل پروسه واردات بدون نیاز به واسطه‌",
         },
         {
            title: "خدمات واردات کالا",
            href: "#",
            Icon: CiImport,
            description: "بازاریابی، یافتن خریدار، انجام کلیه امور صادرات",
         },
         {
            title: "خدمات ترخیص کالا",
            href: "#",
            Icon: BsUnlock,
            description: "اخذ مجوز، اظهار و ترخیص کالا از گمرکات سراسر کشور",
         },
      ],
   },
   {
      title: "تجارت بین الملل",
      href: "#",
      children: [
         {
            title: "بخش نامه های بازرگانی",
            href: "#",
            Icon: LuFileSpreadsheet,
         },
         {
            title: "فیلم های آموزشی",
            href: "#",
            Icon: LiaChalkboardTeacherSolid,
         },
         {
            title: "اصطلاحات بازرگانی",
            href: "#",
            Icon: GiTrade,
         },
      ],
   },
   {
      title: "سامانه های بازرگانی",
      href: "#",
      children: [
         {
            title: "سامانه جامع امور گمرکی",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "گمرک جمهوری اسلامی ایران",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه جامع مدیریت کالا و خدمات پس از ترخیص",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه جامع انبار ها و مراکز نگهداری کالا",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه قرنطینه",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه تنظیم مقررات رادیویی",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه انرژی اتمی",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه یکپارچه کارت بازرگانی هوشمند",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه جامع تجارت ایران",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه غذا و دارو",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
         {
            title: "سامانه ارزی نیما",
            href: "#",
            Icon: IoIosCheckmarkCircleOutline,
         },
      ],
   },
   {
      title: "خدمات آنلاین",
      href: "#",
      children: [
         {
            title: "استعلام آنلاین خدمات",
            href: "#",
            Icon: RiBaseStationLine,
         },
         {
            title: "محاسبه آنلاین حقوق و عوارض گمرکی",
            href: "#",
            Icon: PiCalculator,
         },
         {
            title: "مشاوره رایگان",
            href: "#",
            Icon: BiSupport,
         },
      ],
   },
   {
      title: "درباره ما",
      href: "#",
   },
   {
      title: "ارتباط با ما",
      href: "#",
   },
]

export default navItems
