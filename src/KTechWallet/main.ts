import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router";
import "./main.styl";
import "./Cordova";

Vue.use(Vuetify, {
    iconfont: "md",
    theme: {
        background: "#cfcfc0",
        primary: "#607D8B",
        secondary: "#FF8F00",
        accent: "#FF6D00",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    },
});

let vue: Vue = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");






