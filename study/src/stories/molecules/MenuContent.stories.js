import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MenuContent from '../../components/molecules/MenuContent.vue'

storiesOf('molecules/menu-content', module)
  .add('メニュー', () => ({
    components: { MenuContent },
    template: `<menu-content :value="true" @input="action"></menu-content>`,
    methods: { action: action('メニュー開閉の通知です。') }
  }))
