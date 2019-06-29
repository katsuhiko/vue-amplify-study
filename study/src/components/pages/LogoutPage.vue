<script>
export default {
  data () {
    return {
      signOutConfig: {
        signOutButton: 'ログアウト'
      }
    }
  }
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <amplify-sign-out :signOutConfig="signOutConfig"></amplify-sign-out>
      </v-layout>
    </v-container>
  </v-content>
</template>
