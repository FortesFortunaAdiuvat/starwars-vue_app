<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3> {{title}} </h3>
    <!-- The below will show the text and append the path to the URL defind with to="" -->
    <h4><router-link class="link" to="/data/people">Meet the Characters</router-link> | <router-link class="link" to="/data/planets">Explore The Planets</router-link></h4>
    <router-view></router-view> <!-- this will be the place the navigation links are actually rendered -->
    <!-- <Character
      v-for="(id,index) in initial_ids"
      :id="id"
      key="index"
     /> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Character from './components/Character.vue'
export default {
  name: 'app',
  data() {
    return {
      title: 'StarWars API Interface',
      initial_ids: [1,13,14]
    }
  },
  components: {
    //HelloWorld
    //Character
  }
}
</script>

