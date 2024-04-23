<template>
    <header class="header">
      <div class="logo-container">
        <img src="../assets/img/logoblack.jpg" alt="Logo" class="logo">
      </div>
      <div class="button-container">
        <button class="button" @click="handleGetStartedClick">Get Started</button>
      </div>
    </header>
    <h1 class="main-title">Welcome To Esbak Kitchen</h1>
    <section class="about-content-container">
      <div class="container">
        <div class="about-image-container">
          <img src="../assets/img/about.png" alt="Kitchen">
        </div>
      </div>
      <div class="text-container"> <!-- New container for text block -->
        <div class="text-block">
          <h4 class="about-header">Who Are We?</h4>
          <p class="about-text">
            Esbak kitchen, one of the few luxurious but affordable restaurants permanently based in Sunyani.
            We have some of the best delicacies in Ghana Sunyani, thus we can proudly say we are one of the best
            restaurants found in Sunyani, Ghana. We also provide the best customer services you can ever imagine.
          </p>
        </div>
      </div>
    </section>
    <div class="review-title-container">
      <h2 class="reviews-title">Some Of Our Customer’s Reviews</h2>
    </div>
    <section class="reviews-section">
      <!-- Repeat this block for each review -->
      <div class="review-card1-container ">
        <div class="review1-image-container">
          <img src="../assets/img/foodgirl.jpeg" alt="Review" class="review-image1">
        </div>
          <div class="review-content1">
            <h3 class="reviewer-name">Jane McHownds</h3>
            <p class="review-text">I love the ambiance. Beautiful interior and exterior.Customer service was excellent as the waitress attended to us swiftly. Food is affordable too. I had a great time! Will definitely recommend for anyone visiting Sunyani for the first time.</p>
          </div>
      </div>
      <!-- End of first review-->
      <div class="review-card2-container ">
        <div class="review2-content">
          <h3 class="reviewer-name">Jane McHownds</h3>
          <p class="review-text">I love the ambiance. Beautiful interior and exterior.Customer service was excellent as the waitress attended to us swiftly. Food is affordable too. I had a great time! Will definitely recommend for anyone visiting Sunyani for the first time.</p>
        </div>
        <div class="review2-image-container">
          <img src="../assets/img/foodgirl2.jpeg" alt="Review" class="review-image2">
        </div>
      </div>
      <div class="review-card3-container ">
        <div class="review3-image-container">
          <img src="../assets/img/foodgirl.jpeg" alt="Review" class="review-image1">
        </div>
          <div class="review3-content">
            <h3 class="reviewer-name">Jane McHownds</h3>
            <p class="review-text">I love the ambiance. Beautiful interior and exterior.Customer service was excellent as the waitress attended to us swiftly. Food is affordable too. I had a great time! Will definitely recommend for anyone visiting Sunyani for the first time.</p>
          </div>
      </div>
    </section>
    <div class="developer-section-title-container">
      <h2 class="developer-section-title">The Developers</h2>
      <hr class="developer-section-line" />
    </div>
    <section class="developer-section">
      <div class="frontend-devs">
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Biala.jpg" alt="Developer">
          <h3 class="developer1-name">Biala Koomson Benjamin</h3>
          <p class="developer1-role">Frontend Developer</p>
        </div>
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Owusu Duku Emmanuel.jpg" alt="Developer">
          <h3 class="developer1-name">Owusu Duku Emmanuel</h3>
          <p class="developer1-role">Frontend Developer</p>
        </div>
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/franz1.jpg" alt="Developer">
          <h3 class="developer1-name">Franz-James</h3>
          <p class="developer1-role">Frontend Developer</p>
        </div>
      </div>
      <div class="backend-devs">
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/franz1.jpg" alt="Developer">
          <h3 class="developer1-name">Franz-James</h3>
          <p class="developer1-role">Backend Developer</p>
        </div>
       <div class="developer-profile1-container">
        <img class="developer1-image" src="../assets/img/ASARE ASAMOAH KWADWO.jpg" alt="Developer">
        <h3 class="developer1-name">Asare Asamoah Kwadwo</h3>
        <p class="developer1-role">Backend Developer</p>
       </div>
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Tachie-Martin Samuel.jpg" alt="Developer">
          <h3 class="developer1-name">Tachie-Martin Samuel</h3>
          <p class="developer1-role">Backend Developer</p>
        </div>
      </div>
      <div class="project-managers">
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Owusu Dominic.jpg" alt="Developer">
          <h3 class="developer1-name">Owusu Dominic</h3>
          <p class="developer1-role">Project Manager</p>
        </div>
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Opoku Martin.jpg" alt="Developer">
          <h3 class="developer1-name">Opoku Martin</h3>
          <p class="developer1-role">Project Manager</p>
        </div>
      </div>
      <div class="ui-dev">
        <div class="developer-profile1-container">
          <img class="developer1-image" src="../assets/img/Evelyn karikari.jpg" alt="Developer">
          <h3 class="developer1-name">Evelyn karikari</h3>
          <p class="developer1-role">UI/Ux Developer</p>
      </div>
      <div class="developer-profile1-container">
        <img class="developer1-image" src="../assets/img/Gyimah Kennedy Lino.jpg" alt="Developer">
        <h3 class="developer1-name">Lino Kennedy</h3>
        <p class="developer1-role">UI/Ux Developer</p>
      </div>
    </div>

    </section>
  </template>
<script>

export default {
  name: 'SplashView2',
  methods: {
    handleGetStartedClick () {
      this.$router.push({ name: 'esbaksplash3' })
    // Implement your logic here
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  /* style.scss */
  $primary-color: #ffffff; // This is a Tailwind CSS color 'red-700'
  $secondary-color: #FFB4A8; // This is a Tailwind CSS color 'orange-200'
  $button-color: #f59e0b; // This is a Tailwind CSS color 'yellow-500'
  $border-radius: 2rem;
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: black;
  }
   .app-container {
    background-color: $primary-color;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  .button-container{
    margin-left: auto; // Pushes the button to the right
    margin-right: 2rem;
  }
  .button {
    background-color: $button-color;
    color: white;
    padding: 10px 20px;
    border-radius: 9999px;
    margin-left: 30px;
    margin-right: 10rem;
    cursor: pointer;
    &:hover {
      background-color: darken($button-color, 10%);
    }
  }
  .main-title{
    color: black;
    padding: 40px;
  }
  .section {
    padding: 5rem; // Increased padding
    margin-bottom: 2.5rem; // Added bottom margin
  }
  .container {
    display: flex;
    flex-wrap: wrap; // Permit the container to wrap if needed when the image is enlarged
    justify-content: center;
    align-items: flex-end;
    position: relative;
    padding: 5rem;
  }
  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px; // Add some top and bottom margin for spacing
  }
  .text-block {
    flex-basis: 20%;
    right: 20px;
    background-color: rgba(255, 180, 168, 1);
    color: black;
    padding: 1.5rem; // Padding inside the text block
    line-height: 2.0; // Increased line-height for better readability
    width: 30%; // Adjusted width to balance image and text block
    height: 30%;
    border-radius: 1.5rem;
    font-size: 1em;
    position: absolute; // Position absolutely within the container, which is relative
    max-width: 100%; // Maximum width, adjust as needed
    padding: 1em; // Padding inside the text block
    transform: scale(1.3);
    right: 20%;
    bottom:-280px;
    }
  .about-header{
    color: black
  }
  .about-section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 40px 0;
  }
  .about-image {
    width: 100%;
    display: block; // Ensures no extra space below image
  }
  .about-content-container {
    width: 50%; // Adjust as needed for the width of the content
    border-radius: $border-radius;
    padding-left: 1.5rem; // Adjust the padding as needed
    margin: 40px 0;
  }
  .about-image-container {
    flex: 2;
    position: relative; // Set to relative for shadow
    border-radius: $border-radius;
    overflow: hidden;
    transform: scale(1.5);
    flex-basis: 80%;
    width: 30%; // Adjust as needed
    max-width: none;
    height: auto;
    border-radius: $border-radius;
    overflow: hidden;
    margin: 0 auto;
  }
  .about-image-container img {
    width: 100%;
    display: block; // Ensures no extra space below image
    border-radius: inherit; // Ensures the image also inherits the border radius
    margin-left: 80px;
  }
  .sub-title {
    font-size: 24px; // Adjust the font size as needed
    font-weight: bold;
  }
  .about-description {
    font-size: 16px; // Adjust the font size as needed
    margin-top: 15px;
  }
  .main-title {
    margin: 40px 0;
    font-size: 36px;
    font-weight: bold;
  }
  .content-box {
    background-color: $secondary-color;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    max-width: 640px;
    margin: auto;
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.1);
  }
  .content-box .sub-title {
    font-size: 24px;
    font-weight: semibold;
    margin-bottom: 20px;
  }
  .content-box p {
    font-size: 18px;
  }
  .reviews-section {
    padding-bottom: 4rem; // Example space to add between reviews and footer
    gap: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .review-title-container{
    display: flex;
    right: -20px;
    bottom: 50px;
  }
  .reviews-title{
    color: black;
    font-size:36px;
    padding:70px
  }
  .review-card1-container{
    display: flex; // This will align image and content side by side
    align-items: center; // This will vertically align image and content
    gap: 0; // This adds space between the image and the content
    margin-bottom: 2rem; // Space between the review cards
    flex-direction: row;
    justify-content: space-between;
    margin-right: 60px;
  }
  .review-card2-container{
    display: flex; // This will align image and content side by side
    align-items: center; // This will vertically align image and content
    margin-bottom: 2rem; // Space between the review cards
    flex-direction: row;
    justify-content: space-between;
    gap:0;
    margin-left: 100px;
  }
  .review-card3-container{
    display: flex; // This will align image and content side by side
    align-items: center; // This will vertically align image and content
    gap: 0; // This adds space between the image and the content
    margin-bottom: 2rem; // Space between the review cards
    flex-direction: row;
    justify-content: space-between;
    margin-right: 60px;
  }
  .review-content1{
    order: 1;
    flex-basis: auto;
    background-color:rgba(255, 180, 168, 1);
    color: black;
    padding: 1.5rem; // Padding inside the text block
    line-height: 1.6; // Increased line-height for better readability
    width: 20%; // Adjusted width to balance image and text block
    border-radius: 1.5rem;
    font-size: 1.3em;
    flex-grow: 10;
    display: flex;
    flex-direction: column;
    margin-left: 20rem;
  }
      .reviewer-name {
      font-size: 2em; // Example size, adjust accordingly
      color:black;
    }
    .review-text {
      font-size: 1em; // Example size, adjust accordingly
      color:black;
    }
  .review1-image-container{
    order: 2;
    flex: 50;
    position: relative; // Set to relative for shadow
    border-radius: $border-radius;
    overflow: hidden;
    flex-basis: 1;
    width: 80%; // Adjust as needed
    max-width: none;
    height: auto;
    border-radius: $border-radius;
    overflow: hidden;
    margin-left: -5rem;
    margin-right: 0;
  }
  .review-image1{
    width:75%;
    height: auto;
    object-fit: cover;
    border-radius: $border-radius; // Keeps the images circular
  }
  .review2-content{
    order: 2;
    flex-basis: 20%;
    background-color:rgba(255, 180, 168, 1);
    color: black;
    padding: 1.5rem; // Padding inside the text block
    line-height: 1.6; // Increased line-height for better readability
    width: auto; // Adjusted width to balance image and text block
    border-radius: 1.5rem;
    font-size: 1.3em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: -15rem;
    margin-right: 20rem;
  }
  .review2-image-container{
    order: 1;
    flex: 2;
    position: relative; // Set to relative for shadow
    border-radius: $border-radius;
    overflow: hidden;
    flex-basis: 50%;
    width: 20%; // Adjust as needed
    max-width: none;
    height: auto;
    border-radius: $border-radius;
    overflow: hidden;
    margin-right: 0;
    margin-left: -20rem;
  }
  .review-image2{
    width:60%;
    height: auto;
    object-fit: cover;
    border-radius: $border-radius;
  }
  .review3-content{
    order: 1;
    flex-basis: auto;
    background-color:rgba(255, 180, 168, 1);
    color: black;
    padding: 1.5rem; // Padding inside the text block
    line-height: 1.6; // Increased line-height for better readability
    width: 20%; // Adjusted width to balance image and text block
    border-radius: 1.5rem;
    font-size: 1.3em;
    flex-grow: 10;
    display: flex;
    flex-direction: column;
    margin-left: 20rem;
  }
  .review3-image-container{
    order: 2;
    flex: 50;
    position: relative; // Set to relative for shadow
    border-radius: $border-radius;
    overflow: hidden;
    flex-basis: 1;
    width: 80%; // Adjust as needed
    max-width: none;
    height: auto;
    border-radius: $border-radius;
    overflow: hidden;
    margin-left: -5rem;
    margin-right: 0;
  }
  .role-title {
    font-size: 18px;
    font-weight: bold;
  }
  .developer-section-title-container {
    text-align: center;
    margin-top: 4rem;
    position: relative;
  }
  .developer-section-title {
    font-size: 2.5rem;
    color: black;
    margin-bottom: 0.5rem; // Set space above the line
  }
  .developer-section-line {
    border: 0;
    height: 2px;
    background-color: black;
    margin: auto; // Centers the line
    width: 100%; // Line runs across the screen
  }
  .developer-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  .developer-profile1-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .developer1-image {
    border-radius: 50%; // Makes the image circular
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 1em;
  }
  .developer1-name {
    font-size: 1.5em;
    color: black;
    margin-bottom: 0.5em;
  }
  .developer1-role {
    font-size: 1em;
    color: #666;
  }
.frontend-devs{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 2rem;
  margin-right: 15rem;
  margin-top: 10rem;
}
.backend-devs{
  display: flex !important; // Use !important to override other styles if necessary
  flex-direction: column !important;
  align-items: center;
  gap: 7rem;
  margin-bottom: 2rem;
  margin-right: 15rem;
  margin-top: 10rem;
}
.project-managers{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 2rem;
  margin-right: 10rem;
  margin-top: -10rem;
}
.ui-dev{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 13rem;
  margin-top: -1rem;
}
</style>
