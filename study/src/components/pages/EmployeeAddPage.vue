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
        employeeNo: '',
        employeeName: '',
        employeeRemarks: ''
      },
      beforeEmployee: {}
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
        itemType: 'employeeObject'
      }))
      console.log(res)

      this.beforeEmployee = JSON.parse(res.data.getStudyItem.itemValue)
      this.employee = Object.assign(this.employee, this.beforeEmployee)
    },
    async onSave (employee) {
      if (!employee.id) {
        employee.id = this.$uuid.v4()
      }

      const employeeObject = {
        id: employee.id,
        itemType: 'employeeObject',
        itemValue: JSON.stringify(employee)
      }
      const employeeNo = {
        id: employee.id,
        itemType: 'employeeNo',
        itemValue: employee.employeeNo
      }
      const employeeName = {
        id: employee.id,
        itemType: 'employeeName',
        itemValue: employee.employeeName
      }
      const employeeRemarks = {
        id: employee.id,
        itemType: 'employeeRemarks',
        itemValue: !employee.employeeRemarks ? ' ' : employee.employeeRemarks
      }

      try {
        if ('id' in this.beforeEmployee) {
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeObject }))
        } else {
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeObject }))
        }
        if ('employeeNo' in this.beforeEmployee) {
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeNo }))
        } else {
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeNo }))
        }
        if ('employeeName' in this.beforeEmployee) {
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeName }))
        } else {
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeName }))
        }
        if ('employeeRemarks' in this.beforeEmployee) {
          await API.graphql(graphqlOperation(updateStudyItem, { input: employeeRemarks }))
        } else {
          await API.graphql(graphqlOperation(createStudyItem, { input: employeeRemarks }))
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
        itemType: 'employeeObject'
      }
      const employeeNo = {
        id: employee.id,
        itemType: 'employeeNo'
      }
      const employeeName = {
        id: employee.id,
        itemType: 'employeeName'
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
