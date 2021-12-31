<template>
  <div id="nav">
    <router-link to="/" class="txt"><h3>Beileve Clinic</h3></router-link>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Montserrat:wght@100&display=swap');


#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.txt{
  text-decoration: none;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  text-align: left;
  border: none;
  border-radius: 7px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
