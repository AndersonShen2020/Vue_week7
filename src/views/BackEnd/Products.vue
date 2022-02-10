<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="showModal('new')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="showModal('update', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="showModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @emitpages="init"></pagination>
  </div>
  <!-- Modal -->
  <productModal :productinfo="tempProduct" :state="isNew" @update="init"></productModal>
  <delProductModal :productinfo="tempProduct" @update="init"></delProductModal>
  <!-- Modal -->
</template>
<script>
import { getProducts, addProduct, updateProduct, deleteProduct } from "@/api/axios";
import modal from "bootstrap/js/dist/modal";

// component
import pagination from "@/components/common/pagination.vue";
import productModal from "@/components/BackEnd/ProductModal.vue";
import delProductModal from "@/components/BackEnd/delProduct.vue";

const tempProduct = {
  title: "",
  category: "",
  origin_price: 0,
  price: 0,
  unit: "",
  description: "",
  content: "",
  is_enabled: 1,
  imageUrl: "",
  imagesUrl: [],
};

export default {
  components: {
    pagination,
    productModal,
    delProductModal,
  },
  data() {
    return {
      products: [],
      pagination: null,
      isNew: false,
      tempProduct,
      productModal: null,
      delProductModal: null,
    };
  },

  methods: {
    async init(page = 1) {
      console.log("從遠端抓新資料");
      const { products, pagination } = await getProducts(page);
      this.products = products;
      this.pagination = pagination;
    },
    showModal(state, item) {
      if (state === "new") {
        this.tempProduct = JSON.parse(JSON.stringify(tempProduct));
        this.isNew = true;
        this.productModal.show();
      } else if (state === "update") {
        console.log("update");
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.isNew = false;
        this.productModal.show();
      } else if (state === "delete") {
        console.log("delete");
        this.tempProduct = { ...item };
        this.delProductModal.show();
      }
    },
    async updateItem() {
      if (this.isNew === true) {
        await addProduct({ data: this.tempProduct });
        this.productModal.hide();
      } else {
        await updateProduct({ data: this.tempProduct });
        this.productModal.hide();
      }
      this.init();
    },
    async deleteItem() {
      await deleteProduct(this.tempProduct.id);
      this.delProductModal.hide();
      this.init();
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push("");
    },
  },

  created() {
    this.init();
  },
  mounted() {
    this.productModal = new modal(document.getElementById("productModal"), {
      keyboard: false,
    });
    // 刪除使用 delProductModal
    this.delProductModal = new modal(document.getElementById("delProductModal"), {
      keyboard: false,
    });
  },
};
</script>
<style lang="scss"></style>
