<template>
  <div class="dishes-container">
    <header class="header">
      <div class="logo-container">
        <img src="../assets/img/logowhite.jpg" alt="Logo" class="logo">
        <div class="logo-text">Try out our recommended dishes</div>
      </div>
      <section class="recommendation">
        <div class="dish-card">
          <img src="../assets/img/dessert.jpg" alt="Name of Dish" class="dish-image" />
          <div class="dish-details">
            <h3>Exotic Noodles</h3>
            <div class="rating">★★★★★</div>
          </div>
        </div>
      </section>
      <div class="orders">
        <button class="button" @click="handleGetStartedClick">Orders</button>
      </div>
  </header>
    <section class="dishes-list">
      <h2>Dishes</h2>
      <div class="dish-item">
        <img src="../assets/img/lunch 4.jpg" alt="Name of the Dishes" class="dish-thumbnail" />
        <div class="dish-info">
          <h3>Beef Burger and Salted Potato Fries</h3>
          <div class="servings">
            <span>Servings</span>
            <input type="number" min="0" />
          </div>
          <div class="price">$50</div>
          <button class="add-to-order">Add To Order</button>
        </div>
      </div>
    </section>
    <section class="drinks-list">
      <h2>Drinks</h2>
      <div class="dish-item">
        <img src="../assets/img/juice.jpg" alt="Name of the Dishes" class="dish-thumbnail" />
        <div class="dish-info">
          <h3>Cocktail</h3>
          <div class="servings">
            <span>Servings</span>
            <input type="number" min="0" />
          </div>
          <div class="price">$50</div>
          <button class="add-to-order">Add To Order</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DishesComponent',
  methods: {
    handleGetStartedClick () {
      // Implement your logic here
    }
  }
}
</script>

<style lang="scss" scoped>
.dishes-container {
  background-color: #fff;
  color: #333;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;

  header.header {
    background-color: #AF2F21;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    flex-direction: column;

    .logo-container {
      display: flex;
      align-items: center;

      .logo {
        width: 70px;
        height: auto;
      }
      .logo-text {
        width: 80rem;
        font-size: xxx-large;
        font-weight: bold;
      }
    }

    .orders {
      display: flex;
      align-items: center;

      .orders-icon {
        margin-left: 0.5rem;
        width: 20px;
        height: auto;
      }
    }
  }

  .recommendation {
    display: flex;
    justify-content: center;
    align-items: center;

    .dish-card {
      background-color: #f8f8f8;
      flex-basis: auto;
      width: 30rem; // Adjusted width to balance image and text block
      border-radius: 1.5rem;
      font-size: 1.3em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 1rem auto; /* Centers the card in the available space */
      object-fit: cover;
    }

      .dish-image {
        width: 45%;
        height: auto;
        border-radius: 6rem;
        margin: 0; // Set margin to 0 to eliminate any default margins
        padding-top: 2rem;
      }
      .dish-details {
        h3 {
          color: black;
          margin-top: 5rem;
        }
      }
    }
  }

  .dishes-list {
    padding: 1rem;

    .dish-item {
      background-color: #f8f8f8;
      width: 50rem;
      height: auto;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 10px;
      display: flex;
      margin-left: 5rem;
    }

      .dish-thumbnail {
        width: 60%;
        height: auto;
        border-radius: 5rem;
        margin-right: 1rem;
      }

      .dish-info {
        flex-grow: 2;

        h3 {
          margin: 0;
        }

        .servings {
          display: flex;
          align-items: center;
          margin-top: 3rem;

          input {
            margin-left: 1rem;
            width: 50px;
          }
        }
        .price {
          font-weight: bold;
          margin-left: 3rem;
          margin-top: -1rem
        }
        .add-to-order {
          background-color: #e2a03f;
          border: none;
          margin-top: 8rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }

  .drinks-list {
    padding: 1rem;

    .dish-item {
      background-color: #f8f8f8;
      width: 50%;
      height: auto;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 10px;
      display: flex;
      margin-left: 5rem;

      .dish-thumbnail {
        width: 40%;
        height: auto;
        border-radius: 5rem;
        margin-right: 1rem;
      }

      .dish-info {
        flex-grow: 1;

        h3 {
          margin: 0;
        }

        .servings {
          display: flex;
          align-items: center;
          margin-top: 5rem;
          margin-left: 2rem;

          input {
            margin-left: 0.5rem;
            width: 50px;
          }
        }
        .price {
          font-weight: bold;
          margin-top:-1rem;
          margin-left:-5rem
        }
        .add-to-order {
          background-color: #e2a03f;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: #fff;
          font-weight: bold;
          margin-top: 10rem;
          cursor: pointer;
        }
      }
    }
  }
</style>
