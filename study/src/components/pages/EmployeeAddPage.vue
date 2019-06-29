<script>
import EmployeeAddTemplate from '@/components/templates/EmployeeAddTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { createStudyItem, updateStudyItem, deleteStudyItem } from '@/graphql/mutations'
import { getStudyItem } from '@/graphql/queries'

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
  async created () {
    if (!this.$route.params.id) {
      return
    }

    await this.loadEmployee(this.$route.params.id)
  },
  methods: {
    async loadEmployee (id) {
      const res = await API.graphql(graphqlOperation(getStudyItem, {
        id: id,
        itemType: 'employee_object'
      }))
      console.log(res)

      this.employee = JSON.parse(res.data.getStudyItem.itemValue)
    },
    async onSave (employee) {
      let createMode = false
      if (!employee.id) {
        employee.id = this.$uuid.v4()
        createMode = true
      }

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

      try {
        if (createMode) {
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeObject }))
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeNo }))
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeName }))
        } else {
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeObject }))
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeNo }))
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeName }))
        }
      } catch (e) {
        console.log(e)
        alert('保存に失敗しました。')
        return
      }

      alert('保存しました。')

      this.$router.push({ path: '/employees' })
    },
    onCancel (employee) {
      this.$router.push({ path: '/employees' })
    },
    async onDelete (employee) {
      const employeeObject = {
        id: employee.id,
        itemType: 'employee_object'
      }
      const employeeNo = {
        id: employee.id,
        itemType: 'employee_no'
      }
      const employeeName = {
        id: employee.id,
        itemType: 'employee_name'
      }

      try {
        await API.graphql(graphqlOperation(deleteStudyItem, { input: employeeObject }))
        await API.graphql(graphqlOperation(deleteStudyItem, { input: employeeNo }))
        await API.graphql(graphqlOperation(deleteStudyItem, { input: employeeName }))
      } catch (e) {
        console.log(e)
        alert('削除に失敗しました。')
        return
      }

      alert('削除しました。')

      this.$router.push({ path: '/employees' })
    }
  }
}
</script>

<template>
  <employee-add-template v-model="employee" @save="onSave" @cancel="onCancel" @delete="onDelete"></employee-add-template>
</template>
