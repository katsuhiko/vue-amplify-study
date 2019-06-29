import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '../../components/templates/StoryTemplateLayout'
import EmployeeAddTemplate from '../../components/templates/EmployeeAddTemplate.vue'

storiesOf('templates/employee-add-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { EmployeeAddTemplate },
    template: `<employee-add-template v-model="employee" @save="onSave" @cancel="onCancel"></employee-add-template>`,
    data () {
      return {
        employee: {
          employee_no: '',
          employee_name: ''
        }
      }
    },
    methods: {
      onSave: action('保存ボタンがクリックされました。'),
      onCancel: action('キャンセルボタンがクリックされました。')
    }
  }))
