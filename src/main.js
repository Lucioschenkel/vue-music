import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import Icon from './directives/icon';
import GlobalComponents from './includes/_globals';
import ProgressBar from './includes/progress-bar';
import './assets/tailwind.css';
import './assets/main.css';
import 'nprogress/nprogress.css';
import i18n from './includes/i18n';
import './registerServiceWorker';

ProgressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(GlobalComponents);
    app.directive('icon', Icon);

    app.mount('#app');
  }
});
