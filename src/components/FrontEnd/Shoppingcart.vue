<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button
      @click="clearAllCarts"
      class="btn btn-outline-danger"
      type="button"
      :disabled="cartData.carts?.length === 0"
    >
      清空購物車
    </button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th class="col-md-2">單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            <button
              @click="removeCartItem(item.id)"
              type="button"
              class="btn btn-outline-danger btn-sm"
            >
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">已套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select
                  id=""
                  class="form-select"
                  v-model="item.qty"
                  @change="updateCartItem(item)"
                  :disabled="isLoadingItem === item.id"
                >
                  <option :value="num" v-for="num in 20" :key="`${num}${item.id}`">
                    {{ num }}
                  </option>
                </select>
                <span class="input-group-text" id="basic-addon2">
                  {{ item.product.unit }}
                </span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            NT${{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cartData.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cartData.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import emitter from "@/api/mitt.js";

import axios from "axios";
const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      cartData: [],
      productId: null,
      isLoadingItem: "",
      isLoading: false,
      isEnableSend: false,
    };
  },
  methods: {
    removeCartItem(id) {
      this.isLoadingItem = id;
      axios.delete(`${url}/api/${path}/cart/${id}`).then((res) => {
        console.log(res);
        this.getCart();
        this.isLoadingItem = "";
      });
    },
    getCart() {
      axios.get(`${url}/api/${path}/cart`).then((res) => {
        this.cartData = res.data.data;
        this.isLoading = false;
      });
    },
    updateCartItem(item) {
      let data = {
        product_id: item.id,
        qty: item.qty,
      };
      axios.put(`${url}/api/${path}/cart/${item.id}`, { data }).then((res) => {
        console.log(res);
        this.getCart();
        this.isLoadingItem = "";
      });
    },
    clearAllCarts() {
      axios.delete(`${url}/api/${path}/carts`).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
  },
  watch: {
    cartData(newVal) {
      if (newVal.carts.length === 0) this.isEnableSend = false;
      else this.isEnableSend = true;
      const vm = this;
      emitter.emit("cartSend", vm.isEnableSend);
    },
  },
  created() {
    const vm = this;
    emitter.on("clearCart", () => {
      vm.getCart();
    });
  },
  mounted() {
    console.log(emitter);
    this.isLoading = true;
    this.getCart();
  },
  unmounted() {
    const vm = this;
    emitter.off("clearCart", () => {
      vm.getCart();
    });
  },
};
</script>
