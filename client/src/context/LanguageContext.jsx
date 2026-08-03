import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('chc_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('chc_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key
  }

  const toggleLanguage = (newLang) => {
    setLang(newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
