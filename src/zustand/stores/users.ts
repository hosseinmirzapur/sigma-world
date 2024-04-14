export interface UserStore {
   isLoggedIn: boolean
   token: string
   setToken: (token: string) => void
   login: () => void
   logout: () => void
}
