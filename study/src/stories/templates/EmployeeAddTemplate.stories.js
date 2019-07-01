import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import layout from '@/components/templates/StoryTemplateLayout'
import EmployeeAddTemplate from '@/components/templates/EmployeeAddTemplate.vue'

storiesOf('templates/employee-add-template', module)
  .addDecorator(layout)
  .add('テンプレート登録', () => ({
    components: { EmployeeAddTemplate },
    template: `<employee-add-template v-model="employee" @save="onSave" @cancel="onCancel" @delete="onDelete"></employee-add-template>`,
    data () {
      return {
        employee: {
          employeeId: '',
          employeeNo: '',
          employeeName: '',
          employeeRemarks: ''
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
          employeeId: 'EMP1',
          employeeNo: '1234',
          employeeName: '広島太郎',
          employeeRemarks: '備考です。'
        }
      }
    },
    methods: {
      onSave: action('保存ボタンがクリックされました。'),
      onCancel: action('キャンセルボタンがクリックされました。'),
      onDelete: action('削除ボタンがクリックされました。')
    }
  }))
