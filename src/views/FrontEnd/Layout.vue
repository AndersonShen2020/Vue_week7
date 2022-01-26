<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from "@/components/FrontNavbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.nav-item {
  padding: 5px;
}

// 切版格線,切版完後要刪除
* {
  outline: 1px solid #000;
}
</style>
