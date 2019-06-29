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
  created: async function () {
    await this.loadEmployees()
  },
  methods: {
    loadEmployees: async function () {
      const res = await API.graphql(graphqlOperation(listStudyItemsByType, {
        itemType: 'employee_object'
      }))
      console.log(res)

      res.data.listStudyItemsByType.items.forEach(item => {
        this.employees.push(JSON.parse(item.itemValue))
      });
    }
  }
}
</script>

<template>
  <employee-list-template :employees="employees"></employee-list-template>
</template>
