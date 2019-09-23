import Vue from 'vue';
import Vuetify from 'vuetify/lib';

<template>
	<v-app id="app">
		<v-app-bar
		color="deep-purple accent-4"
		dark
		app>
			<v-toolbar-title>Sarafan</v-toolbar-title>
			<v-spacer></v-spacer>
			<div v-if="profile">{{profile.name}}</div>
			<v-btn icon v-if="profile" href="/logout">
				<v-icon class="material-icons">exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<v-container fluid v-if="!profile">
					Необходимо авторизоваться через <a href="/login">Google</a>
			</v-container>
			<v-container fluid v-if="profile">
				<messages-list />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import MessagesList from 'components/messages/MessagesList.vue'
import { addHandler } from '../util/websocket'

	export default {
		components: {
			MessagesList
		},
		computed: mapState(['profile']),
		created() {
			addHandler(data => {
				if (data.objectType === 'MESSAGE') {
					const index = this.messages.findIndex(item => item.id === data.body.id);
					switch (data.eventType) {
						case 'CREATE':
						case 'UPDATE':
							if (index > -1) {
								this.messages.splice(index, 1, data.body)
							} else {
								this.messages.push(data.body)
							}
							break
						case 'REMOVE':
							this.messages.splice(index, 1)
							break
						default:
							console.error(`Looks like the event type is unknown "${data.eventType}"`);
					}
				} else {
					console.error(`Looks like the object type is unknown "${data.objectType}"`);
				}
			})
		}
	}
</script>