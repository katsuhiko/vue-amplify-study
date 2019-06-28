<script>
export default {
  props: ['value'],
  data () {
    return {
    }
  },
  methods: {
    onCancel (e) {
      this.$emit('cancel', this.value)
    },
    onSave (e) {
      this.$emit('save', this.value)
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
                <v-toolbar-title>社員情報登録</v-toolbar-title>
              </v-toolbar>

              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="社員番号"
                      v-model="value.employee_no"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="名前"
                      v-model="value.employee_name"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout wrap>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm4 md4 lg3 xl3>
                    <v-btn @click="onCancel" dark block><v-icon dark left>remove_circle</v-icon>キャンセル</v-btn>
                  </v-flex>
                  <v-flex xs12 sm4 md4 lg3 xl3>
                    <v-btn @click="onSave" color="primary" dark block><v-icon dark left>check_circle</v-icon>保存</v-btn>
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
