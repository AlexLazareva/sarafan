import Vue from 'vue';
import VueResorce from 'vue-resource';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from 'pages/App.vue';
import { connect } from "./util/websocket";

if(frontendData.profile) {
    connect();
}

Vue.use(VueResorce);
Vue.use(Vuetify);

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    render: a => a(App)
});