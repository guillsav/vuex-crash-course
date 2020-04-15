import Vue from "vue"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import store from "./store"

library.add(faUserSecret, faTrashAlt)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app")
