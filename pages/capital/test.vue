<template>
  <div>
    <h1>Capital Test</h1>
    <div>
      <form @submit.prevent="handleFormSubmit">
        <div class="form-input">
          <label>First name</label>
          <input
            v-model="formData.firstName"
            type="text"
            placeholder="First name"
          />
        </div>
        <div class="form-input">
          <label>Last name</label>
          <input
            v-model="formData.lastName"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div class="form-input">
          <label>Phone</label>
          <input v-model="formData.phone" type="text" placeholder="Phone" />
        </div>
        <div class="form-input">
          <label>Email</label>
          <input v-model="formData.email" type="email" placeholder="Email" />
        </div>
        <div class="form-input err-msg-container">
          <div class="" v-for="(item, idx) in err_msg" :key="'error_' + idx">
            * {{ item }}
          </div>
        </div>
        <div class="form-input">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  CAPITAL_SIGNUP,
  FETCH_CREATIVE_DETAILS,
} from "../../utils/store/action.names";

@Component({
  name: "CapitalTest",
  components: {},
  layout: "page-layout",
})
export default class CapitalTest extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, CAPITAL_SIGNUP)) capitalSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ci: "",
    uai: "",
    ani: "",
  };
  err_msg = [];

  handleFormSubmit() {
    this.err_msg = [];

    this.formData["user_ip"] = this.user_ip;
    this.capitalSignup(this.formData)
      .then((d) => {
        console.log(d);
        var loginUrl = d.login_url;
        location.href = loginUrl;
        this.$router.push({
          name: "thank-you",
          query: { redirect_uri: loginUrl },
        });
      })
      .catch((e) => {
        this.err_msg = [];
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            this.err_msg.push(value);
          }
        } else {
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  async asyncData({ route, $axios, store, error, req }) {
    var user_ip = "104.28.198.135";
    if (process.server) {
      const headers = req && req.headers ? Object.assign({}, req.headers) : {};
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var brand = "capital";
    var creative_name = "Capital Test";
    var ci = null;

    const getCreative = await store
      .dispatch(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS), {
        brand: brand,
        creative_name: creative_name,
      })
      .then((data) => {
        ci = data.id;
      })
      .catch((e) => {});

    return { ci, user_ip };
  }

  mounted() {
    this.formData.ci = this.$route.query.ci ? this.$route.query.ci : null;
    if (!this.formData.ci || this.formData.ci != this.ci) {
      this.formData.ci = this.ci;
    }
    this.formData.uai = this.$route.query.uai ? this.$route.query.uai : null;
    this.formData.ani = this.$route.query.ani ? this.$route.query.ani : null;
  }
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  .form-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      height: 35px;
      width: 300px;
      padding-left: 10px;
    }
  }
  .err-msg-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: red;
  }
}
</style>
