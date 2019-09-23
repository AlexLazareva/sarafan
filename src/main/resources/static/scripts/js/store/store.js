import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: frontendData.messages,
        profile: frontendData.profile
    },
    getters: {
        sortedMessages: state => {
            return state.messages.sort((a, b) => -(a.id - b.id));
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});