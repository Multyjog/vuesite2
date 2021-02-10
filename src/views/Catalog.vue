<template>
  <div>
    <div hidden id="spinner"></div>
    <div id="content" class="container-fluid">
      <div class="mr-t5 mb-5">
        <h3>CATALOG</h3>
        <div class="clear"></div>
      </div>
      <div class="d-flex fl content">
        <CatalogCard
          v-for="product in products"
          :key="product.name"
          :product="product"
        />
      </div>
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
    error: "",
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
