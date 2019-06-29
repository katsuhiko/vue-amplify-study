<script>
export default {
  props: {
    employees: {
      type: Array
    }
  },
  data () {
    return {
      headers: [
        { text: '社員番号', value: 'employee_no', width: '100px' },
        { text: '名前', value: 'employee_name' }
      ]
    }
  }
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout row>
        <v-flex md12>
          <v-data-table
            :headers="headers"
            :items="employees"
            class="elevation-1"
            :rows-per-page-items="[50, 100, 200]"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.employee_no }}</td>
              <td>{{ props.item.employee_name }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
</style>
