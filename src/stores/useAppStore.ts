import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface Store {
  darkMode: boolean
  setDark: (d?: Store['darkMode']) => void
  language: 'cn' | 'en'
  setLanguage: (lng?: Store['language']) => void
}

export const useAppStore = create<Store>()(persist((set, get) => ({
  darkMode: false,
  setDark: (d) => {
    const _d = get().darkMode
    set({ darkMode: d ?? !_d })
  },
  language: 'cn',
  setLanguage: (lng?: Store['language']) => {
    const _lng = lng ?? get().language === 'cn' ? 'en' : 'cn'
    set({ language: _lng })
  },

}), {
  name: '__APP_STORE__',
  storage: createJSONStorage(() => localStorage),
}))
if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('AppStore', useAppStore)
