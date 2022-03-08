<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <main class="main w-100">
      <router-view />
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/BackEnd/Navbar.vue";
import Sidebar from "@/components/BackEnd/Sidebar.vue";
import { checkAdmin } from "@/api/axios";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  async created() {
    await checkAdmin();
  },
};
</script>

<style lang="scss">
.sidebar {
  background-color: #f8f9fa;
  width: 280px;
  min-height: calc(100vh - 66px);
}
</style>
