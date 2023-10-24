<template>
  <div class="flex flex-col pt-8">
    <div class="font-medium mb-3">Show the popup when visitor:</div>
    <div class="flex items-center mb-4">
      <input
        id="Enters website"
        type="radio"
        value="Enters website"
        v-model="showPopWhen"
        name="Enters website"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="Enters website" class="ml-2 text-sm">Enters website</label>
    </div>
    <div class="flex items-center mb-4">
      <input
        id="Exits website"
        type="radio"
        value="Exits website"
        v-model="showPopWhen"
        name="Exits website"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="Exits website" class="ml-2 text-sm">Exits website</label>
    </div>
    <div class="flex items-center mb-4">
      <input
        id="On"
        type="radio"
        value="On"
        v-model="showPopWhen"
        name="On"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="On" class="ml-2 text-sm mr-4"> On</label>
      <input
        type="number"
        id="percentageInput"
        min="0"
        max="100"
        v-model="showOnScroll"
        step="1"
        placeholder="50%"
        class="text-center mr-3 rounded"
      />
      page scroll
    </div>
    <div class="flex items-center mb-4">
      <input
        id="After"
        type="radio"
        value="After"
        v-model="showPopWhen"
        name="After"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="After" class="ml-2 text-sm mr-4"> After</label>
      <input
        type="number"
        id="percentageInput"
        min="0"
        max="1000"
        v-model="showAfter"
        step="1"
        placeholder="1"
        class="text-center mr-3 rounded"
      />
      seconds on website
    </div>
    <Divider />
    <div class="my-2">Advanced</div>
    <div class="font-medium">How often to show the popup:</div>
    <p class="mb-4 light-description">
      Set the period when you want to show the popup to the same visitor if they
      didn't subscribe.
    </p>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        value="Every page view"
        v-model="showHowOften"
        name="Every page view"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="Every page view" class="ml-2 text-sm">Every page view</label>
    </div>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        value="Every new browser session"
        v-model="showHowOften"
        name="Every new browser session"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="Every new browser session" class="ml-2 text-sm"
        >Every new browser session</label
      >
    </div>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        value="After"
        v-model="showHowOften"
        name="After"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="After" class="ml-2 text-sm mr-4"> After</label>
      <input
        type="number"
        id="percentageInput"
        min="0"
        max="100"
        step="1"
        v-model="showAfterDays"
        placeholder="3"
        class="text-center mr-3 rounded"
      />
      days
    </div>
    <Divider />
    <div class="font-medium mb-3">When to stop showing popup:</div>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        value="Never"
        v-model="stopPopupWhen"
        name="Never"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="Never" class="ml-2 text-sm">Never</label>
    </div>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        v-model="stopPopupWhen"
        value="If the visitor has successfully completed the action"
        name="If the visitor has successfully completed the action"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="If the visitor has successfully completed the action"
        class="ml-2 text-sm"
        >If the visitor has successfully completed the action</label
      >
    </div>
    <div class="flex items-center mb-4">
      <input
        type="radio"
        v-model="stopPopupWhen"
        value="If the visitor has successfully completed the action or the pop-up has been shown"
        name="If the visitor has successfully completed the action or the pop-up has been shown"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="If the visitor has successfully completed the action or the pop-up has been shown"
        class="ml-2 text-sm mr-4"
      >
        If the visitor has successfully completed the action or the pop-up has
        been shown</label
      >
      <input
        type="number"
        id="percentageInput"
        min="0"
        max="100"
        step="1"
        v-model="timesActionCompleted"
        placeholder="3"
        class="text-center mr-3 rounded"
      />
      times.
    </div>
    <Divider />
    <div class="flex flex-row-reverse">
      <Button title="Go Back" @click="this.$router.go(-1)" />
      <Button title="Continue" @click="handleBehaviourData" class="mr-3" />
     
    </div>
  </div>
</template>

<script>
import Button from '../components/ui/Button.vue'
import Divider from '../components/ui/Divider.vue'

export default {
  components: { Button, Divider },
  data() {
    return {
      showPopWhen: 'Enters website',
      showOnScroll: null,
      showAfter: null,
      showHowOften: 'Every page view',
      showAfterDays: null,
      stopPopupWhen: 'Never',
      timesActionCompleted: null,
    }
  },
  methods: {
    handleBehaviourData() {
      let data = {
        showPopWhen: this.showPopWhen,
        showOnScrol: this.showOnScrolll,
        showAfter: this.showAfter,
        showHowOften: this.showHowOften,
        showAfterDays: this.showAfterDays,
        stopPopupWhen: this.stopPopupWhen,
        timesActionCompleted: this.timesActionCompleted,
      }
      this.$store.dispatch('updateOptionsAction', data)
      this.$router.push('/success')
    },
  },
}
</script>
