<template>
  <div class="cards mb-4 shade">
    <div class="container">
      <p class="card-title" data-toggle="modal" data-target="#firstmodalCenter">
        {{ product.name }}
      </p>
    </div>
    <div class="container cursor">
      <div
        id="firstcarouselindicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#firstcarouselindicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#firstcarouselindicators" data-slide-to="1"></li>
          <li data-target="#firstcarouselindicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="img/catalog_img.jpg"
              data-toggle="modal"
              data-target="#firstmodalCenter"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/catalog_img2.jpg"
              data-toggle="modal"
              data-target="#firstmodalCenter"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/catalog_img3.jpg"
              data-toggle="modal"
              data-target="#firstmodalCenter"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#firstcarouselindicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#firstcarouselindicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <p class="mt-3 px-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="firstmodalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="firstmodalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog popup modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="popupheader justify-content-center">
            <h5 class="modal-title" id="firstmodalLongTitle">
              GOVNO S TVOROGOM
            </h5>
            <button
              type="button"
              class="close closemark"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <img class="w-100" src="img/popup_img.jpg" />
              </div>
              <div class="col-sm-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h4>Weight: 100g</h4>
                <h4>
                  PRICE: <span class="modal-price">{{ price }}</span>
                </h4>
              </div>
            </div>
          </div>
          <div class="popupfooter">
            <button
              type="button"
              v-if="!isInCart"
              class="modal-button btn btn-warning btn-sm card-body m-5"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
