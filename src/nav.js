import { navigate } from './router.js'
import { setLang } from './i18n.js'

export function setupNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      navigate(el.dataset.nav)
    })
  })

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', () => setLang(el.dataset.lang))
  })
}
