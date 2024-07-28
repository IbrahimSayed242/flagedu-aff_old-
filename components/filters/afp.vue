<template>
  <div>
    <div class="filter-brand">
      <div class="info" @click="toggleFilter">
        <div class="label">Dynamic Parameters</div>
        <i class="bi bi-caret-down-fill" style="text-align: right"></i>
      </div>
      <div class="content" v-if="openFilter == true">
        <div class="item-list">
          <div class="item">
            <label>AFP:</label>
            <input type="text" name="afp" v-model="afp" />
          </div>
          <div class="item">
            <button @click="close">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "Afp",
  components: {},
})
export default class Afp extends Vue {
  @Prop() afpData;

  openFilter = false;
  afp = "";

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
    this.$emit("close", this.afp);
  }

  mounted() {
    this.afp = this.afpData;
  }
}
</script>

<style scoped lang="scss">
.filter-brand {
  height: 30px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .label {
    }
  }
  .content {
    position: absolute;
    width: 200px;
    border: 1px solid grey;
    top: 30px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-bottom: 20px;
    .item-list {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .item {
        width: 100%;
        height: 30px;
        display: flex;
        padding-left: 15px;
        padding-right: 15px;
        flex-direction: column;
        margin-bottom: 20px;
        input {
          width: 100%;
          padding-left: 10px;
        }
        button {
          height: 40px;
          border: none;
          background-color: orange;
          color: white;
        }
      }
    }
  }
}
</style>
