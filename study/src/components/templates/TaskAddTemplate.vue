<script>
export default {
  data() {
    return {
      customers: [
        { id: '1', customer_name: '株式会社〇〇〇〇〇〇〇〇1' },
        { id: '2', customer_name: '株式会社〇〇〇〇〇〇〇〇2' }
      ],
      terms: [
        { id: '1', term_name: '2019' },
        { id: '2', term_name: '2018' }
      ],
      orderTypes: [
        { id: '1', order_name: '未受注' },
        { id: '2', order_name: '受注済' }
      ],
      allocTypes: [
        { id: '1', alloc_name: '未割当' },
        { id: '2', alloc_name: '割当済' }
      ]
    }
  },
  methods: {
    onCancel () {
      this.$emit('cancel', true)
    },
    onSave () {
      this.$emit('save', true)
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
                      label="No."
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="terms"
                      item-text="term_name"
                      item-value="id"
                      label="年度"
                      clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="customers"
                      item-text="customer_name"
                      item-value="id"
                      label="顧客名"
                      clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="時期"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      label="案件名"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="orderTypes"
                      item-text="order_name"
                      item-value="id"
                      label="受注区分"
                      clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="allocTypes"
                      item-text="alloc_name"
                      item-value="id"
                      label="割当区分"
                      clearable
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="工数(人月)"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="配分工数(人月)"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="受注金額"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="配分受注金額"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      label="受注見込金額"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-textarea
                      label="備考"
                    ></v-textarea>
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
