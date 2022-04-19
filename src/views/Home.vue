<template>
  <Products />
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
