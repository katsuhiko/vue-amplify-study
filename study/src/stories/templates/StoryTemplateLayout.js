import HeaderContent from '@/components/molecules/HeaderContent.vue'
import FooterContent from '@/components/molecules/FooterContent.vue'

const layout = (() => ({
  components: { HeaderContent, FooterContent },
  template: "<v-app><header-content></header-content><story/><footer-content></footer-content></v-app>"
}))

export default layout
