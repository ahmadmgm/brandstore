<template src="../Products.html"></template>

<script>
import ProductsService from "../services/products.servies";
import { eventBus } from "../../../../src/main";
import PopupDialog from "../../popup-dialog/components/popup-dialog.vue";
export default {
  name: "Products",
  data() {
    return {
      productData: "",
      showPopup: false,
      productName: "",
    };
  },

  created() {
    this.getAllProducts();
    eventBus.$on("closeDialog", (data) => {
      this.showPopup = data;
    });
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
    showNotifyMePopup(productName) {
      this.showPopup = true;
      this.productName = productName;
    },
  },
  components: {
    PopupDialog,
  },
};
</script>

<style src="../style/products.scss" lang="scss"></style>
