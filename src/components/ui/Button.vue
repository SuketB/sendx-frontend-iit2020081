<template>
    <button class="button">
    <span class="button-content">{{ title }} </span>
</button>
</template>

<script>
 export default{
    props:{
        title: String
    }
 }
</script>

<style>

.button {
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 0.6rem;
  background: #fff;
  background-size: 400%;
  color: #000;
  border: 1px solid rgb(150, 150, 150);
}

.button:hover::before {
  transform: scaleX(1);
  color: #fff;
}

.button-content {
  position: relative;
  z-index: 1;
  
}


.button:hover{
  color: white !important;
}
.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: #1f3a8a;
  color: white !important;
  transition: all 0.475s;
}
</style>