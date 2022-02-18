<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">
        <Shoppingcart></Shoppingcart>
      </div>
      <div class="col-4">
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
    Shoppingcart,
    ClientValidateForm,
  },
};
</script>
<style></style>
