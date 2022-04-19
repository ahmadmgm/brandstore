<template src="../Product-Details.html"></template>

<script>
import { eventBus } from "../../../../src/main";
export default {
  name: "ProductsDetails",
  data() {
    return {
      currentSizeIndex: 0,
      regularPrice: "",
      specialPrice: "",
    };
  },
  computed: {},
  props: {
    showpopup: Boolean,
    productData: [],
  },
  created() {},
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

    calcPricePercentageNewPrice(regularPrice, specialPrice) {
      const result = Math.round(
        ((regularPrice - specialPrice) / regularPrice) * 100
      );
      return result;
    },
    closeDialog() {
      eventBus.$emit("closeAddItemDialog", false);
    },
    selectIndexItem(index) {
      this.currentSizeIndex = index;
      let currentItemNewPriceIndex =
        this.productData.associated_products[index];
      this.regularPrice = currentItemNewPriceIndex.regular_price;
      this.specialPrice = currentItemNewPriceIndex.special_price;
      return this.currentSizeIndex;
    },
  },
};
</script>
<style src="../style/products-details.scss" lang="scss"></style>
