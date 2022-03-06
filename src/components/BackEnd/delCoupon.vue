<template>
  <div
    id="delCouponModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct?.title }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteItem">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "bootstrap/js/dist/modal";
import axios from "axios";

export default {
  props: ["coupon"],
  data() {
    return {
      modal: null,
      tempProduct: this.coupon,
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    deleteItem() {
      const urlPath = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempProduct.id}`;
      axios
        .delete(urlPath)
        .then((res) => {
          console.log(res.data.message);
          this.$emit("resetCoupons");
        })
        .catch((err) => {
          console.error(err.response.data.message);
        });
    },
  },
  watch: {
    coupon(newVal) {
      this.tempProduct = newVal;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
