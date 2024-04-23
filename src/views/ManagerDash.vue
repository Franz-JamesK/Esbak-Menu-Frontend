<template>
    <div class="dashboard-layout">

        <!-- Sidebar -->
        <aside class="sidebar">
            <h1 class="sidebar-header">Welcome, Mr. Kaba</h1>
            <ul class="sidebar-menu">
                <li><button class="sidebar-item active">Dashboard</button></li>
                <li><button class="sidebar-item">Staff</button></li>
                <li><button class="sidebar-item">Food Menu</button></li>
                <li><button class="sidebar-item">View Feedback</button></li>
            </ul>
        </aside>

        <!-- Content -->
        <section class="content">
            <header class="content-header">
                <h1 class="content-title">Dashboard</h1>
                <img src="../assets/img/logoblack.jpg" alt="Esbak Kitchen" class="logo">
            </header>
            <div class="most-reviewed">
                <!-- Card components here -->
            </div>
            <div class="worker-stats">
                <h2 class="stats-title">Worker’s Statistic</h2>
                <div class="chart-placeholder"></div>
                <div class="stats-info">
                    <span>Total servings <strong>70</strong></span>
                    <span>Total workers <strong>5</strong></span>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  name: 'ManagerDash'
  // Define data, methods, etc.
}
</script>

<style scoped>
.dashboard-layout {
    display: flex;
    height: 100vh;
    background-color: #F3F4F6;
}

.sidebar {
    width: 20%;
    background-color: #AF2F21;;
    /* Adjusted from screenshot: red */
    padding: 1.25rem;
    color: white;
}

.sidebar-header {
    font-weight: bold;
    margin-bottom: 2.5rem;
}

.sidebar-menu {
    list-style: none;
    padding: 0;
}

.sidebar-item {
    background: transparent;
    border: none;
    color: inherit;
    padding: 0.75rem 1.25rem;
    text-align: left;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: rgba(255, 255, 255, 0.2);
}

.content {
    width: 80%;
    padding: 1.25rem;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.content-title {
    font-weight: bold;
    font-size: 1.25rem;
    /* Approximation from the screenshot */
}

.logo {
    height: 2.5rem;
    /* Adjust according to your logo's aspect ratio */
}

/* Add styles for .most-reviewed and .worker-stats here */

/* Your additional styles */
</style>
