<template src="../Products.html"></template>

<script>
import ProductsService from "../services/products.servies";
import { eventBus } from "../../../../src/main";
import PopupDialog from "../../popup-dialog/components/popup-dialog.vue";
import ProductsDetails from "../../products-details/components/Products-Details.vue";
export default {
  name: "Products",
  data() {
    return {
      productData: "",
      showPopup: false,
      showPopupAddItem: false,
      productName: "",
      singleProduct: "",
    };
  },

  created() {
    this.getAllProducts();
    eventBus.$on("closeDialog", (data) => {
      this.showPopup = data;
    });
    eventBus.$on("closeAddItemDialog", (data) => {
      this.showPopupAddItem = data;
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
    showProductDialogPopup(product) {
      this.showPopupAddItem = true;
      this.singleProduct = product;
    },
    showNotifyMePopup(productName) {
      this.showPopup = true;
      this.productName = productName;
    },
  },
  components: {
    PopupDialog,
    ProductsDetails,
  },
};
</script>

<style src="../style/products.scss" lang="scss"></style>
