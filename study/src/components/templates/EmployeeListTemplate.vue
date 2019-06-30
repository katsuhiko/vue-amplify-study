<script>
export default {
  props: {
    employees: {
      type: Array
    }
  },
  data () {
    return {
      selected: null,
      search: '',
      headers: [
        { text: '', value: 'select', width: '50px', sortable: false },
        { text: '社員番号', value: 'employee_no', width: '100px' },
        { text: '名前', value: 'employee_name', width: '200px' },
        { text: '備考', value: 'employee_remarks' }
      ]
    }
  },
  methods: {
    isActiveRow (employee) {
      if (!this.selected) {
        return false
      }

      return this.selected.id === employee.id
    },
    selectRow (employee) {
      if (this.selected && this.selected.id === employee.id) {
        this.selected = null
      } else {
        this.selected = employee
      }
    },
    goAdd (e) {
      this.$emit('add', {})
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
              <v-toolbar-title>社員情報</v-toolbar-title>
            </v-toolbar>

            <v-container fluid grid-list-md>
              <v-layout wrap>
                <v-flex xs5 sm4 md2 lg2 xl1>
                  <v-btn @click="goAdd" block><v-icon left>add</v-icon>新規登録</v-btn>
                </v-flex>
                <v-flex xs5 sm4 md2 lg2 xl1>
                  <v-btn @click="goEdit" block><v-icon left>edit</v-icon>編集</v-btn>
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
              :items="employees"
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
                  <td class="text-xs-center">{{ props.item.employee_no }}</td>
                  <td>{{ props.item.employee_name }}</td>
                  <td>{{ props.item.employee_remarks }}</td>
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
