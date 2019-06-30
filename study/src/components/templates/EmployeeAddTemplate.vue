<script>
export default {
  props: ['value'],
  data () {
    return {
    }
  },
  methods: {
    onSave (e) {
      this.$emit('save', this.value)
    },
    onCancel (e) {
      this.$emit('cancel', this.value)
    },
    onDelete (e) {
      if (!confirm('削除します。')) {
        return
      }

      this.$emit('delete', this.value)
    }
  }
}
</script>

<template>
  <v-content>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm12 md10 lg8 xl8>
          <v-form>
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>社員情報</v-toolbar-title>
              </v-toolbar>

              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="社員番号"
                      v-model="value.employeeNo"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="名前"
                      v-model="value.employeeName"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-textarea
                      label="備考"
                      v-model="value.employeeRemarks"
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout wrap>
                  <v-flex xs12 sm4 md4 lg3 xl3 v-if="!!value.employeeId">
                    <v-btn @click="onDelete" block><v-icon left>remove</v-icon>削除</v-btn>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm4 md4 lg3 xl3>
                    <v-btn @click="onCancel" block><v-icon left>close</v-icon>キャンセル</v-btn>
                  </v-flex>
                  <v-flex xs12 sm4 md4 lg3 xl3>
                    <v-btn @click="onSave" color="primary" block><v-icon left>check</v-icon>保存</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
</style>
