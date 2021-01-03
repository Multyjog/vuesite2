<template>
  <div id="hidden-cart-card" class="content mt-5">
    <div class="row mb-5">
      <div class="col-sm-3 justify-content-center">
        <img src="img/cart_img.png" class="h-100 mx-auto d-block" />
      </div>
      <div class="col-sm-6">
        <h6 class="ccard-title d-flex justify-content-center product-title">
          {{ order.name }}
        </h6>
        <p class="orderinfo">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
      // this.$store.commit("deleteOrder", this.order);
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
