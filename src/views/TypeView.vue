<script>
import FormCard from '../components/FormCard.vue'

import Button from '../components/ui/Button.vue'

export default {
  components: {
    FormCard,
    Button,
  },
  data() {
    return {
      forms: [
        {
          name: 'Embeded Form',
          description: 'Create a form to embed on your website',
          path: '/embeded-form.png',
        },
        {
          name: 'Landing Page',
          description: 'Create a form to embed on your website',
          path: '/landing-page.png'
        },
        {
          name: 'Popup Form',
          description: 'Create a form to embed on your website',
        path: '/popup-form.png'
        },
      ],
      activeContainer: 0
    }
  },
  methods:{
   onClick(index){
      this.activeContainer = index
   }
  }
}
</script>

<template>
  <div class="pt-8">
    <div class="mb-5">
      <h2>Select Form Type</h2>
      <p>What kind of form would you like to create?</p>
    </div>
    <div class="flex justify-between items-center pb-8" style="borderBottom: 2px solid #969696;">
      <FormCard
        v-for="(item, index) in forms"
        :key="index"
        :title="item.name"
        :description="item.description"
        :path="item.path"
        :class="[this.activeContainer == index ? 'active-container' : '']"
        @click="onClick(index)"
      />
    </div>
    <div class="flex flex-row-reverse mt-3">
      <Button title="Continue" @click="this.$router.push('/design')"/>
    </div>
  </div>
</template>

<style scoped>
   .active-container{
      border: 5px solid rgb(97,165,250);
   }
</style>
