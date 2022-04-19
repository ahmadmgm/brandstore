<template>
  <div class="products-details" v-if="showpopup">
    <div class="popup col-12 col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        v-on:click="closeDialog()"
      ></button>
      <h1 class="mt-4">Notify Me</h1>
      <p v-if="productname">
        Please enter your email address, we will contact you as soon as
        <strong>{{ productname }}</strong> is back in stock
      </p>
      <input type="email" class="col-12 form-control" />
      <button class="btn btn-dark col-12 mt-3">Notify Me</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../src/main";
export default {
  name: "PopupDialog",
  data() {
    return {};
  },
  computed: {},
  props: {
    showpopup: Boolean,
    productname: String,
  },
  created() {},
  methods: {
    closeDialog() {
      eventBus.$emit("closeDialog", false);
    },
  },
};
</script>

<style lang="scss">
.popup {
  background: #fff;
  padding: 50px;
  margin: 69px auto;
  transition: 1s;
}
.products-details {
  transition: 1s;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.btn-close {
  float: right;
  margin-top: 23px;
}
</style>
