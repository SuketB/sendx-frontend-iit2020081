<template>
    <div class="flex flex-col pt-8 h-screen">
        <div class="font-medium">What happends after displaying success screen?</div>
    <p class="mb-3 light-description">This is the screen visitors see after successfully submitting your form.</p>
   <div class="flex items-center mb-4">
        <input  type="radio" value="Do nothing" v-model="afterDisplay" name="Do nothing" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="Do nothing" class="ml-2 text-sm">Do nothing</label>
    </div>
    <div class="flex items-center mb-4">
        <input type="radio" value="Close popup after" name="Close popup after" v-model="afterDisplay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="Close popup after" class="ml-2 text-sm mr-4"> Close popup after</label>
        <input type="number" id="percentageInput" min="0" max="100" step="1" v-model="closePopupAfter" placeholder="5" class="text-center mr-3 rounded"> seconds.
    </div>
    <div class="flex items-center mb-4">
        <input  type="radio" value="Redirect to URL" name="Redirect to URL" v-model="afterDisplay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="Redirect to URL" class="ml-2 text-sm">Redirect to URL</label>
    </div>
    
    <Divider/>
    <div class="flex flex-row-reverse">
        <Button title="Go Back" @click="this.$router.go(-1)"/>
        <Button title="Finish" @click="handleFinish" class="mr-3"/>
    </div>
    </div>
   
</template>

<script>
import Button from '../components/ui/Button.vue';
    export default{
        methods:{
            async handleFinish(){
                this.$store.dispatch('updateOptionsAction', {afterDisplay:this.afterDisplay, closePopupAfter:this.closePopupAfter})
                const dataToSend = this.$store.state
                console.log(dataToSend)
                const url = 'https://sendx-frontend-iit2020081.onrender.com/api/configuration'
                const requestOpt = {
                    method: 'POST',
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(dataToSend)
                }
                const response = await fetch(url, requestOpt)
                const data = await response.json()
                console.log(data)
            }
        },
        components:{Button},
        data(){
            return {
                afterDisplay: 'Do nothing',
                closePopupAfter: null
            }
        }
    }
</script>