import axios from "axios";

// const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
// const path = "ashen"; // 請加入個人 API path
const url = process.env.VUE_APP_API; // 請加入站點
const path = process.env.VUE_APP_PATH; // 請加入個人 API path

// #5 取得後台產品列表
// export async function getProducts(url, path) {
//   await axios
//     .get(`${url}/api/${path}/admin/products`)
//     .then((res) => {
//       console.log(res.data.products);
//       // this.products = res.data.products;
//       return res.data.products;
//     })
//     .catch((err) => {
//       console.log(err.response.data.message);
//     });
// }

// login() {
//       axios
//         .post(`${url}/admin/signin`, this.user)
//         .then((res) => {
//           console.log(res);
//           // expired = unix timestamp
//           const { token, expired } = res.data;
//           document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
//           // router.push("/products");
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//         });
//     },

// 登入帳號
export async function login(user) {
  try {
    console.log(user);
    const { token, expired } = await axios.post(`${url}/admin/signin`, user);
    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
    console.log("登入成功");
  } catch (err) {
    console.log(err.response.data.message);
  }
}

// 取得產品列表
export async function getProducts() {
  try {
    const { data } = await axios.get(`${url}/api/${path}/admin/products`);
    return data.products;
  } catch (err) {
    console.log(err.response.data.message);
  }
}
