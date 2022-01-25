<template>
  <div class="d-flex">
    <aside class="sidebar">
      <ul class="list-group list-group-flush bg-transparent">
        <li class="list-group-item">首頁</li>
        <li class="list-group-item">產品</li>
      </ul>
    </aside>
    <main class="main"></main>
  </div>
</template>
<script>
// import axios from "axios";
// import { checkAdmin } from "../../api/axios";
import { checkAdmin } from "@/api/axios";

export default {
  mounted() {
    checkAdmin();
  },
};
</script>
<style lang="scss">
.sidebar {
  background-color: black;
  width: 280px;
  min-height: calc(100vh - 66px);
}
</style>
