var messageApi = Vue.resource('/message{/id}');

function getIndex(list, id) {
    list.find(id);
}

Vue.component('message-form', {
    props: ['messages', 'messageAttr'],
    data: function () {
        return {
            text: '',
            id: ''
        };
    },
    watch: {
        messageAttr: function(newVal, oldVal) {
            this.text = newVal.text;
            this.id = newVal.id;
        }
    },
    template: '<div>' +
                '<input type="text" placeholder="Write something" v-model="text"/>' +
                '<input type="button" value="Save" @click="save"/>' +
            '</div>',
    methods: {
        save: function () {
            var message = { text: this.text };

            if (this.id) {
                messageApi.update({id: this.id}, message).then(result =>
                    result.json().then(data => {
                        this.message.push(data);
                        this.text = '';
                }));
            } else {
                messageApi.save({}, message).then(result =>
                    result.json().then(data => {
                        this.messages.push(data);
                    this.text = '';
                }));
            }
        }
    }
});

Vue.component('message-row', {
    props: ['message', 'editMethod'],
    template: '<div> {{ message.text }} ' +
            '<span>' +
                '<input type="button" value="Edit" @click="edit" />' +
            '</span>' +
        '</div>',
    methods: {
        edit: function () {
            this.editMethod(this.message);
        }
    }
});
Vue.component('messages-list', {
    props: ['messages'],
    data: function() {
        return {
            message: null
        };
    },
    template: '<div>' +
            '<message-form :messages="messages" :messageAttr="message" />' +
            '<message-row v-for="message in messages" :key="message.id" :message="message" :editMethod="editMethod"/>' +
        '</div>',
    created: function () {
        messageApi.get().then(response => {
            response.json().then(data => {
                data.forEach(message => this.messages.push(message));
            });
        });
    },
    methods: {
        editMessage: function () {
            this.message = message;
        }
    }
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages"/>',
    data: {
        messages: []
    }
});