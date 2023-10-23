<template>
  <div class="w-[100%] flex flex-row">
    <div class="basis-3/4 flex flex-col items-center pt-8">
      <div class="flex">
        <DesktopIcon class="mr-4" />
        <MobileIcon />
      </div>
      <div class="w-[90%]">
        <Template :path="`/${this.$route.params.img}`" height="min-h-[35em]" />
      </div>

      <div>
        <Button title="Popup" class="mr-3" />
        <Button title="Success" />
      </div>
    </div>
    <div class="basis-1/4 flex flex-col items-center px-3 edit-options-panel">
      <div class="w-[95%] pt-8">
        <AppAccordian class="mb-4" v-for="(item, index) in accordians"
          :key="index">
        
          <template v-slot:title>
            <span class="font-semibold text-xl">{{  item.title}} </span>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-4 gap-2">
                <EditOption  v-for="(icon, index) in item.content" :key="index" :name="icon.name" :icon="icon.icon"/>
            </div>       
          </template>
        </AppAccordian>
       
      </div>
    </div>
  </div>
</template>

<script>
import Template from '../components/Template.vue'
import DesktopIcon from '../components/icons/DesktopIcon.vue'
import MobileIcon from '../components/icons/MobileIcon.vue'
import Button from '../components/ui/Button.vue'
import AppAccordian from '../components/ui/AppAccordian.vue'
import EditOption from '../components/EditOption.vue'
import MenuIcon from '../components/icons/MenuIcon.vue'
import TextIcon from '../components/icons/TextIcon.vue'
import TitleIcon from '../components/icons/TitleIcon.vue'
import ImageIcon from '../components/icons/ImageIcon.vue'
import ButtonIcon from '../components/icons/ButtonIcon.vue'
import DividerIcon from '../components/icons/DividerIcon.vue'
import VideoIcon from '../components/icons/VideoIcon.vue'
import StarIcon from '../components/icons/StarIcon.vue'
import GifIcon from '../components/icons/GifIcon.vue'
import PlusIcon from '../components/icons/PlusIcon.vue'
import Htmlcon from '../components/icons/Htmlcon.vue'
import StickerIcon from '../components/icons/StickerIcon.vue'


export default {
  components: {
    Template,
    DesktopIcon,
    MobileIcon,
    Button,
    AppAccordian,
    EditOption,
    MenuIcon,
    TitleIcon,
    TextIcon,
    ImageIcon,
    ButtonIcon,
    DividerIcon,
    PlusIcon,
    Htmlcon,
    VideoIcon,
    StarIcon,
    StickerIcon,
    GifIcon
  },
  data() {
    return {
      accordians: [
        {
          title: 'Content',
          content:[
            { name: 'TITLE', icon: TitleIcon },
            { name: 'TEXT', icon: TextIcon },
            { name: 'IMAGE', icon: ImageIcon  },
            { name: 'BUTTON', icon: ButtonIcon  },
            { name: 'DIVIDER', icon: DividerIcon  },
            { name: 'SOCIAL', icon: PlusIcon  },
            { name: 'HTML', icon: Htmlcon  },
            { name: 'VIDEO', icon: VideoIcon  },
            { name: 'ICONS', icon: StarIcon  },
            { name: 'MENU', icon: MenuIcon  },
            { name: 'STICKERS', icon: StickerIcon  },
            { name: 'GIFS', icon: GifIcon  },
          ]
        },
        { title: 'Position', content: [] },
        { title: 'Animation', content: [] },
      ],
    }
  },
}
</script>

<style>
.edit-options-panel{
    border-left: 1px solid rgb(204, 201, 201);
}
</style>