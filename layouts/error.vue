<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">Page Does Not Exist</h1>
    <h1 v-else>Server Error</h1>
    <NuxtLink to="/"> Home Page</NuxtLink>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "Error",
  layout: "error",
})
export default class Error extends Vue {
  @Prop() error;
}
</script>

<style scoped lang="scss">
.error {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: black;
  }
  a {
    text-decoration: underline;
  }
}
</style>
