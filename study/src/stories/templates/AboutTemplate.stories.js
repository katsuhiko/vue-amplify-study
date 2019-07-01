import { storiesOf } from '@storybook/vue'
import layout from '@/components/templates/StoryTemplateLayout'
import AboutTemplate from '@/components/templates/AboutTemplate.vue'

storiesOf('templates/about-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { AboutTemplate },
    template: `<about-template>About</about-template>`
  }))
