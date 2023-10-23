<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/Header.vue';
</script>

<template>
  
 <Header/>
 <div class="bg-[#f3f4f6] h-full flex  justify-center pb-8">
   <RouterView/>
 </div>

</template>

<style scoped>

</style>
