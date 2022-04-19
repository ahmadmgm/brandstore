<template src="../Products.html"></template>

<script>
import ProductsService from "../services/products.servies";
export default {
  name: "Products",
  data() {
    return {
      productData: "",
    };
  },
  props: {},
  mounted() {},
  created() {
    this.getAllProducts();
  },
  methods: {
    calcPricePercentage(prodPrice) {
      if (prodPrice.SAR.default_original == prodPrice.SAR.default) {
        return 0;
      }
      const result = Math.round(
        ((prodPrice.SAR.default_original - prodPrice.SAR.default) /
          prodPrice.SAR.default_original) *
          100
      );
      return result;
    },
    calcPriceSave(prodPrice) {
      if (prodPrice.SAR.default_original == prodPrice.SAR.default) {
        return 0;
      }
      const result = Math.round(
        prodPrice.SAR.default_original - prodPrice.SAR.default
      );
      return result;
    },
    getAllProducts() {
      ProductsService.getAllProducts().then((prodData) => {
        this.productData = prodData.data.hits;
      });
    },
  },
};
</script>

<style src="../style/products.scss" lang="scss"></style>
