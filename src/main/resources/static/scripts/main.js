Vue.component('messages-list', {
    props: ['messages'],
    template: '<div>' +
            '<div v-for="message in messages">{{ message.text }}</div>' +
        '</div>'
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages"/>',
    data: {
        messages: [
            {id: 1, text: "One"},
            {id: 2, text: "Two"},
            {id: 3, text: "Three"}
        ]
    }
});