import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '@/components/templates/StoryTemplateLayout'
import AssignmentListTemplate from '@/components/templates/AssignmentListTemplate.vue'

storiesOf('templates/assignment-list-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { AssignmentListTemplate },
    template: `<assignment-list-template :assignments="assignments" @edit="goEdit"></assignment-list-template>`,
    data () {
      const assignments = []
      for (let i = 0; i < 123; i++) {
        assignments.push(
          {
            taskId: 1000000 + i,
            taskNo: '1234',
            taskName: 'インフラ案件ABC',
            assignmentEmployeeNameCsv: '広島太郎, 広島次郎'
          }
        )
        assignments.push(
          {
            taskId: 2000000 + i,
            taskNo: '3456',
            taskName: '開発案件BCD',
            assignmentEmployeeNameCsv: '木村太郎, 佐藤次郎'
          }
        )
      }
      return {
        assignments: assignments
      }
    },
    methods: {
      goEdit: action('編集ボタンがクリックされました。')
    }
  }))
