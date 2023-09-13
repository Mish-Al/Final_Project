<template>
  <div class="home">

 
 <div class="container" style="width: 100%; margin-top: 2rem; margin-bottom: 2rem">
  <div class="card text-bg-dark" style="width: ;">
  <img src="https://i.postimg.cc/Hk9BYk5t/pexels-cottonbro-studio-6626999.jpg" 
  class="card-img" alt="n/a" style="width: 100%;">
  <div class="card-img-overlay">
    <div class="container title">
    <h1 class="card-title">Step over to the Suburban&trade; side of life</h1></div>
    <p class="card-text"><small>Explore our curated men's fashion, designed to resonate with your individuality and energy.</small></p>
    <router-link class="btn" href="../views/ProductsView.vue" style=" background-color: #212529;
  border: 2px ridge #495057;
  color: #e9ecef;">shop all</router-link>
  </div>
</div>
</div>

</div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home{
  background-color: #DEE2E6;

}
.landing{
  width: 100%;
  height: 100%
};
.card-img {
  height: 26rem;
  width: 100%;
  border-radius: 10px;
  border: 5px solid #adb5bd;
};

.card {
  border-radius: 10px;
  width: 26%;
  color: #6c757d;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.05);
  transition: 1s cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.1, 1.105, 0.295, 1.12);
  cursor: pointer;
};
.card-img-overlay h1 {
  color: #212529!important;
};
.card-img-overlay h5 {

};
.btn {
  background-color: #212529;
  border: 2px ridge #495057;
  color: #e9ecef;
  margin: 4px;
  /* width: 4rem; */
}
.btn:hover {
  background-color: #ced4da;
  color: #495057;
  border: 2px ridge #e9ecef;
}
</style>
