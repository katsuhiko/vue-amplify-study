import { storiesOf } from '@storybook/vue'
import layout from '../../components/templates/StoryTemplateLayout'
import EmployeeListTemplate from '../../components/templates/EmployeeListTemplate.vue'

storiesOf('templates/employee-list-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { EmployeeListTemplate },
    template: `<employee-list-template :employees="employees"></employee-list-template>`,
    data () {
      const employees = []
      for (let i = 0; i < 123; i++) {
        employees.push(
          {
            employee_no: '1234',
            employee_name: '広島太郎'
          }
        )
      }
      return {
        employees: employees
      }
    }
  }))
