import { createApp } from '@vue/runtime-dom'
import { App } from './app'

const app = createApp(App)
const tameshiDrawRoot = document.createElement('div')
tameshiDrawRoot.id = 'tameshiDrawRoot'

const sideElement = document.getElementById('side')

if (sideElement) {
  console.log('found')
  sideElement.parentElement!.append(tameshiDrawRoot)
  app.mount('#tameshiDrawRoot')
} else {
  console.log('skip')
}

