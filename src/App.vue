<template>
  <div id="app">
    <nav>
      <router-link to="/">Splash2</router-link> |
      <router-link to="/esbaksplash3">Splash3</router-link> |
      <router-link to="/client1">ClientV1</router-link> |
      <router-link to="/clientorderview">ClientOrder</router-link>|
      <router-link to="/esbaksplash">Splash</router-link> |
      <router-link to="/waiterreg">waiter</router-link> |
      <router-link to="/managerdash">Dash</router-link> |
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
