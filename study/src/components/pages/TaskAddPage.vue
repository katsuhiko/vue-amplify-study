<script>
import TaskAddTemplate from '@/components/templates/TaskAddTemplate.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { createStudyItem, updateStudyItem, deleteStudyItem } from '@/graphql/mutations'
import { getStudyItem } from '@/graphql/queries'
import { toUpdateModel, updateModel, toDeleteModel, deleteModel } from '@/graphqlUtils'

export default {
  components: {
    TaskAddTemplate
  },
  data () {
    return {
      task: {
        taskId: '',
        taskNo: '',
        taskName: '',
        taskRemarks: ''
      },
      beforeTask: {}
    }
  },
  async created () {
    if (!this.$route.params.taskId) {
      return
    }

    await this.loadTask(this.$route.params.taskId)
  },
  methods: {
    async loadTask (taskId) {
      const res = await API.graphql(graphqlOperation(getStudyItem, {
        id: taskId,
        itemType: 'taskId'
      }))
      console.log(res)

      this.beforeTask = JSON.parse(res.data.getStudyItem.itemValue)
      this.task = Object.assign(this.task, this.beforeTask)
    },
    async onSave (task) {
      if (!task.taskId) {
        task.taskId = this.$uuid.v4()
      }

      const model = toUpdateModel(task, 'taskId')
      try {
        await updateModel(model, this.beforeTask, createStudyItem, updateStudyItem)
      } catch (e) {
        console.log(e)
        alert('保存に失敗しました。')
        return
      }
      alert('保存しました。')

      this.$router.push({ path: '/tasks' })
    },
    onCancel (task) {
      this.$router.push({ path: '/tasks' })
    },
    async onDelete (task) {
      const model = toDeleteModel(task, 'taskId')
      try {
        await deleteModel(model, this.beforeTask, deleteStudyItem)
      } catch (e) {
        console.log(e)
        alert('削除に失敗しました。')
        return
      }
      alert('削除しました。')

      this.$router.push({ path: '/tasks' })
    }
  }
}
</script>

<template>
  <task-add-template v-model="task" @save="onSave" @cancel="onCancel" @delete="onDelete"></task-add-template>
</template>
