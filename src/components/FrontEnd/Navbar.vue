<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Coffee 專賣店</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"> Link </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Cart">
              <i class="bi bi-cart"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">
              <i class="bi bi-person-circle"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-item {
  padding: 5px;
}
</style>
