<template>
    <nav id="mySidenav" class="sidenav">
      <div id="nav">
        <router-link to="/"><h3>logo</h3></router-link>
        <br/> <br/> <br/> <br/>
        <a href="#">About</a>
        <br/> <br/> <br/>  
        <a href="#">My Work</a>
        <br/> <br/> <br/>  
        <a href="#">Contact</a> 
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    .sidenav {
        height: 100%; /* 100% Full-height */
        width: 120px; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #66B8DA; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    }
    .sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
  margin: 0px;
  transition: 0.3s;
  transform: rotate(-90deg);
  font-family: "Montserrat";
}
    .navLogo {
  width: 100px;
  transform: rotate(90deg);
}
</style>