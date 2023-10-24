<template>
    <div class="grid grid-cols-4 gap-4 pt-8">
        <Template v-for="(item, index) in templates" :key="index" :title="item.name" :path="item.path" @click="this.$router.push(`/content${item.path}`)" height="min-h-[16em]"/>
    </div>
</template>


<script>
    import Template from '../components/Template.vue';
    export default{
        data(){
            return {
                templates: [
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    {name: 'Modal takeover modern retro', path:'/template_html.png', orientation: 'left-center'},
                    
                ]
            }
        },
        components:{Template}
    }
</script>