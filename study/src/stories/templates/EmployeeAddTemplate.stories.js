import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '../../components/templates/StoryTemplateLayout'
import EmployeeAddTemplate from '../../components/templates/EmployeeAddTemplate.vue'

storiesOf('templates/employee-add-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { EmployeeAddTemplate },
    template: `<employee-add-template v-model="employee" @save="onSave" @cancel="onCancel" @delete="onDelete"></employee-add-template>`,
    data () {
      return {
        employee: {
          id: '',
          employee_no: '',
          employee_name: ''
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
    components: { EmployeeAddTemplate },
    template: `<employee-add-template v-model="employee" @save="onSave" @cancel="onCancel" @delete="onDelete"></employee-add-template>`,
    data () {
      return {
        employee: {
          id: 'EMP1',
          employee_no: '1234',
          employee_name: '広島太郎'
        }
      }
    },
    methods: {
      onSave: action('保存ボタンがクリックされました。'),
      onCancel: action('キャンセルボタンがクリックされました。'),
      onDelete: action('削除ボタンがクリックされました。')
    }
  }))
