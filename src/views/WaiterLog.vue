<template>
    <div class="login-container">
        <div class="login-card">
            <div class="card-header">
                <img src="../assets/img/logoblack.jpg" alt="Esback Kitchen" class="logo-img"/>
                <h1 class="card-title">Esback Kitchen</h1>
            </div>
            <div class="card-body">
                <input type="text" placeholder="Enter Your Name" class="input-field" />
                <input type="password" placeholder="Enter A New Password" class="input-field" />
                <button type="submit" class="submit-button">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginCard'
  // ... You can add your data properties and methods here
}
</script>

<style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #F3F4F6; /* bg-gray-200 */
}

.login-card  {
    background-color: white;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 40rem;
    height: 30rem;
    max-width: 250rem;
    margin: auto;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
  }

.logo-img {
    margin-bottom: 1rem;
    height: 6rem; /* Tailwind h-24 equivalent */
  }

.card-title {
    color: #DC2626; /* text-red-600 */
    font-size: 1.875rem; /* text-3xl */
    font-weight: 700; /* font-bold */
    margin-top: 0.5rem;
}

.card-body {
    display: grid;
    gap: 1rem;
}

.input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #E2E2E2;
    border-radius: 0.5rem; /* rounded-md */
    outline: none;
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #C4C4C4;
}

.submit-button {
    width: 100%;
    padding: 0.5rem 0;
    background-color: #F59E0B; /* bg-yellow-500 */
    color: #FFFFFF; /* text-white */
    font-weight: 600; /* font-semibold */
    border-radius: 0.375rem; /* rounded-md */

}

.submit-button:hover {
    background-color: #D97706; /* hover:bg-yellow-600 */
}
</style>
