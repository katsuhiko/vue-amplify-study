<template>
  <v-app>
    <header-content></header-content>
    <RouterView />
    <footer-content></footer-content>
  </v-app>
</template>

<script>
import HeaderContent from '@/components/molecules/HeaderContent.vue'
import FooterContent from '@/components/molecules/FooterContent.vue'

export default {
  name: 'App',
  components: {
    HeaderContent,
    FooterContent
  },
  data () {
    return {
      drawer: false
    }
  },
  created () {
    // root はレイアウト表示のみなので、ホームへ飛ばす
    if (this.$route.path === '/') {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
