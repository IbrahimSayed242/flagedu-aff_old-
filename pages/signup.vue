<template>
  <div class="container">
    <div
      class="auth-wrapper d-flex justify-content-center align-items-center py-5"
    >
      <div class="card-wrapper">
        <div class="text-center mb-5">
          <img src="/images/logo.png" alt="logo" class="auth-logo mb-4" />
          <h1 class="text-white fw-semibold">Signup</h1>
        </div>

        <ValidationObserver
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="handleSignup"
        >
          <ValidationProvider
            :rules="{ required: true }"
            v-slot="{ errors }"
            tag="div"
            class="mb-3"
          >
            <div class="form-input mb-1">
              <input
                type="text"
                name="Full name"
                :class="{
                  'form-control': true,
                  redborder: errors[0],
                }"
                class="form-control"
                placeholder="Full name"
                v-model="formData.full_name"
              />
            </div>
            <small v-if="errors.length" class="error">
              {{ errors[0] }}
            </small>
          </ValidationProvider>

          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            tag="div"
            class="mb-3"
          >
            <div class="form-input mb-1">
              <input
                type="email"
                name="Email"
                :class="{
                  'form-control': true,
                  redborder: errors[0],
                }"
                class="form-control"
                placeholder="Email"
                v-model="formData.email"
              />
            </div>
            <small v-if="errors.length" class="error">
              {{ errors[0] }}
            </small>
          </ValidationProvider>

          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            tag="div"
            class="mb-3"
          >
            <select
              v-model="formData.country"
              class="form-select country-select"
              name="Country"
            >
              <option value="">Select country</option>
              <option
                v-for="(item, idx) in countries"
                :key="'country_' + idx"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
            <small v-if="errors.length" class="error">
              {{ errors[0] }}
            </small>
          </ValidationProvider>

          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            tag="div"
            class="mb-3"
          >
            <div class="form-input mb-1">
              <input
                type="text"
                name="Phone"
                :class="{
                  'form-control': true,
                  redborder: errors[0],
                }"
                class="form-control"
                placeholder="Phone number"
                v-model="formData.phone"
              />
            </div>
            <small v-if="errors.length" class="error">
              {{ errors[0] }}
            </small>
          </ValidationProvider>

          <ValidationProvider
            vid="password"
            ref="password"
            rules="required"
            v-slot="{ errors }"
            tag="div"
            class="mb-3"
          >
            <div class="form-input mb-1">
              <input
                type="password"
                name="Password"
                ref="passwordOneInput"
                :class="{
                  'form-control': true,
                  redborder: errors[0],
                }"
                class="form-control"
                placeholder="Password"
                v-model="formData.password"
              />
              <span @click="toggleShowOne"> </span>
            </div>
            <small v-if="errors.length" class="error">
              {{ errors[0] }}
            </small>
          </ValidationProvider>

          <ValidationProvider
            vid="password2"
            rules="required|confirmed:password"
            v-slot="{ errors }"
            tag="div"
            class="mb-4"
          >
            <div class="form-input mb-1">
              <input
                type="password"
                name="Confirm Password"
                ref="passwordTwoInput"
                :class="{
                  'form-control': true,
                  redborder: errors[0],
                }"
                class="form-control"
                placeholder="Retype password"
                v-model="formData.password2"
              />
              <span @click="toggleShowTwo"> </span>
            </div>
            <small v-if="errors.length" class="error">
              {{
                errors.length && formData.password !== formData.password2
                  ? "Password not matched"
                  : errors[0]
              }}
            </small>
          </ValidationProvider>

          <div class="form-check d-flex">
            <input
              type="checkbox"
              class="form-check-input me-2"
              v-model="formData.is_agreed"
            />
            <label class="form-check-label text-white">
              I agree to the
              <a
                href="/common/terms-and-conditions"
                target="_blank"
                class="text-active"
              >
                Terms of Service
              </a>
              and
              <a
                href="/common/privacy-policy"
                target="_blank"
                class="text-active"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          <div
            class="form-input text-center error my-2"
            v-if="error_msg"
            v-html="error_msg"
          ></div>

          <div class="d-grid">
            <button
              type="submit"
              :disabled="invalid"
              class="btn btn-primary btn-block py-2 fw-semibold"
            >
              Create Account
            </button>
          </div>
        </ValidationObserver>

        <div class="mt-4 text-center">
          <p class="text-white">
            Already have an account?
            <router-link to="/signin" class="text-active fw-semibold">
              Sign In
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Component,
  Vue,
  Action,
  Getter,
  Mutation,
} from "nuxt-property-decorator";
import { namespaced } from "../utils/utils";
import { NS_USER, NS_COMMON } from "../utils/store/namespace.names";
import { SIGNUP, FETCH_COUNTRY } from "../utils/store/action.names";

@Component({
  name: "Signup",
  components: {},
  layout: "auth-layout",
})
export default class Signup extends Vue {
  @Action(namespaced(NS_COMMON, FETCH_COUNTRY)) fetchCountry;
  @Action(namespaced(NS_USER, SIGNUP)) signup;

  formData = {
    full_name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    password2: "",
    is_agreed: "",
    is_affiliate: true,
  };
  error_msg = "";
  password_error = false;
  loading = false;

  showPasswordOne = false;
  showPasswordTwo = false;

  toggleShowOne() {
    this.showPasswordOne = !this.showPasswordOne;
    if (this.showPasswordOne == true) {
      this.$refs.passwordOneInput.type = "text";
    } else {
      this.$refs.passwordOneInput.type = "password";
    }
  }
  toggleShowTwo() {
    this.showPasswordTwo = !this.showPasswordTwo;
    if (this.showPasswordTwo == true) {
      this.$refs.passwordTwoInput.type = "text";
    } else {
      this.$refs.passwordTwoInput.type = "password";
    }
  }

  handleSignup() {
    this.loading = true;

    if (this.formData.is_agreed == false) {
      var msg = `<div class='t-custom-class'>You Have To Agree To Our Terms Of Service<div></div></div>`;
      this.$toast.error(msg);
      this.loading = false;
      return false;
    }
    const userData = { ...this.formData };
    delete userData["password2"];
    userData["user_ip"] = this.user_ip;

    if (this.$route.query && this.$route.query.referrer) {
      userData["affiliate_referrer"] = this.$route.query.referrer;
    } else {
      userData["affiliate_referrer"] = null;
    }

    this.signup(userData)
      .then((data) => {
        this.loading = false;

        this.$router.push({
          name: "validate-otp",
          query: {
            email: this.formData.email,
            mode: "verification",
          },
        });
      })
      .catch((e) => {
        this.loading = false;
        this.error_msg = "";
        var err_msg = "";
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            const err = `<p>${value}</p>`;
            err_msg = err_msg + err;
          }
          this.error_msg = err_msg;
        } else {
          var msg = `<div class='t-custom-class'><div>There was an error!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  async asyncData({ route, $axios, store, req }) {
    var user_ip = "104.28.198.135";
    if (process.server) {
      const headers = req && req.headers ? Object.assign({}, req.headers) : {};
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var countries = [];
    const countryData = await store
      .dispatch(namespaced(NS_COMMON, FETCH_COUNTRY))
      .then((data) => {
        countries = data;
      })
      .catch((e) => {
        console.log(e);
      });

    return {
      user_ip,
      countries,
    };
  }

  mounted() {}

  head() {
    return {
      title: "Signup",
    };
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: #eb794f;
}
.help-text {
  color: #fff;
}
.form-check-input {
  margin-top: 0.26em;
}
.country-select {
  background-color: transparent !important;
  border-radius: 50px;
  color: grey;
}

.social-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .div-or {
    padding-top: 20px;
    color: white;
  }
  .social-icons {
    display: flex;
    gap: 20px;
    .google-icon {
      font-size: 30px;
      color: #4285f4;
      cursor: pointer;
    }
    .fb-icon {
      font-size: 30px;
      color: #3b5998;
      cursor: pointer;
    }
  }
}
</style>
