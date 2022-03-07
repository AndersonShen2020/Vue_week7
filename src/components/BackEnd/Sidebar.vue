<template>
  <aside class="sidebar">
    <ul class="list-group list-group-flush bg-transparent">
      <li class="list-group-item">
        <router-link class="nav-link" to="/admin">首頁</router-link>
      </li>
      <li class="list-group-item">
        <router-link class="nav-link" to="/admin/Products">產品</router-link>
      </li>
      <li class="list-group-item">
        <router-link class="nav-link" to="/admin/Coupons">優惠卷</router-link>
      </li>
    </ul>
  </aside>
</template>
<style>
.nav-link:hover {
  background-color: burlywood;
}
</style>
