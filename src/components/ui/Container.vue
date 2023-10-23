<template>
 <div class="container">
    <slot></slot>
 </div>
</template>

<script>
export default {
 name: 'Container',
};
</script>

<style scoped>
.container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
}
</style>