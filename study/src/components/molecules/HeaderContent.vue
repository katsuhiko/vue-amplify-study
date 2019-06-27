<script>
import ToolbarContent from './ToolbarContent.vue'
import MenuContent from './MenuContent.vue'

export default {
  data () {
    return {
      drawer: false
    }
  },
  components: {
    ToolbarContent,
    MenuContent
  }
}
</script>

<template>
  <div>
    <menu-content v-model="drawer"></menu-content>
    <toolbar-content v-model="drawer"></toolbar-content>
  </div>
</template>

<style scoped>
</style>
