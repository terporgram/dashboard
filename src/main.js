import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHaWizard } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'



createApp(App).use(router).mount('#app')
