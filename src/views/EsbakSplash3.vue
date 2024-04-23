<template>
  <div class="view-selector-container">
    <header class="header">
      <img src="../assets/img/logowhite.jpg" alt="Logo" class="logo">
    </header>
    <div class="content-box">
      <h1 class="title">What Will You Want To See?</h1>
      <button class="button" @click="selectView('customers')">Customers' Views</button>
      <button class="button" @click="selectView('waiters')">Waiters' Views</button>
      <button class="button" @click="selectView('managers')">Manager's Views</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EsbakSplash3',
  methods: {
    selectView (viewName) {
      if (viewName === 'customers') {
        this.$router.push({ name: 'clientorderview' })
      } else if (viewName === 'waiters') {
        this.$router.push({ name: 'waiterlog' }) // push to waiterlog.vue
      } else if (viewName === 'managers') {
        this.$router.push({ name: 'waiterreg' }) // push to waiterreg.vue
      } else {
        console.log(`${viewName} Views Selected`)
        // Handle any other view selections here
      }
    }
  }
}
</script>
<style lang="scss">
$primary-color: #AF2F21;
$button-color: #c9c619;

/* You can include your SASS file or write SASS code here */
.view-selector-container {
  background-color: $primary-color;
  color: #690000;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content-box {
    background-color: #8D150B;
    max-width: 500px;
    text-align: center;
  }

  .title {
    color: #fff;
    margin: 20px 0;
    font-size: 2rem;
  }

  .button {
    background-color: $button-color;
    color: #0b0b0b;
    padding: 20px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 5000px;
    cursor: pointer;
    display: block;
    font-weight: bold;
    width: 100%;

    &:hover {
      background-color: darken($button-color, 10%);
    }
  }
}
</style>
