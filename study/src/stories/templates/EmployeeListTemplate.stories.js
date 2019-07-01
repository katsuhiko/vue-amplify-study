import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '@/components/templates/StoryTemplateLayout'
import EmployeeListTemplate from '@/components/templates/EmployeeListTemplate.vue'

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
            employeeId: 1000000 + i,
            employeeNo: '1234',
            employeeName: '広島太郎',
            employeeRemarks: '備考です。'
          }
        )
        employees.push(
          {
            employeeId: 2000000 + i,
            employeeNo: '3456',
            employeeName: 'テスト次郎',
            employeeRemarks: 'サンプルです。'
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
