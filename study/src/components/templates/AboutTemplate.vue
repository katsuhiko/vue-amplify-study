<script>
export default {
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <span><slot /></span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
</style>
