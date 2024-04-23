<template>
  <div class="esbak-container">
    <div class="esbak-logo">
      <img src="../assets/img/logowhite.jpg" alt="Logo" class="logo">
    </div>
    <h1 class="esbak-welcome">{{ welcomeText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EsbakKitchenWelcome',
  props: {
    welcomeText: {
      type: String,
      default: 'Welcome To Esbak Kitchen'
    }
  }
}
</script>

<style lang="scss" scoped>
.esbak-container {
  background-color: #AF2F21;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  .esbak-logo {
    margin-bottom: 3rem;
  }

  h1.esbak-welcome {
    font-size: 2.5rem;
    margin: 0;
    font-weight: bold;
  }
}

</style>
