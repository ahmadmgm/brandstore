<template src="../popup-dialog.html"></template>

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
<style src="../style/popup-dialog.scss" lang="scss"></style>
