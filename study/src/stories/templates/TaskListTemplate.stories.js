import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '../../components/templates/StoryTemplateLayout'
import TaskListTemplate from '../../components/templates/TaskListTemplate.vue'

storiesOf('templates/task-list-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { TaskListTemplate },
    template: `<task-list-template :tasks="tasks" @add="goAdd" @edit="goEdit"></task-list-template>`,
    data () {
      const tasks = []
      for (let i = 0; i < 123; i++) {
        tasks.push(
          {
            taskId: 1000000 + i,
            taskNo: '1234',
            taskName: 'インフラ案件ABC',
            taskRemarks: '備考です。'
          }
        )
        tasks.push(
          {
            taskId: 2000000 + i,
            taskNo: '3456',
            taskName: '開発案件BCD',
            taskRemarks: 'サンプルです。'
          }
        )
      }
      return {
        tasks: tasks
      }
    },
    methods: {
      goAdd: action('登録ボタンがクリックされました。'),
      goEdit: action('編集ボタンがクリックされました。')
    }
  }))
