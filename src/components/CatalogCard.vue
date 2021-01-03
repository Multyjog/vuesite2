<template>
  <div class="cards mb-4 shade">
    <div class="container">
      <p
        class="card-title"
        data-toggle="modal"
        data-target="#firstmodalCenter"
        @click="$emit('title-click')"
      >
        {{ product.name }}
      </p>
    </div>
    <div class="container cursor">
      <carousel
        :per-page="1"
        pagination-color="white"
        pagination-active-color="yellow"
      >
        <slide v-for="image in product.images" :key="image.title">
          <img :src="image.url" :alt="image.title" width="100%" height="100%" />
        </slide>
      </carousel>
    </div>
    <p class="mt-3 px-4">
      {{ product.description }}
    </p>
    <div class="d-flex justify-content-between card-body">
      <h4>100g</h4>
      <h4 class="card-cost">{{ price }}</h4>
    </div>
    <button
      @click="addOrder"
      v-if="!isInCart"
      type="button"
      class="btn btn-warning btn-sm card-body m-5 add-to-cart-trigger"
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
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { renderSum } from "@/utils.js";

export default {
  name: "CatalogCard",
  props: { product: Object },
  computed: {
    isInCart() {
      return this.$store.getters.hasProductInCart(this.product);
    },
    price() {
      return renderSum(this.product.net_price);
    }
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    addOrder() {
      this.$store.commit("addOrder", this.product);
      this.$toasted.show("We add " + this.product.name + " in your cart", {
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
      });
    },
    warning() {
      this.$toasted.show(
        "We already add " + this.product.name + " in your cart",
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
