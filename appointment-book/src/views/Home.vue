<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:300px">
    <Maintxt msg="Are you looking for a great therapist?"/>
    <router-link to="/List"><Bookbtn/></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Maintxt from '@/components/Maintxt.vue'
import Bookbtn from '@/components/Bookbtn.vue'

export default {
  name: 'Home',
  components: {
    Maintxt,
    Bookbtn
  }
}
</script>
