<template>
  <div class="">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <Nuxt />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "PageLayout",
})
export default class PageLayout extends Vue {}
</script>

<style lang="scss">
* {
  font-family: "Tajawal", sans-serif;
}
</style>
