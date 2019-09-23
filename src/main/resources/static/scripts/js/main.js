import Vue from 'vue';
import Vuetify from 'vuetify';
import '@babel/polyfill';
import 'api/resource';
import 'vuetify/dist/vuetify.min.css';

import App from 'pages/App.vue';
import { connect } from "./util/websocket";
import store from 'store/store';

if(frontendData.profile) {
    connect();
}

Vue.use(Vuetify);

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    store,
    render: a => a(App)
});