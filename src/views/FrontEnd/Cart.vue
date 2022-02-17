<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
        <Shoppingcart></Shoppingcart>
      </div>
      <div class="col-6">
        <ClientValidateForm></ClientValidateForm>
      </div>
    </div>
  </div>
</template>
<script>
import ClientValidateForm from "@/components/FrontEnd/ClientValidateForm.vue";
import Shoppingcart from "@/components/FrontEnd/Shoppingcart.vue";

export default {
  components: {
    ClientValidateForm,
    Shoppingcart,
  },
};
</script>
<style></style>
