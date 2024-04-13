import { IconType } from "react-icons"

import { FaChalkboardTeacher, FaRegMoneyBillAlt } from "react-icons/fa"
import {
   IoCarSportOutline,
   IoPricetagOutline,
   IoSettingsOutline,
} from "react-icons/io5"
import { BiSupport } from "react-icons/bi"
import { GiBuyCard, GiFarmTractor, GiPoliceOfficerHead } from "react-icons/gi"
import { GrCertificate } from "react-icons/gr"
import { GoLaw } from "react-icons/go"
import {
   TbBuildingWarehouse,
   TbPackageExport,
   TbPackageImport,
} from "react-icons/tb"
import { LiaTruckLoadingSolid } from "react-icons/lia"
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { RiStockLine } from "react-icons/ri"
import { BsRecycle } from "react-icons/bs"
import { PiBooks } from "react-icons/pi"
import { CgProfile } from "react-icons/cg"
import { RxDashboard } from "react-icons/rx"

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

export interface ProfileItem {
   title: string
   Icon: IconType
   href: string
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
            title: "گمرکی",
            href: "#",
            description: "انجام کلیه تشریفات گمرکی",
            Icon: GiPoliceOfficerHead,
         },
         {
            title: "لجستیک",
            href: "#",
            Icon: LiaTruckLoadingSolid,
         },
         {
            title: "بیمه",
            href: "#",
            description: "صدور انواع بیمه نامه",
            Icon: MdOutlineHealthAndSafety,
         },
         {
            title: "آموزش",
            href: "#",
            Icon: FaChalkboardTeacher,
         },
         {
            title: "مجوز ها",
            description: "ارائه مجوز های مختلف جهت واردات و صادرات",
            href: "#",
            Icon: GrCertificate,
         },
         {
            title: "استاندارد، بازرسی و محیط زیست",
            href: "#",
            description:
               "اخذ مدارک استاندارد، بازرسی و محیط زیست برای صادرات و واردات انواع کالا",
            Icon: BsRecycle,
         },
         {
            title: "انبارداری",
            href: "#",
            Icon: TbBuildingWarehouse,
            description: "ارائه خدمات انبارداری برای واردات کالا",
         },
      ],
   },
   {
      title: "تجارت داخلی",
      href: "#",
      children: [
         {
            title: "خرید و فروش کالا از بورس",
            href: "#",
            Icon: RiStockLine,
         },
         {
            title: "خرید و فروش محصولات کشاورزی",
            href: "#",
            Icon: GiFarmTractor,
         },
         {
            title: "خرید و فروش خودرو",
            href: "#",
            Icon: IoCarSportOutline,
         },
      ],
   },
   {
      title: "تجارت خارجی",
      href: "#",
      children: [
         {
            title: "واردات انواع کالا های مجاز",
            href: "#",
            Icon: TbPackageImport,
         },
         {
            title: "صادرات تمامی کالا ها",
            href: "#",
            Icon: TbPackageExport,
         },
         {
            title: "بازاریابی برای صادرات محصول",
            href: "#",
            Icon: IoPricetagOutline,
         },
         {
            title: "مالی",
            href: "#",
            Icon: FaRegMoneyBillAlt,
         },
         {
            title: "جا به جایی مالی به صورت خرید کالا",
            href: "#",
            Icon: GiBuyCard,
         },
      ],
   },
   {
      title: "اختصاصی",
      href: "#",
      children: [
         {
            title: "مشاوره رایگان",
            href: "#",
            Icon: BiSupport,
         },
         {
            title: "مشاهده قوانین و بخش نامه ها",
            href: "#",
            Icon: GoLaw,
         },
         {
            title: "کتاب قوانین امور گمرکی",
            href: "#",
            Icon: PiBooks,
         },
      ],
   },
   {
      title: "درباره ما",
      href: "/about-us",
   },
   {
      title: "ارتباط با ما",
      href: "/contact-us",
   },
]

export const profileItems: ProfileItem[] = [
   {
      title: "داشبورد",
      href: "/dashboard",
      Icon: RxDashboard,
   },
   {
      title: "حساب من",
      href: "#",
      Icon: CgProfile,
   },
   {
      title: "تنظیمات",
      href: "#",
      Icon: IoSettingsOutline,
   },
]

export default navItems
