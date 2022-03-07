<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ new Date(item.create_at * 1000).toLocaleDateString() }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button">檢視</button>
              <button class="btn btn-outline-danger btn-sm" type="button">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";
const urlPath = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders`;

export default {
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    axios.get(urlPath).then((res) => {
      console.log(res);
      this.orders = res.data.orders;
    });
  },
};
</script>
<style lang=""></style>
