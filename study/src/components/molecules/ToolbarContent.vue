<script>
export default {
  methods: {
    onOpen () {
      this.$emit('input', true)
    }
  }
}
</script>

<template>
  <v-toolbar dark fixed app>
    <v-toolbar-side-icon @click.stop="onOpen"></v-toolbar-side-icon>
    <v-toolbar-title>StudyApps</v-toolbar-title>
  </v-toolbar>
</template>

<style scoped>
</style>
