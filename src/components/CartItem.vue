<template>
  <div id="hidden-cart-card" class="content mt-5">
    <div class="row mb-5">
      <div class="col-sm-3 justify-content-center">
        <img :src="order.image" class="h-100 mx-auto d-block product-image" />
      </div>
      <div class="col-sm-6">
        <h6 class="ccard-title d-flex justify-content-center product-title">
          {{ order.name }}
        </h6>
        <p class="orderinfo">
          {{ order.description }}
        </p>
      </div>
      <div
        class="col-sm-2 d-flex justify-content-around flex-column align-items-center flex-wrap"
      >
        <h4 class="price ccard-weight">100g</h4>
        <h4 class="price ccard-cost">{{ price }}</h4>
        <input
          @change="setQuantity"
          v-model.number="quantity"
          class="quantity-input"
          type="number"
          name="quantity"
          min="1"
          max="13"
        />
      </div>
      <div class="col-sm-1 d-flex justify-content-around align-self-center">
        <a href="#"
          ><i
            @click="deleteOrder"
            class="close-button nav-link fas fa-times-circle"
          ></i
        ></a>
      </div>
    </div>
    <hr class="ml-5 mr-5" />
  </div>
</template>

<script>
import { renderSum } from "@/utils.js";
export default {
  name: "CartItem",
  data: function() {
    return { quantity: this.order.quantity };
  },
  computed: {
    price() {
      return renderSum(parseInt(this.order.net_price));
    }
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteOrder() {
      this.$emit("deleted");
      this.$store.commit("deleteOrder", this.order);
    },
    setQuantity() {
      this.$store.commit("setQuantity", {
        order: this.order,
        quantity: this.quantity
      });
    }
  }
};
</script>
<style scoped>
.product-image {
  width: 200px;
}
</style>
