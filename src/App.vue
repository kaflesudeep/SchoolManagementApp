<template>
<div id="app">
  <vue-globalHeader id="globalheader"></vue-globalHeader>
  <div class="navlinks">
  
    <router-link to="/" class="links">Create </router-link> |
    <router-link to="/search" class="links">Search </router-link>
  </div>
  <hr>
  <router-view />

</div>
</template>

<script type="text/javascript">
import GlobalHedader from "./components/GlobalHeader.vue"



export default ({
  components: {
    'vue-globalHeader': GlobalHedader,
  },


})
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  margin: 0 auto;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navlinks {
  padding: 5px;
  height: 20px;
  text-align: right;
}

.navlinks>.links {
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  padding-right: 10px;
  width: 70px;

}

.navlinks>.links:hover {
  font-size: 1.4em;
  font-weight: bolder;




}
</style>
