<template>
  <div class="min-w-[14em] m-5">
    <div :class="`bg-[#fff] rounded ${height ? height : ''}`" >
      <div class="dots">
        <HorizontalDots class="ml-1" />
      </div>
        
      <div>
        <img :src="path" />
      </div>
    </div>
    <div class="font-medium mt-2">{{ title }}</div>
  </div>
</template>

<script>
import HorizontalDots from './icons/HorizontalDots.vue'
export default {
  props: {
    path: String,
    title: String,
    height: String
  },
  components: { HorizontalDots },
}
</script>

<style scoped>
  .dots{
    border-bottom: 1px solid rgb(235, 231, 231);
  }
</style>
