<template>
    <div class="edit-option rounded">
        <div>
            <component :is="icon"></component>
        </div>
        <div>
            {{ name }}
        </div>
    </div>
</template>

<script>
    export default{
    props:{
        icon: Object,
        name: String
    }
}
</script>

<style scoped>
 .edit-option{
    border: 1px solid rgb(196, 196, 196);
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
}
</style>