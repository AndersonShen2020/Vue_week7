<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">
        <ShoppingCart></ShoppingCart>
      </div>
      <div class="col-4">
        <ValidateForm></ValidateForm>
      </div>
    </div>
  </div>
</template>
<script>
import ValidateForm from "@/components/FrontEnd/ClientValidateForm.vue";
import ShoppingCart from "@/components/FrontEnd/ShoppingCart.vue";

export default {
  components: {
    ShoppingCart,
    ValidateForm,
  },
};
</script>
<style></style>
