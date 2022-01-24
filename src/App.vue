<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Coffee 專賣店</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/Cart"><i class="bi bi-cart"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/Login"><i class="bi bi-person-circle"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "./assets/all.scss";

.nav-item {
  padding: 5px;
}

// 切版格線,切版完後要刪除
* {
  outline: 1px solid #000;
}
</style>
