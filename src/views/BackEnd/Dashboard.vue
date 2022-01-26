<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <aside class="sidebar">
      <ul class="list-group list-group-flush bg-transparent">
        <li class="list-group-item"><a class="nav-link" href="#/Dashboard">首頁</a></li>
        <li class="list-group-item"><a class="nav-link" href="#/Dashboard/Products">產品</a></li>
      </ul>
    </aside>
    <main class="main">
      <!-- <router-view name="backboard" /> -->
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/BackEnd/Navbar.vue";
import { checkAdmin } from "@/api/axios";

export default {
  components: {
    Navbar,
  },
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
