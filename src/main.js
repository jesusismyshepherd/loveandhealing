import './styles/main.css'
import { setupNav } from './nav.js'
import { registerPage, initRoute } from './router.js'
import { setLang } from './i18n.js'
import * as mannayan from './pages/mannayan.js'
import * as timewaver from './pages/timewaver.js'

registerPage('mannayan', mannayan)
registerPage('timewaver', timewaver)

setupNav()
setLang('cn')
initRoute()
