<template>
  <div class="container">
    <h1>單一產品頁面</h1>
    {{ Item }}
  </div>
</template>
<script>
import axios from "axios";
const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

export default {
  data() {
    return {
      id: this.$route.params.id,
      Item: {},
    };
  },
  mounted() {
    axios.get(`${url}/api/${path}/product/${this.id}`).then((res) => {
      console.log(res);
      this.Item = res;
    });
  },
};
</script>
<style></style>
