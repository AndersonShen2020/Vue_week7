<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-3">
        <h2>產品分類列表</h2>
        <ul>
          <li>全部</li>
          <li>淺焙</li>
          <li>中焙</li>
          <li>深焙</li>
          <li>馬克杯</li>
          <li>磨豆機</li>
          <li>咖啡機</li>
        </ul>
      </div>
      <div class="col-9">
        <ProductsList></ProductsList>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsList from "@/components/FrontEnd/ProductsList.vue";

export default {
  components: {
    ProductsList,
  },
};
</script>
<style></style>
