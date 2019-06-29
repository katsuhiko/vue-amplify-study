<script>
export default {
  data () {
    return {
      authConfig: {
        signInConfig: {
          isSignUpDisplayed : false
        }
      }
    }
  }
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
      </v-layout>
    </v-container>
  </v-content>
</template>
