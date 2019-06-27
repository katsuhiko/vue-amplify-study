import { storiesOf } from '@storybook/vue'
import FooterContent from '../../components/molecules/FooterContent.vue'

storiesOf('molecules/footer-content', module)
  .add('フッター', () => ({
    components: { FooterContent },
    template: `<footer-content></footer-content>`
  }))
