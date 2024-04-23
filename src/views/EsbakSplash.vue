<template>
    <div class="splash-screen" style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; background-color: #4a90e2;">
      <h1 style="font-size: 3rem; color: white;">{{ title }}</h1>
    </div>
  </template>
<script>
export default {
  name: 'SplashScreen',
  props: {
    title: String
  }
}
</script>

<style scoped>
  /* Scoped CSS (if needed) */
</style>
