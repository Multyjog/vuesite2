<template>
  <content>
    <div v-if="orders.length" class="cart">
      <CartItem v-for="order in orders" :order="order" :key="order.ean" />
    </div>
    <p v-else class="cart-banner mt-5">
      You have no items in your cart yet. Go to
      <router-link to="/catalog">CATALOG PAGE</router-link> to add some stuff!
    </p>
  </content>
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
