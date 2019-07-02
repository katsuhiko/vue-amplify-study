<script>
export default {
  props: {
    assignments: {
      type: Array
    }
  },
  data () {
    return {
      selected: null,
      search: '',
      headers: [
        { text: '', value: 'select', width: '50px', sortable: false },
        { text: '案件No.', value: 'taskNo', width: '100px' },
        { text: '案件名', value: 'taskName', width: '300px' },
        { text: '割当社員', value: 'assignmentEmployeeNameCsv' }
      ]
    }
  },
  methods: {
    isActiveRow (task) {
      if (!this.selected) {
        return false
      }

      return this.selected.taskId === task.taskId
    },
    selectRow (task) {
      if (this.selected && this.selected.taskId === task.taskId) {
        this.selected = null
      } else {
        this.selected = task
      }
    },
    goEdit (e) {
      if (!this.selected) {
        alert('行を選択してください。')
        return
      }

      this.$emit('edit', this.selected)
    }
  }
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout row>
        <v-flex md12>
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>割当情報</v-toolbar-title>
            </v-toolbar>

            <v-container fluid grid-list-md>
              <v-layout wrap>
                <v-flex xs5 sm4 md2 lg2 xl1>
                  <v-btn @click="goEdit" block><v-icon left>edit</v-icon>割当</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm12 md6 lg4 xl4>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="ワード検索"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>

            <v-data-table
              :headers="headers"
              :items="assignments"
              :search="search"
              class="elevation-1"
              :rows-per-page-items="[50, 100, 200]"
            >
              <template v-slot:items="props">
                <tr :active="isActiveRow(props.item)" @click="selectRow(props.item)">
                  <td>
                    <v-checkbox
                      :input-value="isActiveRow(props.item)"
                      color="primary"
                      hide-details
                    ></v-checkbox>
                  </td>
                  <td class="text-xs-center">{{ props.item.taskNo }}</td>
                  <td>{{ props.item.taskName }}</td>
                  <td>{{ props.item.assignmentEmployeeNameCsv }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
</style>
