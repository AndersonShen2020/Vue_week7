<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">
        <CartUnit></CartUnit>
      </div>
      <div class="col-4">
        <ValidateForm></ValidateForm>
      </div>
    </div>
  </div>
</template>
<script>
import ValidateForm from "@/components/FrontEnd/ClientValidateForm.vue";
import CartUnit from "@/components/FrontEnd/Shoppingcart.vue";

export default {
  components: {
    CartUnit,
    ValidateForm,
  },
};
</script>
<style></style>
