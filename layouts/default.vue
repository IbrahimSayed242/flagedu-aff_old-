<template>
  <div>
    <div class="wrapper">
      <Sidebar />
      <div class="main-content">
        <Header />
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Default",
})
export default class Default extends Vue {}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
}

.main-content {
  width: 100%;
}
.content {
  width: 100%;
  min-height: 500px;
  padding: 50px;
}
</style>
