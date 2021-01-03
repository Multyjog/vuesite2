<template>
  <div class="cart">
    <CartItem v-for="order in orders" :order="order" :key="order.ean" />
  </div>
</template>
<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  components: {
    CartItem
  }
};
</script>
