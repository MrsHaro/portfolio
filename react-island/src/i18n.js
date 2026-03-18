export const translations = {
  fr: {
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'header.subtitle': "Développeur web et passionné d'électronique embarquée.",
    'section.projects': 'Mes projets',
    'section.about': 'À propos',
    'section.skills': 'Compétences',
    'section.contact': 'Me contacter',
    'contact.name': 'Ton nom',
    'contact.email': 'Ton email',
    'contact.message': 'Ton message...',
    'contact.send': 'Envoyer',
    'theme.dark': 'Mode sombre',
    'theme.light': 'Mode clair',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'header.subtitle': 'Web developer and embedded electronics enthusiast.',
    'section.projects': 'My projects',
    'section.about': 'About',
    'section.skills': 'Skills',
    'section.contact': 'Contact me',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Your message...',
    'contact.send': 'Send',
    'theme.dark': 'Dark mode',
    'theme.light': 'Light mode',
  },
}

export function applyTranslations(lang) {
  const dict = translations[lang] ?? translations.fr

  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (!key) return
    const value = dict[key]
    if (typeof value === 'string') el.textContent = value
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder')
    if (!key) return
    const value = dict[key]
    if (typeof value === 'string') el.setAttribute('placeholder', value)
  })
}

