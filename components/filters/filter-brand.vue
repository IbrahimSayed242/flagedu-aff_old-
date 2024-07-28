<template>
  <div>
    <div class="filter-brand" v-on-clickaway="close">
      <div class="info" @click="toggleFilter">
        <div class="label">Filter by brand</div>
        <i class="bi bi-caret-down-fill" style="text-align: right"></i>
      </div>
      <div class="content" v-show="openFilter == true">
        <div class="item-list">
          <div
            @click="handleBrandSelect(item)"
            :class="{
              item: true,
              active: menuActive(item),
            }"
            v-for="(item, idx) in data"
            :key="'brand_' + idx"
          >
            <div class="form-check">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action, Prop } from "nuxt-property-decorator";
import { NS_COMMON } from "../../utils/store/namespace.names";
import { FETCH_BRANDS } from "../../utils/store/action.names";
import { namespaced, deepCopy } from "../../utils/utils";

@Component({
  name: "FilterBrand",
  components: {},
})
export default class FilterBrand extends Vue {
  @Prop() data;
  @Prop() brandParam;

  @Action(namespaced(NS_COMMON, FETCH_BRANDS)) fetchBrands;

  menuActive(obj) {
    if (obj && this.selectedBrand) {
      return obj.slug == this.selectedBrand;
    } else {
      return false;
    }
  }

  openFilter = false;
  selectedBrand = null;

  handleBrandSelect(obj) {
    this.selectedBrand = obj.slug;
    this.$emit("handleBrandClose", this.selectedBrand);
    this.close();
  }

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
  }

  mounted() {
    this.selectedBrand = this.brandParam;
  }
}
</script>

<style scoped lang="scss">
.filter-brand {
  height: 40px;
  width: 150px;
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
    top: 40px;
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
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
      }
      .active {
        background-color: #f1f1f1;
      }
    }
  }
}
</style>
