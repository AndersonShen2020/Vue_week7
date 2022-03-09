<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ new Date(item.due_date * 1000).toLocaleDateString() }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @emitpages="getCoupons"></pagination>
  </div>
  <couponsModal
    ref="couponModal"
    :is-new="isNew"
    :coupon="tempCoupon"
    @reset-coupons="getCoupons"
  ></couponsModal>
  <delCoupons ref="delCoupon" :coupon="tempCoupon" @reset-coupons="getCoupons"></delCoupons>
</template>
<script>
import axios from "axios";

// component
import pagination from "@/components/common/pagination.vue";
import couponsModal from "@/components/BackEnd/CouponsModal.vue";
import delCoupons from "@/components/BackEnd/delCoupon.vue";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    pagination,
    couponsModal,
    delCoupons,
    Loading,
  },
  data() {
    return {
      coupons: [],
      pagination: null,
      isNew: false,
      tempCoupon: {
        title: "",
        is_enabled: 0,
        percent: 100,
        code: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async getCoupons(page = 1) {
      this.isLoading = true;
      const urlPath = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      await axios
        .get(urlPath)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.dir(err.response);
        });
      this.$refs.couponModal.hideModal();
      this.$refs.delCoupon.hideModal();
      this.isLoading = false;
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew === true) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delCoupon;
      delComponent.openModal();
    },
  },
  async mounted() {
    await this.getCoupons();
  },
};
</script>
<style lang=""></style>
