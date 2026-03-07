import { state } from './state.js'

export const i18n = {
  en: {
    eyebrow: 'Premium Nutritional Supplements',
    heroTitle: 'Nature\'s <em>Intelligence</em>,<br>Scientifically Delivered',
    heroSub: 'Food-state formulas crafted to work with your body\'s natural intelligence — pure, potent, and precisely made.',
    sectionTitle: 'Our Collection',
    readMore: 'Learn more',
    tabOverview: 'Overview',
    tabDetails: 'Details',
    tabIngredients: 'Ingredients',
    footerRepTitle: 'Representative',
    footerQrLabel: 'WeChat',
    footerBottom: '© 2025 L&H Love and Healing GmbH · Authorised distributor of',
  },
  cn: {
    eyebrow: '高品质营养补充剂',
    heroTitle: '顺应自然<em>智慧</em>，<br>科学精准呈现',
    heroSub: '食物态配方，顺应身体自然吸收方式，纯净、高效、精准制造。',
    sectionTitle: '产品系列',
    readMore: '了解更多',
    tabOverview: '产品概述',
    tabDetails: '详细介绍',
    tabIngredients: '成分解析',
    footerRepTitle: '联系人',
    footerQrLabel: '微信',
    footerBottom: '© 2025 L&H Love and Healing GmbH · 官方授权经销商',
  },
}

export function t(key) {
  return i18n[state.lang][key]
}

export function setLang(lang) {
  state.lang = lang
  document.getElementById('btn-en').classList.toggle('active', lang === 'en')
  document.getElementById('btn-cn').classList.toggle('active', lang === 'cn')
  updateFooter()
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }))
}

function updateFooter() {
  const tr = i18n[state.lang]
  const bottom = document.getElementById('footer-bottom')
  if (bottom) bottom.innerHTML = `${tr.footerBottom} <a href="https://mannayan.com" target="_blank">mannayan.com</a>`
  const repTitle = document.getElementById('footer-rep-title')
  if (repTitle) repTitle.textContent = tr.footerRepTitle
  const qrLabel = document.getElementById('footer-qr-label')
  if (qrLabel) qrLabel.textContent = tr.footerQrLabel
}
