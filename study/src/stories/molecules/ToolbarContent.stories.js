import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ToolbarContent from '@/components/molecules/ToolbarContent.vue'

storiesOf('molecules/toolbar-content', module)
  .add('ツールバー', () => ({
    components: { ToolbarContent },
    template: `<toolbar-content @input="action"></toolbar-content>`,
    methods: { action: action('メニュー表示アイコンがクリックされました。') }
  }))
