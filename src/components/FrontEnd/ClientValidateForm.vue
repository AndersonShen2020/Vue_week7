<template>
  <Form v-slot="{ errors }" @submit="onSubmit">
    <label for="email" class="form-label">email</label>
    <Field
      id="email"
      name="email"
      type="email"
      class="form-control"
      :class="{ 'is-invalid': errors['email'] }"
      placeholder="請輸入 Email"
      rules="email|required"
      v-model="user.email"
    ></Field>
    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

    <label for="local" class="form-label">地區</label>
    <Field
      id="local"
      name="地區"
      class="form-control"
      :class="{ 'is-invalid': errors['地區'] }"
      placeholder="請輸入地區"
      rules="required"
      v-model="user.region"
      as="select"
    >
      <option value="">請選擇地區</option>
      <option value="台北市">台北市</option>
      <option value="高雄市">高雄市</option>
    </Field>

    <label for="phone" class="form-label">電話</label>
    <Field
      id="phone"
      name="電話"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors['電話'] }"
      placeholder="請輸入電話"
      :rules="isPhone"
      v-model="user.phone"
    ></Field>
    <error-message name="電話" class="invalid-feedback"></error-message>

    <button class="btn btn-primary mt-3" type="submit">Submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  // validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale("zh_TW");

export default {
  data() {
    return {
      user: {
        email: "",
        region: "",
        phone: "",
      },
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
    },
    // validateEmail(value) {
    //   // if the field is empty
    //   if (!value) {
    //     return "This field is required";
    //   }

    //   // if the field is not a valid email
    //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //   if (!regex.test(value)) {
    //     return "This field must be a valid email";
    //   }

    //   // All is good
    //   return true;
    // },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
  },
};
</script>
