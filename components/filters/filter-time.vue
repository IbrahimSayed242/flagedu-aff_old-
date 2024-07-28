<template>
  <div>
    <div class="filter-brand" v-on-clickaway="close">
      <div class="info" @click="toggleFilter">
        <div class="label">
          {{ displaySort }}
        </div>
        <i class="bi bi-caret-down-fill" style="text-align: right"></i>
      </div>
      <div class="content" v-show="openFilter == true">
        <div class="item-list">
          <div
            @click="handleSelect(item)"
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

@Component({
  name: "FilterTime",
  components: {},
})
export default class FilterTime extends Vue {
  @Prop() sortParam;

  openFilter = false;
  selectedSort = null;

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
  }

  get displaySort() {
    if (this.selectedSort == 0) {
      return "Latest";
    } else if (this.selectedSort == 1) {
      return "Oldest";
    } else {
      return "Latest";
    }
  }

  handleSelect(obj) {
    this.selectedSort = obj.value;
    this.$emit("handleSortClose", this.selectedSort);
    this.close();
  }

  data = [
    {
      name: "Latest",
      value: 0,
    },
    {
      name: "Oldest",
      value: 1,
    },
  ];

  menuActive(obj) {
    if (obj && this.selectedSort > -1) {
      return obj.value == this.selectedSort;
    } else {
      return false;
    }
  }

  mounted() {
    this.selectedSort = this.sortParam;
  }
}
</script>

<style scoped lang="scss">
.filter-brand {
  height: 30px;
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
