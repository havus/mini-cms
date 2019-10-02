if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'froala-editor/js/froala_editor.pkgd.min.js';
// import 'froala-editor/css/froala_editor.pkgd.min.css';
// import 'froala-editor/css/froala_style.min.css';
// import VueFroala from 'vue-froala-wysiwyg';
import router from './router.js';

Vue.use(VueSweetalert2);
// Vue.use(VueFroala);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');