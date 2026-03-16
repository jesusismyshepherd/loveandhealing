import { state } from './state.js'

const registry = {}
let activePage = null

export function registerPage(name, mod) {
  registry[name] = mod
}

export function navigate(page, push = true) {
  if (!registry[page]) page = 'mannayan'

  activePage?.unmount?.()

  const app = document.getElementById('app')
  registry[page].mount(app)
  activePage = registry[page]
  state.page = page

  Object.keys(registry).forEach(p => {
    document.getElementById('nav-' + p)?.classList.toggle('active', p === page)
  })

  window.scrollTo(0, 0)

  if (push) history.pushState({ page }, '', '/' + page)
}

export function initRoute() {
  const path = location.pathname.replace(/^\//, '').split('/')[0]
  const page = registry[path] ? path : 'mannayan'
  navigate(page, false)
  if (!registry[path]) history.replaceState({ page }, '', '/' + page)
}

window.addEventListener('popstate', e => {
  navigate(e.state?.page || 'mannayan', false)
})
