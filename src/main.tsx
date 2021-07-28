import { createApp } from '@vue/runtime-dom'
import { App } from './app'

const app = createApp(App)
const tameshiDrawRoot = document.createElement('div')
tameshiDrawRoot.id = 'tameshiDrawRoot'

const btnarea_cd = document.getElementById('btnarea_cd')

if (btnarea_cd) {
  btnarea_cd.prepend(tameshiDrawRoot)
  app.mount('#tameshiDrawRoot')
} else {
  const appendTarget = document.querySelector('#deck_image')!.nextSibling!.parentElement!
  appendTarget.append(tameshiDrawRoot)
  app.mount('#tameshiDrawRoot')
}

