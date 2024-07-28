<template>
  <div>
    <div class="top-menu">
      <div class="items">
        <div class="item">
          <a href="#">REQUEST PAYMENT</a>
        </div>
        <div class="item">
          <div class="info">
            <div class="name">${{ getProfile ? getProfile.balance : 0 }}</div>
            <div class="other-info">BALANCE</div>
          </div>
        </div>
        <div class="item active">
          <div class="info">
            <div class="name">
              {{ getProfile ? getProfile.full_name : "Who?" }}
            </div>
            <div class="other-info">
              ID: {{ getProfile ? getProfile.affiliate_id : "" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action, Getter } from "nuxt-property-decorator";
import { NS_USER } from "../utils/store/namespace.names";
import { GET_PROFILE } from "../utils/store/getter.names";
import { namespaced, deepCopy } from "../utils/utils";

@Component({
  name: "Header",
  components: {},
})
export default class Header extends Vue {
  @Getter(namespaced(NS_USER, GET_PROFILE)) getProfile;
}
</script>

<style scoped lang="scss">
.top-menu {
  height: 70px;
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
}
.items {
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  .item {
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    cursor: pointer;
    a {
      align-items: center;
      background-color: #01aeab;
      border-radius: 8px;
      color: #fff;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      gap: 10px;
      height: 40px;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    i {
      font-size: 20px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      justify-content: center;
      .name {
      }
      .other-info {
        font-size: 12px;
      }
    }
  }
}
.active {
  background-color: #f1f1f1;
}
</style>
