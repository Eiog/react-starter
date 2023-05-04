import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface Store {
  darkMode: boolean
  language: 'cn' | 'en'
  changeLanguage: () => void
}

export const useAppStore = create<Store>()(devtools(persist((set, get) => ({
  darkMode: false,
  language: 'cn',
  changeLanguage: () => {
    set(state => ({
      language: state.language === 'cn' ? 'en' : 'cn',
    }))
  },
}), {
  name: '__APP_STORE__',
  storage: createJSONStorage(() => sessionStorage),
})))
