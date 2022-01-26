<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from "@/components/FrontEnd/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
