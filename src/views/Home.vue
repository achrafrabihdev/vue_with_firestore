<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from './Posts'

export default {
  name: 'Home',
  components: {
    Posts
  }
}
</script>
