<template>
  <div class="subnavigation flex flex-row justify-between items-center px-8 h-16">
    <span class="title font-bold">
      {{ activeLink }} 
    </span>
    <div class="links flex flex-row">
      <div @click="this.$router.push(item.path)" v-for="(item, index) in links" :key="index"  :class="`${item.active ? 'link-active' : ''} flex mx-3 items-center`">
       {{ item.name }}  <ChevronRightIcon class="h-4 ml-3" v-if="index != links.length-1"/>
      </div>
    </div>
  </div>
</template>


<script setup>
 import {ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>

<script >



export default {
   
  data() {
    return {
      links: [
        { name: 'Type', path: '/type', active: true },
        { name: 'Design', path: '/design', active: false },
        { name: 'Content', path: '/content', active: false },
        { name: 'Targetting', path: '/targetting', active: false },
        { name: 'Behaviour', path: '/behaviour', active: false },
        { name: 'Success', path: '/success', active: false },
      ],
      activeLink: 'Type',
    }
  },
  methods:{
    handleURLChange(linkName, path){
        console.log(linkName)
        
        this.activeLink = linkName
        this.links = this.links.map(link => {
            return link.name != linkName ? {...link, active: false} : {...link, active: true}
        })
        this.$router.push(path)
    },
   
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler(newValue, oldValue) {
        let potActive = newValue.substring(1,2).toUpperCase() + newValue.substring(2) + '/'
        let index = potActive.indexOf('/')
        
        this.handleURLChange(potActive.substring(0, index), newValue);
      },
    },
 },
  
}
</script>
