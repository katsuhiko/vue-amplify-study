<script>
export default {
  // see: https://qiita.com/clomie/items/7a69ee850a304595142e#valueとinputによる実装
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    notify (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<template>
  <v-navigation-drawer
    :value="value"
    @input="notify($event)"
    fixed
    temporary
    app
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-title>
          <v-list-tile-content>
            <v-list-tile-title>メニュー</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-divider></v-divider>
      <v-list-tile to="/home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ホーム</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/employees">
        <v-list-tile-action>
          <v-icon>face</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>社員情報</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/about">
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/logout">
        <v-list-tile-action>
          <v-icon>cloud_off</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ログアウト</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>
