<template>
  <nav class="navbar navbar-expand-lg navbar-light mt-4">
    <router-link to="/"
      ><a class="navbar-brand d-flex align-items-center">
        <h1 class="logo p-3">SL</h1>
        <h2 class="ml-3">SuperLorem</h2>
      </a></router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <div class="drpdwn justify-content-between">
        <router-link to="/"><span class="nav-link">MAIN</span></router-link>
        <router-link to="/catalog"
          ><span class="nav-link">CATALOG</span></router-link
        >
        <router-link to="/contacts"
          ><span class="nav-link">CONTACTS</span></router-link
        >
        <router-link to="/testimonials"
          ><span class="nav-link">TESTIMONIALS</span></router-link
        >
      </div>
    </div>
    <div
      class="collapse navbar-collapse justify-content-around"
      id="navbarSupportedContent"
    >
      <CartWidget />
    </div>
  </nav>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script>
import CartWidget from "@/components/CartWidget.vue";
export default {
  name: "NavBar",
  components: {
    CartWidget
  }
};
</script>
