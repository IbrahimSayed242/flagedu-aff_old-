<template>
  <div>
    <div class="filters">
      <div class="default-link-title">Your affiliate default links</div>
    </div>
    <div class="main-content">
      <div class="afp">
        <Afp :afpData="afp" @close="handleAFPClose" />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Link</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in defaultLinks" :key="'links_' + idx">
            <td>{{ item.brand.name }}</td>
            <td>{{ createLink(item.creative, afp) }}</td>
            <td>
              <button
                class="btn"
                @click="creativeLinkCopy(item.creative, item.afp)"
              >
                <i class="bi bi-clipboard"></i>
                Copy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action, Watch, Getter } from "nuxt-property-decorator";
import { NS_COMMON, NS_USER } from "../utils/store/namespace.names";
import { FETCH_DEFAULT_LINKS } from "../utils/store/action.names";
import { GET_PROFILE } from "../utils/store/getter.names";
import { namespaced, buildParams, deepCopy } from "../utils/utils";

import Afp from "../components/filters/afp";

@Component({
  name: "DefaultLinks",
  components: {
    Afp,
  },
})
export default class DefaultLinks extends Vue {
  @Action(namespaced(NS_COMMON, FETCH_DEFAULT_LINKS)) fetchDefaultLinks;

  @Getter(namespaced(NS_USER, GET_PROFILE)) getProfile;

  get HOST() {
    return this.$config.HOST;
  }

  async creativeLinkCopy(creative, afp) {
    try {
      const link = this.createLink(creative, afp);
      this.$copyText(link);
      this.$toast.success("Link copied successfully!");
    } catch (e) {
      console.log(e);
    }
  }

  async asyncData({ route, $axios, store, error }) {
    var defaultLinks = [];
    var afp = route.query.afp ? route.query.afp : "";

    const getLinks = await store
      .dispatch(namespaced(NS_COMMON, FETCH_DEFAULT_LINKS))
      .then((data) => {
        defaultLinks = data.results;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          error({ statusCode: 404 });
        } else {
          error({ statusCode: 500 });
        }
      });

    return {
      defaultLinks,
      afp,
    };
  }
  handleAFPClose(afp) {
    this.afp = afp;
    var query = deepCopy(this.$route.query);
    query["afp"] = this.afp;
    this.$router.push({ query: query });
  }

  createLink(creative, afp) {
    var ci = creative;
    var uai = this.getProfile.affiliate_id;

    var params = {
      ci: ci,
      uai: uai,
    };

    if (afp) {
      params["afp"] = this.afp;
    }

    var url = this.HOST + `/visit/${buildParams(params)}`;
    return url.replace("api.", "");
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  i {
    font-size: 20px;
  }
  .default-link-title {
    font-size: 16px;
    font-weight: 600;
  }
}
.main-content {
  height: auto;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.btn {
  align-items: center;
  background-color: #01aeab;
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  gap: 10px;
  height: 30px;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid grey;
  border-radius: 8px;
}
</style>
