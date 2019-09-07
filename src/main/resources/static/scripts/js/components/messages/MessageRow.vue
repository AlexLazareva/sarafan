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
export default {
        props: ['message', 'editMessage', 'deleteMessage', 'messages'],
        methods: {
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.deleteMessage(this.message)
            }
        }
    }
</script>

<style scoped>

</style>