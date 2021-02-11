import VuexPersist from "vuex-persist";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    addOrder(state, product) {
      const order = { ...product, quantity: 1 };
      state.orders.push(order);
    },
    deleteOrder(state, order) {
      const newOrders = state.orders.filter(i => i !== order);
      state.orders = newOrders;
    },
    setQuantity(state, { quantity, order }) {
      const newOrders = state.orders.map(i =>
        i === order ? { ...i, quantity: quantity } : i
      );
      state.orders = newOrders;
    }
  },
  getters: {
    orders: state => {
      return state.orders;
    },
    totalSum: state => {
      let sum = 0;
      state.orders.forEach(order => (sum += order.net_price * order.quantity));
      return parseInt(sum);
    },
    hasProductInCart: state => product => {
      const ids = state.orders.map(i => i.id);
      return ids.includes(product.id);
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin]
});
