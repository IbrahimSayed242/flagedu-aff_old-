<template>
  <div>
    <div class="filter-brand" v-on-clickaway="close">
      <div class="info" @click="toggleFilter">
        <div class="label">Filter by language</div>
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
  name: "FilterLanguage",
  components: {},
})
export default class FilterLanguage extends Vue {
  @Prop() langParam;

  openFilter = false;
  selectedLang = null;

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
  }

  handleSelect(obj) {
    console.log("===========__");
    this.selectedLang = obj.value;
    this.$emit("handleLangClose", this.selectedLang);
    this.close();
  }

  data = [
    {
      name: "English",
      value: 0,
    },
    {
      name: "Arabic",
      value: 1,
    },
  ];

  menuActive(obj) {
    if (obj && this.selectedLang > -1) {
      return obj.value == this.selectedLang;
    } else {
      return false;
    }
  }

  mounted() {
    this.selectedLang = this.langParam;
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
