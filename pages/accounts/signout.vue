<template>
  <div></div>
</template>

<script>
import { Component, Vue, Mutation } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_USER } from "../../utils/store/namespace.names";
import { SET_TOKEN_ERROR } from "../../utils/store/mutation.names";

@Component({
  name: "SignOut",
  components: {},
})
export default class SignOut extends Vue {
  @Mutation(namespaced(NS_USER, SET_TOKEN_ERROR)) setTokenError;

  mounted() {
    this.setTokenError();
    this.$router.push({ name: signin });
  }
}
</script>

<style scoped lang="scss"></style>
