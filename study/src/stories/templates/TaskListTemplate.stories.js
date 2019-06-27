import { storiesOf } from '@storybook/vue'
import layout from '../../components/templates/StoryTemplateLayout'
import TaskListTemplate from '../../components/templates/TaskListTemplate.vue'

storiesOf('templates/task-list-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { TaskListTemplate },
    template: `<task-list-template :tasks="tasks"></task-list-template>`,
    data () {
      const tasks = []
      for (let i = 0; i < 1000; i++) {
        tasks.push(
          {
            task_no: '1-1',
            customer_name: '株式会社〇〇〇〇〇〇〇〇',
            task_name: '〇〇〇〇〇〇〇〇システム開発',
            order_type_name: '受注済',
            alloc_type_name: '割当済',
            task_period: '4月〜12月末',
            task_moon: 9999,
            alloc_task_moon: 9999,
            order_amount: 99999999,
            alloc_order_amount: 99999999,
            est_order_amount: 99999999,
            actual_amount: 99999999,
            out_amount: 99999999,
            profit_amount: 99999999,
            est_profit_amount: 99999999,
            remarks: 'メモをここに残す。'
          }
        )
      }
      return {
        tasks: tasks
      }
    }
  }))
