<template>
  <div class="container">
    <div class="row align-items-center mt-3">
      <div class="col-sm-6">
        <div class="mb-2">
          <img class="img-fluid" :src="product.imageUrl" alt="" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="row">
          <div class="mb-3">
            <p class="badge bg-primary rounded-pill">{{ product.category }}</p>
            <p class="display-4 fw-bold">{{ product.title }}</p>
          </div>
          <div class="mb-3">
            <p class="pre">{{ product.description }}</p>
          </div>
          <div class="mb-3 text-end">
            <span class="fs-3 fw-bold">NT ${{ product.price }} 元</span>
            <span> / {{ product.unit }}</span>
          </div>
          <div class="d-flex">
            <select id="" class="form-select w-auto my-3 ms-auto" v-model="qty">
              <option :value="num" v-for="num in 20" :key="`${num}`">
                {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="d-flex justify-content-end">
            <span class="fs-3 fw-bold me-3">總計 $ {{ qty * product.price }} 元</span>
            <button type="button" class="btn btn-primary" @click="addToCart(id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      qty: 1,
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty: this.qty | qty,
      };
      axios.post(`${url}/api/${path}/cart`, { data }).then((res) => {
        alert(res.data.message);
      });
    },
    getProduct() {
      axios.get(`${url}/api/${path}/product/${this.id}`).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  async mounted() {
    await this.getProduct();
  },
};
</script>
<style>
.pre {
  white-space: pre-wrap;
}
</style>
