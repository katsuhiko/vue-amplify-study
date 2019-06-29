import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '../../components/templates/StoryTemplateLayout'
import EmployeeListTemplate from '../../components/templates/EmployeeListTemplate.vue'

storiesOf('templates/employee-list-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { EmployeeListTemplate },
    template: `<employee-list-template :employees="employees" @add="goAdd" @edit="goEdit"></employee-list-template>`,
    data () {
      const employees = []
      for (let i = 0; i < 123; i++) {
        employees.push(
          {
            id: 1000000 + i,
            employee_no: '1234',
            employee_name: '広島太郎'
          }
        )
        employees.push(
          {
            id: 2000000 + i,
            employee_no: '3456',
            employee_name: 'テスト次郎'
          }
        )
      }
      return {
        employees: employees
      }
    },
    methods: {
      goAdd: action('登録ボタンがクリックされました。'),
      goEdit: action('編集ボタンがクリックされました。')
    }
  }))
