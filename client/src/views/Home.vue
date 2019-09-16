<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '../components/HomeComponent'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
