<template>
  <div>
    <h1>Evest Islamic</h1>
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
          <label>Email</label>
          <input v-model="formData.email" type="email" placeholder="Email" />
        </div>
        <div class="form-input">
          <label>Country</label>
          <vue-country-code
            :enabledCountryCode="true"
            :dropdownOptions="{ disabledDialCode: true }"
            :disabled="true"
            @onSelect="handleSelectedCountry"
          >
          </vue-country-code>
        </div>
        <div class="form-input">
          <label>Phone number</label>
          <input
            v-model="formData.phone"
            type="text"
            placeholder="Phone number"
          />
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
  EVEST_SIGNUP,
  EXNESS_SIGNUP,
  FLAGEDU_SIGNUP,
  FETCH_CREATIVE_DETAILS,
} from "../../utils/store/action.names";

@Component({
  name: "Islamic",
  components: {},
  layout: "page-layout",
})
export default class Islamic extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, EVEST_SIGNUP)) evestSignup;
  @Action(namespaced(NS_THIRD_PARTY, EXNESS_SIGNUP)) exnessSignup;
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP)) flageduSignup;

  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    password: "@Flagedu2023",
    ci: "",
    uai: "",
    ani: "",
    interest: "Evest-Islamic",
    source: "Evest-Islamic",
  };

  handleSelectedCountry({ name, iso2, dialCode }) {
    this.formData.countryCode = iso2;
  }

  handleFormSubmit() {
    this.formData["user_ip"] = this.user_ip;
    this.evestSignup(this.formData)
      .then((d) => {
        console.log(d);
        if (this.formData.coupon !== "") {
          var msg2 = `<div class='t-custom-class'><div>شكرا لك تم استلام القسيمه بنجاح</div></div>`;
          this.$toast.success(msg2);
        }
        var loginUrl = d.login_url;
        location.href = loginUrl;
        //   this.$router.push({
        //     name: "thank-you",
        //     query: { redirect_uri: loginUrl },
        //   });
      })
      .catch((error) => {
        // Handle error here
        console.error("Error occurred during signup:", error);
        // You can add your error handling logic here, such as showing a toast message or logging the error
        this.handleSignupError(error); // Call another function to handle the error
      });
  }

  handleSignupError() {
    this.formData["user_ip"] = this.user_ip;

    this.flageduSignup(this.formData).then((d) => {
      console.log(d);
      if (this.formData.coupon !== "") {
        var msg2 = `<div class='t-custom-class'><div>شكرا لك تم استلام القسيمه بنجاح</div></div>`;
        this.$toast.success(msg2);
      }
      // var loginUrl = d.login_url;
      // location.href = loginUrl;
      this.$router.push({
        name: "thanks2",
        // query: { redirect_uri: loginUrl },
      });
    });
  }

  async asyncData({ route, $axios, store, error, req }) {
    var user_ip = "104.28.198.135";
    if (process.server) {
      const headers = req && req.headers ? Object.assign({}, req.headers) : {};
      // const xForwardedFor = headers["x-forwarded-for"];
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var brand = "evest";
    var creative_name = "Evest Islamic";
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
}
</style>
