import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import type { ThemeConfig } from '@chakra-ui/react'

interface Store {
  darkMode: boolean
  setDarkMode: (d?: Store['darkMode']) => void
  language: 'cn' | 'en'
  setLanguage: (lng?: Store['language']) => void
  themeConfig: ThemeConfig
}

export const useAppStore = create<Store>()(persist((set, get) => ({
  darkMode: false,
  setDarkMode: (d) => {
    const _d = get().darkMode
    set({ darkMode: d ?? !_d })
  },
  language: 'cn',
  setLanguage: (lng) => {
    const _lng = lng ?? get().language === 'cn' ? 'en' : 'cn'
    set({ language: _lng })
  },
  themeConfig: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

}), {
  name: '__APP_STORE__',
  storage: createJSONStorage(() => localStorage),
}))
if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('AppStore', useAppStore)
