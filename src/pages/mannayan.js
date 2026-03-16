import { PRODUCT_DATA } from '../../product_data_v2.js'
import { state } from '../state.js'
import { i18n, t } from '../i18n.js'

const products = PRODUCT_DATA
let currentProduct = null
let currentTab = 'overview'
let listeners = []

function on(el, event, handler) {
  el.addEventListener(event, handler)
  listeners.push({ el, event, handler })
}

// ── Helpers ──────────────────────────────────────────────

function parseLabelLines(label) {
  const lines = label.split('\n')
  const title = lines[0]
  const sub = lines[1] || ''
  const bullets = lines.slice(2).filter(l => l.startsWith('•')).map(l => l.replace('•', '').trim())
  const footer = lines.filter(l => !l.startsWith('•') && lines.indexOf(l) > 1)
  return { title, sub, bullets, footer }
}

function parseIngredients(text) {
  if (!text) return []
  return text.split(/\n\n(?=\*\*)/).map(block => {
    const nameMatch = block.match(/^\*\*(.+?)\*\*/)
    const name = nameMatch ? nameMatch[1] : ''
    const desc = block.replace(/^\*\*(.+?)\*\*\n?/, '').trim()
    return { name, desc }
  }).filter(i => i.name)
}

function formatProse(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}

// ── Render ────────────────────────────────────────────────

function renderCards() {
  const grid = document.getElementById('products-grid')
  if (!grid) return
  const tr = i18n[state.lang]

  document.getElementById('hero-eyebrow').textContent = tr.eyebrow
  document.getElementById('hero-title').innerHTML = tr.heroTitle
  document.getElementById('hero-sub').textContent = tr.heroSub
  document.getElementById('section-title').textContent = tr.sectionTitle
  document.getElementById('section-count').textContent =
    `${products.length} ${state.lang === 'cn' ? '款产品' : 'products'}`

  grid.innerHTML = ''
  products.forEach((p, idx) => {
    const content = p.content?.[state.lang]
    if (!content) return
    const parsed = parseLabelLines(content.label)

    const card = document.createElement('div')
    card.className = 'product-card'
    card.style.animationDelay = (idx * 0.08) + 's'
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${p.image_url}" alt="${parsed.title}" loading="lazy" onerror="this.style.opacity=0.3">
      </div>
      <div class="card-body">
        <h3 class="card-label">${parsed.title}</h3>
        <p class="card-quantity">${parsed.footer[0] || p.quantity[0]}</p>
        <ul class="card-bullets">
          ${parsed.bullets.slice(0, 4).map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="card-footer">
          <span class="card-price">${p.price[0]}</span>
          <span class="card-cta">${tr.readMore}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>`
    card.addEventListener('click', () => openModal(idx))
    grid.appendChild(card)
  })
}

// ── Modal ─────────────────────────────────────────────────

function openModal(idx) {
  currentProduct = idx
  switchTab('overview')
  populateModal()
  document.getElementById('modal-overlay').classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open')
  document.body.style.overflow = ''
}

function populateModal() {
  const p = products[currentProduct]
  const content = p.content[state.lang]
  const parsed = parseLabelLines(content.label)
  const tr = i18n[state.lang]

  document.getElementById('modal-img').src = p.image_url
  document.getElementById('modal-img').alt = parsed.title
  document.getElementById('modal-tag').textContent = `#${p.product_number}`
  document.getElementById('modal-title').textContent = parsed.title
  document.getElementById('modal-sub').textContent = parsed.sub || parsed.footer[0] || p.quantity[0]
  document.getElementById('modal-bullets').innerHTML =
    parseLabelLines(content.label).bullets.map(b => `<li>${b}</li>`).join('')

  document.getElementById('tab-overview').textContent = tr.tabOverview
  document.getElementById('tab-details').textContent = tr.tabDetails
  document.getElementById('tab-ingredients').textContent = tr.tabIngredients

  document.getElementById('modal-short').innerHTML = formatProse(content.short_description)
  document.getElementById('modal-long').innerHTML = formatProse(content.long_description)

  const ingredients = parseIngredients(content.ingredient_reference)
  document.getElementById('modal-ingredients').innerHTML = ingredients.map(i => `
    <div class="ingredient-card">
      <div class="ingredient-name">${i.name}</div>
      <div class="ingredient-desc">${i.desc}</div>
    </div>`).join('')
}

function switchTab(name) {
  currentTab = name
  ;['overview', 'details', 'ingredients'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('active', t === name)
    document.getElementById('panel-' + t).classList.toggle('active', t === name)
  })
}

// ── Template ──────────────────────────────────────────────

function template() {
  return `
<section class="hero">
  <p class="hero-eyebrow" id="hero-eyebrow"></p>
  <h1 class="hero-title" id="hero-title"></h1>
  <p class="hero-sub" id="hero-sub"></p>
  <div class="hero-rule"></div>
</section>

<section class="products-section">
  <div class="section-header">
    <h2 class="section-title" id="section-title"></h2>
    <span class="section-count" id="section-count"></span>
  </div>
  <div class="products-grid" id="products-grid"></div>
</section>

<div class="modal-overlay" id="modal-overlay">
  <div class="modal" id="modal">
    <button class="modal-close" id="modal-close-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
    <div class="modal-top">
      <div class="modal-image-col">
        <img id="modal-img" src="" alt="">
      </div>
      <div class="modal-info-col">
        <p class="modal-tag" id="modal-tag"></p>
        <h2 class="modal-title" id="modal-title"></h2>
        <p class="modal-sub" id="modal-sub"></p>
        <ul class="modal-bullets" id="modal-bullets"></ul>
        <div class="modal-price-row">
          <span class="modal-price" id="modal-price"></span>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="tabs">
        <button class="tab-btn active" id="tab-overview"></button>
        <button class="tab-btn" id="tab-details"></button>
        <button class="tab-btn" id="tab-ingredients"></button>
      </div>
      <div class="tab-panel active" id="panel-overview">
        <div class="prose" id="modal-short"></div>
      </div>
      <div class="tab-panel" id="panel-details">
        <div class="prose" id="modal-long"></div>
      </div>
      <div class="tab-panel" id="panel-ingredients">
        <div class="ingredient-grid" id="modal-ingredients"></div>
      </div>
    </div>
  </div>
</div>`
}

// ── Lifecycle ─────────────────────────────────────────────

export function mount(app) {
  app.innerHTML = template()

  // Tab buttons
  ;['overview', 'details', 'ingredients'].forEach(name => {
    on(document.getElementById('tab-' + name), 'click', () => switchTab(name))
  })

  // Modal close
  on(document.getElementById('modal-close-btn'), 'click', closeModal)
  on(document.getElementById('modal-overlay'), 'click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal()
  })

  // Keyboard
  const onKey = e => { if (e.key === 'Escape') closeModal() }
  on(document, 'keydown', onKey)

  // Language change
  const onLang = () => {
    renderCards()
    if (currentProduct !== null && document.getElementById('modal-overlay').classList.contains('open')) {
      populateModal()
    }
  }
  on(document, 'langchange', onLang)

  renderCards()
}

export function unmount() {
  listeners.forEach(({ el, event, handler }) => el.removeEventListener(event, handler))
  listeners = []
  currentProduct = null
  document.body.style.overflow = ''
}
