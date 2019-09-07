import Vue from 'vue';
import Vuetify, {
	VContent
} from 'vuetify/lib';

<template>
	<v-app id="app">
		<v-app-bar
		color="deep-purple accent-4"
		dark
		app>
			<v-toolbar-title>Sarafan</v-toolbar-title>
			<v-btn icon href="/logout">
				<v-icon class="material-icons">exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<div v-if="!profile">
				Необходимо авторизоваться через <a href="/login">Google</a>
			</div>
			<div v-else>
				<messages-list :messages="messages"/>
			</div>
		</v-content>
	</v-app>
</template>

<script>
import MessagesList from 'components/messages/MessagesList.vue'
import { addHandler } from '../util/websocket'
import { getIndex } from '../util/collections'

	export default {
		components: {
			MessagesList
		},
		data() {
				return {
				messages: frontendData.messages,
				profile: frontendData.profile
			}
		},
		created() {
			addHandler(data => {
				let index = getIndex(this.messages, data.id);
				
				if (index > -1) {
					this.messages.splice(index, 1, data);
				} else {
					this.messages.push(data);
				}
			})
		}
	}
</script>