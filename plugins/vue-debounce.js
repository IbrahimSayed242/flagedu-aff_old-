import vueDebounce from "vue-debounce";
import Vue from "vue";

Vue.use(vueDebounce, {
	lock: true,
});

// Listening to multiple events

// Vue.directive("debounce", vueDebounce({ lock: true }));
