<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Products msg="WELCOME COMODO" />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "../modules/products/components/Products.vue";

export default {
  name: "Home",
  components: {
    Products,
  },
};
</script>
