import { storiesOf } from '@storybook/vue'
import layout from '../../components/templates/StoryTemplateLayout'
import HomeTemplate from '../../components/templates/HomeTemplate.vue'

storiesOf('templates/home-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { HomeTemplate },
    template: `<home-template>Home</home-template>`
  }))
