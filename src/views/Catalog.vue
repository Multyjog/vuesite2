<template>
  <div>
    <div class="d-flex fl content">
      <CatalogCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CatalogCard from "@/components/CatalogCard.vue";
import { getProducts } from "../api.js";

export default {
  name: "Catalog",
  data: () => ({
    products: [],
    priceMax: 1000,
    quantity: 6
  }),
  components: {
    CatalogCard
  },
  mounted: function() {
    this.updateProductsList();
  },
  methods: {
    updateProductsList() {
      getProducts(this.quantity, this.priceMax).then(
        data => (this.products = [...data.data])
      );
    }
  }
};
</script>
