import { createApp } from 'vue'

import App from './App'
import BaseCard from '@/components/UI/BaseCard'
import BaseButton from '@/components/UI/BaseButton'
import BaseAlert from '@/components/UI/BaseAlert';

const app = createApp(App);

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-alert', BaseAlert)

app.mount('#app')
