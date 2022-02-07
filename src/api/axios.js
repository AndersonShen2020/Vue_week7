import axios from "axios";
import router from "../router";

const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

// 登入帳號
export async function login(user) {
  try {
    // 取出 token 跟 expired
    const { data } = await axios.post(`${url}/admin/signin`, user);
    // 設定 cookie
    document.cookie = `hexToken=${data.token}; expires=${new Date(data.expired)};`;
    console.log("登入成功");
    return true;
  } catch (err) {
    alert(err.response.data.message);
  }
}

// 確認用戶是否仍然持續登入
export async function checkAdmin() {
  // 取出 Token
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
  // 設定 axios 在 headers 中夾帶 token
  axios.defaults.headers.common["Authorization"] = token;
  try {
    await axios.post(`${url}/api/user/check`);
    console.log("確認用戶仍然持續登入");
  } catch (err) {
    alert(err.response.data.message);
    router.push("/Login");
  }
}

// 取得產品列表
export async function getProducts(page) {
  try {
    const { data } = await axios.get(`${url}/api/${path}/admin/products?page=${page}`);
    return data;
  } catch (err) {
    alert(err.response.data.message);
    router.push("/Login");
  }
}

// 上傳單一產品
export async function addProduct(product) {
  try {
    await axios.post(`${url}/api/${path}/admin/product`, product);
  } catch (err) {
    alert(err.response.data.message);
  }
}

// 修改單一產品
export async function updateProduct(product) {
  try {
    console.log(product.data.id);
    await axios.put(`${url}/api/${path}/admin/product/${product.data.id}`, product);
  } catch (err) {
    alert(err.response.data.message);
  }
}

// 刪除單一產品
export async function deleteProduct(id) {
  try {
    console.log(`${url}/api/${path}/admin/product/${id}`);
    await axios.delete(`${url}/api/${path}/admin/product/${id}`);
  } catch (err) {
    alert(err.response.data.message);
  }
}
