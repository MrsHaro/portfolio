import { useEffect, useMemo, useState } from 'react'
import { applyTranslations } from './i18n.js'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return 'light'
}

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  if (stored === 'fr' || stored === 'en') return stored
  return document.documentElement.lang === 'en' ? 'en' : 'fr'
}

export function Controls() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [lang, setLang] = useState(getInitialLang)

  const isDark = theme === 'dark'
  const nextLang = lang === 'fr' ? 'en' : 'fr'
  const labels = useMemo(
    () => ({
      theme: isDark ? (lang === 'en' ? 'Light mode' : 'Mode clair') : lang === 'en' ? 'Dark mode' : 'Mode sombre',
      langToggle: lang === 'en' ? 'Passer en français' : 'Switch to English',
    }),
    [isDark, lang],
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    localStorage.setItem('theme', theme)
  }, [theme, isDark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    applyTranslations(lang)
  }, [lang])

  useEffect(() => {
    // Apply once on mount (for initial render / refresh)
    applyTranslations(lang)
  }, [])

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        aria-label={labels.theme}
        onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      >
        <svg
          className="theme-toggle-icon sun-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          className="theme-toggle-icon moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <span className="theme-toggle-text">{labels.theme}</span>
      </button>

      <button
        type="button"
        className="lang-toggle-btn"
        aria-label={labels.langToggle}
        onClick={() => setLang(nextLang)}
      >
        {nextLang.toUpperCase()}
      </button>
    </>
  )
}

