<script>
import EmployeeListTemplate from '@/components/templates/EmployeeListTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { listStudyItemsByType } from '@/graphql/queries'

export default {
  components: {
    EmployeeListTemplate
  },
  data () {
    return {
      employees: []
    }
  },
  async created () {
    await this.loadEmployees()
  },
  methods: {
    async loadEmployees () {
      const res = await API.graphql(graphqlOperation(listStudyItemsByType, {
        itemType: 'employee_object'
      }))
      console.log(res)

      res.data.listStudyItemsByType.items.forEach(item => {
        this.employees.push(JSON.parse(item.itemValue))
      });
    },
    goAdd () {
      this.$router.push({ path: '/employee-add' })
    }
  }
}
</script>

<template>
  <employee-list-template :employees="employees" @add="goAdd"></employee-list-template>
</template>
