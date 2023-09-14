<template>
  <NavbarComp />
  <router-view />
  <FooterComp/>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aleo&family=Cinzel:wght@600&family=Lora&family=Ovo&family=PT+Serif:ital@1&display=swap");
#app {
  font-family: "Aleo", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  background-color: #DEE2E6;

}
</style>
