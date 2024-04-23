<template>
    <div class="dot-navigation">
      <!-- Dots representing pages -->
      <div
        v-for="(dot, index) in total"
        :key="index"
        :class="{ active: index === currentPage }"
        @click="navigate(index)"
        class="dot"
      ></div>
      <!-- Arrows for navigation -->
      <button @click="prev" class="arrow">&lt;</button>
      <button @click="next" class="arrow">&gt;</button>
    </div>
  </template>
<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    navigate (index) {
      this.$emit('change', index)
    },
    prev () {
      if (this.currentPage > 0) {
        this.$emit('change', this.currentPage - 1)
      }
    },
    next () {
      if (this.currentPage < this.total - 1) {
        this.$emit('change', this.currentPage + 1)
      }
    }
  }
}
</script>
<style scoped>
.dot-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
}
.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
}
.dot.active {
    background-color: #000;
}
.arrow {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
}
</style>
