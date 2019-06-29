<script>
import EmployeeAddTemplate from '@/components/templates/EmployeeAddTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { createStudyItem } from '@/graphql/mutations'

export default {
  components: {
    EmployeeAddTemplate
  },
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
    onCancel (employee) {
      this.$router.push({ path: '/employee-list' })
    },
    async onSave (employee) {
      employee.id = this.$uuid.v4()
      const employeeObject = {
        id: employee.id,
        itemType: 'employee_object',
        itemValue: JSON.stringify(employee)
      }
      const employeeNo = {
        id: employee.id,
        itemType: 'employee_no',
        itemValue: employee.employee_no
      }
      const employeeName = {
        id: employee.id,
        itemType: 'employee_name',
        itemValue: employee.employee_name
      }
      await API.graphql(graphqlOperation(createStudyItem, { input: employeeObject }))
      await API.graphql(graphqlOperation(createStudyItem, { input: employeeNo }))
      await API.graphql(graphqlOperation(createStudyItem, { input: employeeName }))

      alert('登録しました。')

      this.$router.push({ path: '/employee-list' })
    }
  }
}
</script>

<template>
  <employee-add-template v-model="employee" @save="onSave" @cancel="onCancel"></employee-add-template>
</template>
