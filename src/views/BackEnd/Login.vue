<template>
  <div class="container">
    <form class="formlogin">
      <h2 class="text-center mb-3">訂單後台管理中心</h2>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">請輸入管理員信箱</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">請輸入密碼</label>
      </div>
      <div class="form-check my-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label class="form-check-label" for="flexCheckChecked"> 記住我 </label>
      </div>
      <button type="submit" class="btn btn-lg btn-primary w-100 mt-3">登入</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.formlogin {
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
  // align-items: center;
  // position: relative;
  min-height: calc(100vh - (66px + 24px)); // 66 是header, 24 是預計 footer
  flex-direction: column;
}
</style>
