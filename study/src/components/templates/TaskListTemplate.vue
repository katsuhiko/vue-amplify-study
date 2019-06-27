<script>
import { moneyFormat, moonFormat } from '../../filters.js'

export default {
  props: {
    tasks: {
      type: Array
    }
  },
  data () {
    return {
      headers: [
        { text: 'No.', value: 'task_no' },
        { text: '顧客名　　　　　　　　　', value: 'customer_name' },
        { text: '案件名　　　　　　　　　', value: 'task_name' },
        { text: '受注区分', value: 'order_type_name' },
        { text: '割当区分', value: 'alloc_type_name' },
        { text: '時期　　　　', value: 'task_period' },
        { text: '工数(人月)', value: 'task_moon' },
        { text: '割当工数(人月)', value: 'alloc_task_moon' },
        { text: '受注額', value: 'order_amount' },
        { text: '割当受注額', value: 'alloc_order_amount' },
        { text: '割当受注見込額', value: 'est_order_amount' },
        { text: '実績額', value: 'actual_amount' },
        { text: '外注費', value: 'out_amount' },
        { text: '利益', value: 'profit_amount' },
        { text: '見込利益', value: 'est_profit_amount' },
        { text: '備考　　　　　　　　　　　　　　　　　　　　', value: 'remarks' }
      ]
    }
  },
  filters: {
    moneyFormat, moonFormat
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
            :items="tasks"
            class="elevation-1"
            :rows-per-page-items="[50, 100, 200]"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.task_no }}</td>
              <td>{{ props.item.customer_name }}</td>
              <td>{{ props.item.task_name }}</td>
              <td class="text-xs-center">{{ props.item.order_type_name }}</td>
              <td class="text-xs-center">{{ props.item.alloc_type_name }}</td>
              <td>{{ props.item.task_period }}</td>
              <td class="text-xs-right">{{ props.item.task_moon | moonFormat }}</td>
              <td class="text-xs-right">{{ props.item.alloc_task_moon | moonFormat }}</td>
              <td class="text-xs-right">{{ props.item.order_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.alloc_order_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.est_order_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.actual_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.out_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.profit_amount | moneyFormat }}</td>
              <td class="text-xs-right">{{ props.item.est_profit_amount | moneyFormat }}</td>
              <td>{{ props.item.remarks }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
</style>
