import { IconType } from "react-icons"
import { BiNews } from "react-icons/bi"
import { BsTruck } from "react-icons/bs"
import { MdOndemandVideo, MdRule } from "react-icons/md"
import { PiHandshakeLight } from "react-icons/pi"

interface QuickAccessItem {
   title: string
   href: string
   Icon: IconType
}

const quickAccessItems: QuickAccessItem[] = [
   {
      title: "درباره ما",
      href: "/about-us",
      Icon: BsTruck,
   },
   {
      title: "ویدئو های آموزشی",
      href: "#",
      Icon: MdOndemandVideo,
   },
   {
      title: "اخبار بازرگانی",
      href: "#",
      Icon: BiNews,
   },
   {
      title: "بخش نامه های بازرگانی",
      href: "#",
      Icon: MdRule,
   },
   {
      title: "همکاری با ما",
      href: "#",
      Icon: PiHandshakeLight,
   },
]

export default quickAccessItems
