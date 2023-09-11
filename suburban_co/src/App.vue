<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>

import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue"; 
export default {
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: 'Cinzel', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
