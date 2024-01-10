<template>
  <div>

    <div class="mainTitle">
      <h1 class="title">Revolutionizing the Business</h1>
      <p class="subtext">Unlocking limitless digital possibilities</p>
    </div>

    <div class="image-container">
      <picture>
        <source srcset="assets/webmesh-website-mobile.png" media="(max-width: 800px)">
        <img class="centered-and-zoomed" src="assets/webmesh-website.png">
      </picture>
    </div>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body{
  background-color: #000;
  margin: 0;
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
}

.title{
  font-size: 4rem;
  color: white;
  margin: 0;
}

.subtext{
  font-size: 1.3rem;
  color: white;
}

.mainTitle{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to the full viewport height */
  overflow: hidden; /* Hide overflow to prevent scrollbars */
}

.centered-and-zoomed {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 800px) {
  .title{
    font-size: 2.5rem;
  }

  .subtext{
    font-size: 1.0rem;
  }
}

</style>