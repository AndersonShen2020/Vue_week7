<template>
  <div>
    <h1>這是 Products 頁面</h1>
  </div>
</template>
<script>
import { getProducts } from "@/api/axios";

export default {
  data() {
    return {
      products: [],
    };
  },

  methods: {
    async init() {
      this.products = [...(await getProducts())];
    },
  },

  created() {
    this.init();
  },
};
</script>
<style lang="scss"></style>
