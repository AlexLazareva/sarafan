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
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { addHandler } from '../util/websocket'

	export default {
		computed: mapState(['profile']),
		methods: mapMutations(['addMessageMutation', 'updateMessageMutation', 'removeMessageMutation']),
		created() {
			addHandler(data => {
				if (data.objectType === 'MESSAGE') {
					switch (data.eventType) {
						case 'CREATE':
							this.addMessageMutation(data.body)
							break
						case 'UPDATE':
							this.updateMessageMutation(data.body)
							break
						case 'REMOVE':
							this.removeMessageMutation(data.body)
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