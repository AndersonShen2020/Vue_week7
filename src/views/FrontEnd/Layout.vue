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
