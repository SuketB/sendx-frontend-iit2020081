<template>
  <!-- <div class="w-[100%] flex flex-row"> -->
  <!-- <div class="basis-3/4 flex flex-col items-center pt-8">
      <div class="flex">
        <DesktopIcon class="mr-4" />
        <MobileIcon />
      </div>
      <div class="w-[90%]">
       
       
      </div>

      <div>
        <Button title="Popup" class="mr-3" />
        <Button title="Success" />
      </div>
    </div>
    <div class="basis-1/4 flex flex-col edit-options-panel">
      <div class="pt-8">
        <div
          v-for="(item, index) in accordians"
          :key="index"
          class="accordian p-2"
        >
          <AppAccordian>
            <template v-slot:title>
              <span class="font-semibold text-xl">{{ item.title }} </span>
            </template>
            <template v-slot:content>
              <div class="grid grid-cols-4 gap-2">
                <EditOption
                  v-for="(icon, index) in item.content"
                  :key="index"
                  :name="icon.name"
                  :icon="icon.icon"
                />
              </div>
            </template>
          </AppAccordian>
        </div>
      </div>
    </div> -->
  <div id="example">
    <div class="flex flex-col h-[100%]">
      <EmailEditor
        ref="emailEditor"
        v-on:load="editorLoaded"
        v-on:ready="editorReady"
       
        

      
      />
      <div class="flex justify-center mt-3">
        <Button title="Export HTML" @click="exportHtml"/>
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
import { EmailEditor } from 'vue-email-editor'

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
    GifIcon,
    EmailEditor,
  },
  data() {
    return {
      accordians: [
        {
          title: 'Content',
          content: [
            { name: 'TITLE', icon: TitleIcon },
            { name: 'TEXT', icon: TextIcon },
            { name: 'IMAGE', icon: ImageIcon },
            { name: 'BUTTON', icon: ButtonIcon },
            { name: 'DIVIDER', icon: DividerIcon },
            { name: 'SOCIAL', icon: PlusIcon },
            { name: 'HTML', icon: Htmlcon },
            { name: 'VIDEO', icon: VideoIcon },
            { name: 'ICONS', icon: StarIcon },
            { name: 'MENU', icon: MenuIcon },
            { name: 'STICKERS', icon: StickerIcon },
            { name: 'GIFS', icon: GifIcon },
          ],
        },
        { title: 'Position', content: [] },
        { title: 'Animation', content: [] },
      ],
    }
  },
  methods: {
    editorLoaded() {
      var tempDesign = {
        counters: {
          u_row: 1,
          u_column: 1,
          u_content_text: 2,
        },
        body: {
          rows: [
            {
              cells: [1],
              columns: [
                {
                  contents: [
                    {
                      type: "text",
                      values: {
                        containerPadding: "10px",
                        textAlign: "center",
                        lineHeight: "140%",
                        linkStyle: {
                          inherit: true,
                          linkColor: "#0000ee",
                          linkHoverColor: "#0000ee",
                          linkUnderline: true,
                          linkHoverUnderline: true,
                        },
                        _meta: {
                          htmlID: "u_content_text_2",
                          htmlClassNames: "u_content_text",
                        },
                        selectable: true,
                        draggable: true,
                        duplicatable: true,
                        deletable: true,
                        hideable: true,
                        text:
                          `
<!-- Free to use, HTML email template designed & built by FullSphere. Learn more about us at www.fullsphere.co.uk -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

    <!-- Your title goes here -->
    <title>Newsletter</title>
    <!-- End title -->

    <!-- Start stylesheet -->
    <style type="text/css">
      a,a[href],a:hover, a:link, a:visited {
        /* This is the link colour */
        text-decoration: none!important;
        color: #0000EE;
      }
      .link {
        text-decoration: underline!important;
      }
      p, p:visited {
        /* Fallback paragraph style */
        font-size:15px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:300;
        text-decoration:none;
        color: #000000;
      }
      h1 {
        /* Fallback heading style */
        font-size:22px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:normal;
        text-decoration:none;
        color: #000000;
      }
      .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
      .ExternalClass {width: 100%;}
    </style>
    <!-- End stylesheet -->

</head>

  <!-- You can change background colour here -->
  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <!-- Fallback force center content -->
  <div style="text-align: center;">

    
    
    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">

            <!-- Your logo is here -->
            <img style="width: 180px; max-width: 180px; height: 85px; max-height: 85px; text-align: center; color: #ffffff;" alt="Logo" src="https://fullsphere.co.uk/misc/free-template/images/logo-white-background.jpg" align="center" width="180" height="85">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Hero image -->
    <img style="width: 600px; max-width: 600px; height: 350px; max-height: 350px; text-align: center;" alt="Hero image" src="https://fullsphere.co.uk/misc/free-template/images/hero.jpg" align="center" width="600" height="350">
    <!-- Hero image -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">

              <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">Single column, dolor sit amet</h1>

              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis ante sed imperdiet euismod. Vivamus fermentum bibendum turpis, et tempor dui. Sed vitae lectus egestas, finibus purus ac, rutrum mauris.</p>              

              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">You can download this template <a target="_blank" style="text-decoration: underline; color: #000000;" href="https://fullsphere.co.uk/misc/free-template/html-email-template.zip" download="HTML Email Template"><u>here</u></a></p>

              <!-- Start button (You can change the background colour by the hex code below) -->
              <a href="#" target="_blank" style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                  <!--[if mso]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                <![endif]-->

                  <span style="mso-text-raise: 15pt; color: #ffffff;">Learn more</span>
                  <!--[if mso]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                <![endif]-->
              </a>
              <!-- End button here -->

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->

  
  </div>

  </body>

</html>`,
                      },
                    },
                  ],
                  values: {
                    _meta: {
                      htmlID: "u_column_1",
                      htmlClassNames: "u_column",
                    },
                    border: {},
                    padding: "0px",
                    backgroundColor: "",
                  },
                },
              ],
              values: {
                displayCondition: null,
                columns: false,
                backgroundColor: "",
                columnsBackgroundColor: "",
                backgroundImage: {
                  url: "",
                  fullWidth: true,
                  repeat: false,
                  center: true,
                  cover: false,
                },
                padding: "0px",
                hideDesktop: false,
                _meta: {
                  htmlID: "u_row_1",
                  htmlClassNames: "u_row",
                },
                selectable: true,
                draggable: true,
                duplicatable: true,
                deletable: true,
                hideable: true,
              },
            },
          ],
          values: {
            textColor: "#000000",
            backgroundColor: "#e7e7e7",
            backgroundImage: {
              url: "",
              fullWidth: true,
              repeat: false,
              center: true,
              cover: false,
            },
            contentWidth: "800px",
            contentAlign: "center",
            fontFamily: {
              label: "Arial",
              value: "arial,helvetica,sans-serif",
            },
            preheaderText: "",
            linkStyle: {
              body: true,
              linkColor: "#e67e23",
              linkHoverColor: "#0000ee",
              linkUnderline: true,
              linkHoverUnderline: true,
              inherit: false,
            },
            _meta: {
              htmlID: "u_body",
              htmlClassNames: "u_body",
            },
          },
        },
        schemaVersion: 6,
      }; // Pass your template JSON here
      this.$refs.emailEditor.editor.loadDesign(tempDesign);
    },
    // called when the editor has finished loading
    editorReady() {
      console.log('editorReady')
    },
    
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        this.$store.dispatch('updateHtmlAction', data)
        this.$router.push('/behaviour')
      })
    },
  },
}
</script>

<style>
.edit-options-panel {
  border-left: 1px solid #e8dede;
}
.accordian {
  border-bottom: 1px solid #e8dede;
}
</style>
