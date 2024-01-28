<template>
  <metainfo>
    <template v-slot:meta="{ content }">{{ content }}</template>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <div id="app" class="container">

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <router-view :key="$route.fullPath"></router-view>
    <NavbarFooter/>
    
   
  </div>
</template>

<script lang="javascript">

import {onMounted, } from 'vue';
import { useMeta } from 'vue-meta'
;

export default {
  name: 'App',
  components: {
    NavbarFooter: () => import('./components/NavBarFooter.vue'),
  }, 
  setup() {
    onMounted(() => {
      var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
      for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
        sidebarSensitiveDivs[i].addEventListener('click', function(event) {
          console.log('sidebar-sensitive click event', event);
        });
      }
    })
    useMeta({
      title: 'The Smart Device Dashboard POC',
      meta: [
        {
          name: 'description',
          content: 'A proof of concept for a smart device dashboard'
        },
        {
          name: 'keywords',
          content: 'HTML5, Vue, Bulma, User Interface, template, front end'
        }
      ]
    })

  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
