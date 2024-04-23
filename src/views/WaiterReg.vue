<template>
  <div class="registration-container">
    <div class="card">
      <div class="card-header">
        <img src="../assets/img/logoblack.jpg" alt="Esback Kitchen" class="logo" />
        <h1 class="title">Esback Kitchen</h1>
      </div>
      <div class="form-container">
        <input type="text" placeholder="Enter Your Name" class="input-field" />
        <input type="password" placeholder="Enter A New Password" class="input-field" />
        <input type="password" placeholder="Confirm The Password" class="input-field" />
        <button type="submit" class="submit-button">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ... component properties ...

  methods: {
    goToManagerDash () {
      this.$router.push({ name: 'ManagerDash' })
    }
  }
}
</script>

<style scoped>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
}

.card {
  background-color: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 40rem;
  height: 42rem;
  max-width: 250rem;
  margin: auto;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
}

.card-header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
}

.logo {
  margin-bottom: 1rem;
  height: 6rem;
  /* Tailwind h-24 equivalent */
}

.title {
  font-size: 1.5rem;
  /* Tailwind text-2xl equivalent */
  color: #dc2626;
  /* Tailwind text-red-600 equivalent */
  font-weight: 600;
  /* Tailwind font-semibold equivalent */
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* Tailwind space-y-6 equivalent */
}

.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  /* Tailwind px-4 py-3 equivalent */
  border: 1px solid #d1d5db;
  /* Tailwind border-gray-300 equivalent */
  border-radius: 0.5rem;
  /* Tailwind rounded-lg equivalent */
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 0.2s, box-shadow 0.2s;
}

.input-field:focus {
  outline-color: #facc15;
  /* Tailwind ring-yellow-500 equivalent */
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1rem;
  color: white;
  background-color: #f59e0b;
  /* Tailwind bg-yellow-500 equivalent */
  border-radius: 0.5rem;
  transition: background-color 0.3s, transform 0.3s;
}

.submit-button:hover {
  background-color: #eab308;
  /* Tailwind bg-yellow-600 equivalent */
  transform: scale(1.05);
}
</style>
