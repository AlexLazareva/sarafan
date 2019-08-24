import Vue from 'vue';
import VueResorce from 'vue-resource';
import App from 'pages/App.vue';
import { connect} from "./util/websocket";

connect();

Vue.use(VueResorce);

new Vue({
    el: '#app',
    render: a => a(App)
});