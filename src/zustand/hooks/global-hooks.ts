import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { GlobalStore } from "../stores"

export const useGlobalStore = create<GlobalStore>()(
   devtools(
      persist(
         (set) => ({
            theme: "dark",
            setDark: () =>
               set(() => ({
                  theme: "dark",
               })),
            setLight: () =>
               set(() => ({
                  theme: "light",
               })),
         }),
         {
            name: "globalStore",
         }
      )
   )
)
