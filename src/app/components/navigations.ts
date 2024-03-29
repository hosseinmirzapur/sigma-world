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
            description: "پیچیدگی های گمرکی خود را به متخصصین ما بسپارید",
            Icon: GiHomeGarage,
         },
         {
            title: "خدمات خرید و تامین کالا",
            href: "#",
            description:
               "به راحتی کالای خود را انتخاب کنید و تعرفه آن را مشاهده نمایید",
            Icon: MdProductionQuantityLimits,
         },
         {
            title: "خدمات حمل خارجی و داخلی",
            href: "#",
            Icon: LiaTruckLoadingSolid,
         },
         {
            title: "حدمات ارزی بازرگانی",
            href: "#",
            Icon: FaRegMoneyBill1,
         },
         {
            title: "خدمات بیمه",
            href: "#",
            Icon: GrCertificate,
         },
         {
            title: "خدمات انبارداری و استریپ",
            href: "#",
            Icon: MdOutlineWarehouse,
         },
         {
            title: "خدمات تحقیق بازار صادراتی",
            href: "#",
            Icon: IoBookOutline,
         },
         {
            title: "خدمات استاندارد، بازرسی و ایزو",
            href: "#",
            Icon: PiGlobeStandLight,
         },
         {
            title: "خدمات مشاوره و آموزش",
            href: "#",
            Icon: FaPeopleRoof,
         },
         {
            title: "خدمات بازاریابی بین الملل و مهندسی رشد محصول",
            href: "#",
            Icon: RxGlobe,
         },
         {
            title: "خدمات مشارکت مالی و امور مالی بین الملل",
            href: "#",
            Icon: PiHandshake,
         },
         {
            title: "خدمات نمایندگی و امور قرارداد",
            href: "#",
            Icon: GoGitBranch,
         },
         {
            title: "خدمات صندوق ضمانت صادرات",
            href: "#",
            Icon: GoInbox,
         },
         {
            title: "خدمات صادرات کالا",
            href: "#",
            Icon: CiExport,
         },
         {
            title: "خدمات واردات کالا",
            href: "#",
            Icon: CiImport,
         },
         {
            title: "خدمات ترخیص کالا",
            href: "#",
            Icon: BsUnlock,
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
