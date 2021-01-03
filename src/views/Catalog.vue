<template>
  <div>
    <modal name="product" :height="400" :adaptive="true">
      <div class="popupheader justify-content-center">
        <h5 class="modal-title" id="firstmodalLongTitle">
          {{ activeProduct.name }}
        </h5>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <img class="w-100" :src="activeProduct.image" />
          </div>
          <div class="col-sm-8">
            <p>
              {{ activeProduct.description }}
            </p>
            <h4>Weight: 100g</h4>
            <h4>
              PRICE:
              <span class="modal-price">{{ activeProduct.net_price }}</span>
            </h4>
          </div>
        </div>
      </div>
      <div class="popupfooter">
        <button
          type="button"
          v-if="!isActiveInCart"
          class="modal-button btn btn-warning btn-sm card-body m-5"
          @click="addActiveOrder"
        >
          ADD TO CART
        </button>
        <button
          @click="warning"
          v-else
          type="button"
          class="btn btn-warning btn-sm card-body m-5 add-to-cart-trigger"
        >
          ADDED TO CART
        </button>
      </div>
    </modal>
    <div class="d-flex fl content">
      <CatalogCard
        v-for="product in products"
        :key="product.name"
        :product="product"
        @title-click="showProduct(product)"
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
    quantity: 6,
    activeProduct: {}
  }),
  computed: {
    isActiveInCart() {
      return this.$store.getters.hasProductInCart(this.activeProduct);
    }
  },
  components: {
    CatalogCard
  },
  mounted: function() {
    this.updateProductsList();
  },
  methods: {
    addActiveOrder() {
      this.$store.commit("addOrder", this.activeProduct);
      this.$toasted.show(
        "We add " + this.activeProduct.name + " in your cart",
        {
          position: "bottom-right",
          duration: 2500,
          action: {
            text: "X",
            onClick: (event, toastObject) => {
              toastObject.goAway(0);
            }
          },
          theme: "bubble",
          type: "success"
        }
      );
    },
    updateProductsList() {
      getProducts(this.quantity, this.priceMax).then(
        data => (this.products = [...data.data])
      );
    },
    showProduct(product) {
      this.activeProduct = product;
      this.$modal.show("product");
    },
    warning() {
      this.$toasted.show(
        "We already add " + this.activeProduct.name + " in your cart",
        {
          position: "bottom-right",
          duration: 2500,
          action: {
            text: "X",
            onClick: (event, toastObject) => {
              toastObject.goAway(0);
            }
          },
          theme: "bubble",
          type: "info"
        }
      );
    }
  }
};
</script>
