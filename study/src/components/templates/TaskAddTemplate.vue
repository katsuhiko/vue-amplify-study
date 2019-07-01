<script>
export default {
  props: ['value'],
  data () {
    return {
    }
  },
  methods: {
    isUpdateMode () {
      return !!this.value.taskId
    },
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
                <v-toolbar-title>案件情報</v-toolbar-title>
              </v-toolbar>

              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="案件No."
                      v-model="value.taskNo"
                      maxlength="10"
                      counter="10"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="案件名"
                      v-model="value.taskName"
                      maxlength="50"
                      counter="50"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-textarea
                      label="備考"
                      v-model="value.taskRemarks"
                      maxlength="250"
                      counter="250"
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout wrap>
                  <v-flex xs12 sm4 md4 lg3 xl3 v-if="isUpdateMode()">
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
