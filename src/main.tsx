import { createApp } from '@vue/runtime-dom'
import { App } from './app'

const btnarea_cd = document.getElementById('btnarea_cd')!

const tameshiDrawRoot = document.createElement('div')
tameshiDrawRoot.id = 'tameshiDrawRoot'

btnarea_cd.prepend(tameshiDrawRoot)

const app = createApp(App)

app.mount('#tameshiDrawRoot')
