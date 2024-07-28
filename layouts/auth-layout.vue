<template>
  <div class="body">
    <Nuxt />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "AuthLayout",
})
export default class AuthLayout extends Vue {}
</script>

<style lang="scss">
.body {
  background-color: #1f3241;
}
</style>
