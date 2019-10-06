<template>
	<v-card class="my-2">
        <v-card-title primary-title>{{ message.text }}</v-card-title> 

        <v-card-actions>
			<v-icon @click="edit">edit</v-icon>
			<v-icon @click="del">delete_outline</v-icon>
        </v-card-actions>
	</v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
        props: ['message', 'editMessage'],
        methods: {
			...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.removeMessageAction(this.message)
            }
        }
    }
</script>

<style scoped>

</style>