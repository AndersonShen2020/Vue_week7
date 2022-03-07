<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <router-link class="nav-link" to="/admin"> 專賣店後台 </router-link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> 回首頁 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/"> 登出 </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-item {
  padding: 5px;
}
</style>
