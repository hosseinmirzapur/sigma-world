import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { UserStore } from "../stores"

export const useUserStore = create<UserStore>()(
   devtools(
      persist(
         (set) => ({
            isLoggedIn: false,
            login: () =>
               set(() => ({
                  isLoggedIn: true,
               })),
            logout: () =>
               set(() => ({
                  isLoggedIn: false,
               })),
         }),
         {
            name: "userStore",
         }
      )
   )
)
