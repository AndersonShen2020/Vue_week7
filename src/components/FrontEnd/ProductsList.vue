<template>
  <Loading :active="isLoading"></Loading>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="width: 100px; height: 150px; background-size: cover; background-position: center"
          ></div>
        </td>
        <td>{{ product.title }}</td>
        <td>
          <div v-if="product.price === product.origin_price" class="h5">{{ product.price }} 元</div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="openProductModal(product.id)"
              :disabled="isLoadingItem === product.id"
            >
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="addToCart(product.id)"
              :disabled="isLoadingItem === product.id"
            >
              <span
                class="spinner-grow spinner-grow-sm"
                v-show="isLoadingItem === product.id"
              ></span>
              加到購物車
            </button>
            <router-link :to="`/product/${product.id}`">查看更多</router-link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal :id="productId" @close-modal="hideModal"></ProductModal>
</template>

<script>
import axios from "axios";
const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

import ProductModal from "@/components/FrontEnd/ProductModal.vue";
import modal from "bootstrap/js/dist/modal";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    ProductModal,
    Loading,
  },
  data() {
    return {
      products: [],
      productId: null,
      isLoadingItem: "",
      isLoading: false,
    };
  },

  methods: {
    openProductModal(id) {
      this.productId = id;
      this.productModal.show();
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      axios.post(`${url}/api/${path}/cart`, { data }).then((res) => {
        console.log(res);
        this.isLoadingItem = "";
      });
    },
    hideModal() {
      this.productModal.hide();
    },
  },
  mounted() {
    this.isLoading = true;
    axios.get(`${url}/api/${path}/products/all`).then((res) => {
      this.products = res.data.products;
      this.isLoading = false;
    });
    this.productModal = new modal(document.getElementById("productModal"), {
      keyboard: false,
    });
  },
};
</script>
