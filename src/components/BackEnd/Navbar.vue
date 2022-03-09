<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <router-link class="nav-link" to="/admin"> 專賣店後台 </router-link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> 回首頁 </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link logout" @click="logout"> 登出 </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async logout() {
      let urlPath = `${process.env.VUE_APP_API}/logout`;
      await axios.post(urlPath).then((res) => {
        alert(res.data.message);
        document.cookie = "hexToken=;expires=;";
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.nav-item {
  padding: 5px;
}
.logout:hover {
  cursor: pointer;
}
</style>
