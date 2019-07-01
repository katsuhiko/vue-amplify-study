import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '../../components/templates/StoryTemplateLayout'
import TaskAddTemplate from '../../components/templates/TaskAddTemplate.vue'

storiesOf('templates/task-add-template', module)
  .addDecorator(layout)
  .add('テンプレート登録', () => ({
    components: { TaskAddTemplate },
    template: `<task-add-template v-model="task" @save="onSave" @cancel="onCancel" @delete="onDelete"></task-add-template>`,
    data () {
      return {
        task: {
          taskId: '',
          taskNo: '',
          taskName: '',
          taskRemarks: ''
        }
      }
    },
    methods: {
      onSave: action('保存ボタンがクリックされました。'),
      onCancel: action('キャンセルボタンがクリックされました。'),
      onDelete: action('削除ボタンがクリックされました。')
    }
  }))
  .add('テンプレート編集', () => ({
    components: { TaskAddTemplate },
    template: `<task-add-template v-model="task" @save="onSave" @cancel="onCancel" @delete="onDelete"></task-add-template>`,
    data () {
      return {
        task: {
          taskId: 'TASK01',
          taskNo: '1-1',
          taskName: 'AWS案件',
          taskRemarks: 'ネットワーク込み'
        }
      }
    },
    methods: {
      onSave: action('保存ボタンがクリックされました。'),
      onCancel: action('キャンセルボタンがクリックされました。'),
      onDelete: action('削除ボタンがクリックされました。')
    }
  }))
