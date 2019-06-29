<script>
import EmployeeAddTemplate from '../templates/EmployeeAddTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { createStudyItem } from '../../graphql/mutations'

export default {
  components: {
    EmployeeAddTemplate
  },
  data () {
    return {
      employee: {
        employee_no: '',
        employee_name: ''
      }
    }
  },
  methods: {
    onCancel (employee) {
      console.log(employee)
    },
    async onSave (employee) {
      console.log('onSave')
      console.log(employee)
      console.log(employee.employee_no)

      const id = this.$uuid.v4()
      const employeeNo = {
        id: id,
        itemType: 'employee_no',
        itemValue: employee.employee_no
      }
      const employeeName = {
        id: id,
        itemType: 'employee_name',
        itemValue: employee.employee_name
      }
      await API.graphql(graphqlOperation(createStudyItem, { input: employeeNo }))
      await API.graphql(graphqlOperation(createStudyItem, { input: employeeName }))
      alert('登録しました。')
    }
  }
}
</script>

<template>
  <employee-add-template v-model="employee" @save="onSave" @cancel="onCancel"></employee-add-template>
</template>
