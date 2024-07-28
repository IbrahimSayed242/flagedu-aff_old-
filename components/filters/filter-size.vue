<template>
  <div>
    <div class="filter-brand" v-on-clickaway="close">
      <div class="info" @click="toggleFilter">
        <div class="label">Filter by size</div>
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
  name: "FilterSize",
  components: {},
})
export default class FilterSize extends Vue {
  @Prop() sizeParam;

  openFilter = false;
  selectedSize = null;

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
  }

  handleSelect(obj) {
    this.selectedSize = obj.value;
    this.$emit("handleSizeClose", this.selectedSize);
    this.close();
  }

  data = [
    {
      name: "Unavailable",
      value: 0,
    },
    {
      name: "1920 x 1080",
      value: 1,
    },
    {
      name: "1440 x 780",
      value: 2,
    },
  ];

  menuActive(obj) {
    if (obj && this.selectedSize > -1) {
      return obj.value == this.selectedSize;
    } else {
      return false;
    }
  }

  mounted() {
    this.selectedSize = this.sizeParam;
  }
}
</script>

<style scoped lang="scss">
.filter-brand {
  height: 40px;
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
