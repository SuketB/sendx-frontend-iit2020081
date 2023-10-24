

<template>
  
 <Header/>
 <div class="bg-[#f3f4f6] flex justify-center py-8">
   <RouterView/>
 </div>

</template>

<script>
import {  RouterView } from 'vue-router'
import Header from './components/header/Header.vue';
  export default{
    components:{Header}
  }
</script>

