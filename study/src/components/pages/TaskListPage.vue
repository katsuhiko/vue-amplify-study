<script>
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { listStudyItemsByType } from '@/graphql/queries'

export default {
  components: {
    TaskListTemplate
  },
  data () {
    return {
      tasks: []
    }
  },
  async created () {
    await this.loadTasks()
  },
  methods: {
    async loadTasks () {
      const res = await API.graphql(graphqlOperation(listStudyItemsByType, {
        itemType: 'taskId'
      }))
      console.log(res)

      res.data.listStudyItemsByType.items.forEach(item => {
        this.tasks.push(JSON.parse(item.itemValue))
      })
    },
    goAdd () {
      this.$router.push({ path: '/tasks/add' })
    },
    goEdit (task) {
      this.$router.push({ path: '/tasks/' + task.taskId })
    }
  }
}
</script>

<template>
  <task-list-template :tasks="tasks" @add="goAdd" @edit="goEdit"></task-list-template>
</template>
