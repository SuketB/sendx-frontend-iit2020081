<template>
    <div class="ml-3 bg-[#FFF] p-5 rounded flex flex-col justify-center items-center w-48">
       
        <img :src="path" class="w-32"/>
        <div class="mt-4 font-medium">{{ title }}</div>
        <div class="text-center"> {{ description }} </div>
    </div>
</template>



<script>

export default{
    name: 'FormCard',
    props:{
        title: String,
        description: String,
        path: String
    },
}
</script>