<template>
    <div>
      <footer class="feet">
        <p>© Copyright {{ cYear }}</p>
        <p>Built by</p>
        <p>
          <a href="https://mishvueportfolio-f3137.web.app/#/"> Mish-Al Taliep</a>
        </p>
      </footer>
    </div>
  </template>
      
      <script>
  export default {
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
      
      <style scoped>
  .feet {
    background-color: #495057;
    text-align: center;
    color: #DEE2E6;
    margin-bottom: 0;
    width: 100%;
    position: absolute;
  }
  a {
    text-decoration: none;
    color: #DEE2E6;
  }
  a:hover {
    color: #212529;
  }
  </style>