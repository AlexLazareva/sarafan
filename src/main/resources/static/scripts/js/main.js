import Vue from 'vue';
import VueResorce from 'vue-resource';
import App from 'pages/App.vue';

Vue.use(VueResorce);

new Vue({
    el: '#app',
    render: a => a(App)
});