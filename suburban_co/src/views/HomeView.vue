<template>
  <div class="home">

 
 <div class="landing">
 <div class="card card-upper">
  <img src="https://i.postimg.cc/Hk9BYk5t/pexels-cottonbro-studio-6626999.jpg" id="landing"
 alt="">
 <div class="card-img-overlay mt-5">
  <h1>Welcome To Suburban Co.</h1>
     <a href="./AboutView.vue" class="btn upper">About Suburban Co.</a>
  </div>
</div>
</div>
</div>
 <div class="up-left">
 <div class="card">
  <img src="https://i.postimg.cc/QtdXjq7r/download-1.jpg" id="sneaker" class="card-img" alt="sneaker">
  <div class="card-img-overlay">
    <a href="./ProductsView.vue" class="btn">Visit Sneakers</a>
  </div>
</div>
<div class="up-left-content">
  <h3>Check out our latest line of your favourite sneakers</h3>
</div>
</div>

<div class="mid-right">
 <div class="card">
  <img src="https://i.postimg.cc/VNzFW08Z/pexels-sindre-fs-1040945.jpg" id="sneaker" class="card-img" alt="sneaker">
  <div class="card-img-overlay">
    <a href="./ProductsView.vue" class="btn">Visit Upper Wear</a>
  </div>
</div>
</div>


<div class="low-left">
 <div class="card">
  <img src="https://i.postimg.cc/J0tyrMWQ/STUDIO-ZERO-JEANS-DENIM-HERITAGE-INDIGO-Photo.jpg" id="sneaker" class="card-img" alt="sneaker">
  <div class="card-img-overlay">
    <a href="./ProductsView.vue" class="btn">Visit Lower Wear</a>
  </div>
</div>
</div>
<!-- </div> -->
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
#landing{
  width: 100%;
  height: 100%
}
.card-upper{
  height: 100%;
  width: 100%!important;
}
.card-upper:hover{
  transform: scale(1.01) !important;
  opacity: 1 !important;
}
.card-img-overlay-upper {
  /* color: #; */
  backdrop-filter: blur(4px);
}

.up-left{
  padding-left: 10rem;
  margin-top: 3rem;
  border: 4px solid green;
}
.up-left-content{
  display: flex;
  justify-content: right  ;
}

.mid-right{
  border: 4px solid red;
  display: flex;
  justify-content: right;
  padding-right: 10rem;

}

.low-left{
  border: 4px solid red;
  padding-left: 10rem;

}
.card-img {
  height: 26rem;
  width: 100%;
  border-radius: 10px;
  border: 5px solid #adb5bd;
}

.card {
  border-radius: 10px;
  width: 26%;
  color: #6c757d;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.05);
  transition: 1s cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.1, 1.105, 0.295, 1.12);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
  opacity: 0.7;
}

.card-img-overlay {
  /* color: #; */
  backdrop-filter: blur(1px);
}
.card-img-overlay h1 {
  color: #212529!important;
}
.card-img-overlay h5 {

}
.btn {
  color: #adb5bd;
  border: 3px solid #adb5bd;
  margin-top: 15rem;
}
.upper {
  color: #adb5bd;
  border: 3px solid #adb5bd;
}

.upper:hover{
  background-color: #495057;

}


.btn:hover{
  background-color: #495057;
}
</style>
