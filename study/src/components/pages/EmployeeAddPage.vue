<script>
import EmployeeAddTemplate from '@/components/templates/EmployeeAddTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { createStudyItem, updateStudyItem, deleteStudyItem } from '@/graphql/mutations'
import { getStudyItem } from '@/graphql/queries'
import { toUpdateModel, updateModel, toDeleteModel, deleteModel } from '@/graphqlUtils'

export default {
  components: {
    EmployeeAddTemplate
  },
  data () {
    return {
      employee: {
        employeeId: '',
        employeeNo: '',
        employeeName: '',
        employeeRemarks: ''
      },
      beforeEmployee: {}
    }
  },
  async created () {
    if (!this.$route.params.employeeId) {
      return
    }

    await this.loadEmployee(this.$route.params.employeeId)
  },
  methods: {
    async loadEmployee (employeeId) {
      const res = await API.graphql(graphqlOperation(getStudyItem, {
        id: employeeId,
        itemType: 'employeeId'
      }))
      console.log(res)

      this.beforeEmployee = JSON.parse(res.data.getStudyItem.itemValue)
      this.employee = Object.assign(this.employee, this.beforeEmployee)
    },
    async onSave (employee) {
      if (!employee.employeeId) {
        employee.employeeId = this.$uuid.v4()
      }

      const model = toUpdateModel(employee, 'employeeId')
      try {
        await updateModel(model, this.beforeEmployee, createStudyItem, updateStudyItem)
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
      const model = toDeleteModel(employee, 'employeeId')
      try {
        await deleteModel(model, this.beforeEmployee, deleteStudyItem)
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
