<template>
  <router-link to="/cart">
    <a class="nav-link" href="cart.html">
      <i class="nav-link fas fa-shopping-cart"></i>
      <span id="total">{{ totalSum }}</span>
    </a>
  </router-link>
</template>

<script>
import { renderSum } from "@/utils.js";

export default {
  name: "CartWidget",
  computed: {
    totalSum() {
      return renderSum(this.$store.getters.totalSum);
    }
  }
};
</script>
