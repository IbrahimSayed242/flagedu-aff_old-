<template>
  <div>
    <div class="left-menu">
      <div class="logo">
        <img src="/images/logo-flat.webp" />
      </div>
      <div class="menu-items">
        <div
          class="menu-wrapper"
          v-for="(item, idx) in sidemenus"
          :key="'menu_' + idx"
        >
          <div
            :class="{ menu: true, active: $route.fullPath == item.link }"
            @click="handleLink(item, idx)"
          >
            <div class="menu-info">
              <i :class="item.icon"></i>
              {{ item.name }}
            </div>
            <i
              class="bi bi-caret-down-fill"
              v-if="item.submenus && item.submenus.length > 0"
              style="text-align: right"
            ></i>
          </div>
          <div class="submenu-wrapper" ref="submenus">
            <div
              class="submenus"
              v-if="item.submenus && item.submenus.length > 0"
            >
              <div
                v-for="(submenu, sidx) in item.submenus"
                :key="'sitem_' + sidx"
              >
                <a
                  href="#"
                  class="submenu"
                  v-if="submenu.link == '/accounts/signout'"
                  @click="handleSignout"
                  >{{ submenu.name }}</a
                >
                <nuxt-link v-else :to="submenu.link" class="submenu">
                  {{ submenu.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Mutation } from "nuxt-property-decorator";
import { sidemenus } from "../utils/utils";
import { namespaced } from "../utils/utils";
import { NS_USER } from "../utils/store/namespace.names";
import { SET_TOKEN_ERROR } from "../utils/store/mutation.names";

@Component({
  name: "Sidebar",
  components: {},
})
export default class Sidebar extends Vue {
  @Mutation(namespaced(NS_USER, SET_TOKEN_ERROR)) setTokenError;

  sidemenus = sidemenus;
  reportExpand = false;
  accountDetailExpand = false;

  handleLink(item, idx) {
    if (item.submenus && item.submenus.length > 0) {
      var currentMenu = this.$refs.submenus[idx];
      currentMenu.classList.add("show");
    } else {
      this.$router.push(item.link);
    }
    for (var i = 0; i < this.sidemenus.length; i++) {
      if (i != idx) {
        this.$refs.submenus[i].classList.remove("show");
      }
    }
  }

  handleSignout() {
    try {
      this.setTokenError();
    } catch (e) {}

    location.href = "/signin";
  }

  mounted() {
    var currentPath = this.$route.path;
  }
}
</script>

<style scoped lang="scss">
.left-menu {
  height: 100vh;
  width: 250px;
  border-right: 2px solid #f1f1f1;
}
.logo {
  width: 50%;
  margin: 0 auto;
  img {
    margin-top: 20px;
  }
}
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 50px;
  .menu {
    padding-left: 20px;
    padding-right: 10px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
    .menu-info {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    i {
      font-size: 20px;
    }
  }
}

.submenu-wrapper {
  display: none;
  .submenus {
    width: 100%;
    display: flex;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .submenu {
      height: 30px;
      padding-left: 40px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: black;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
}

.show {
  display: block !important;
}

.active {
  background-color: #f1f1f1;
}
</style>
