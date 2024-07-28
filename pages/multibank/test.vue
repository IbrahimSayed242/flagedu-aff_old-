<template>
  <div>
    <div>
      <div class="d-flex justify-content-center mt-3">
        <div class="mt-5">
          <div class="d-flex justify-content-center">
            <img
              src="https://s6.imgcdn.dev/RmbvS.png"
              width="200"
              class=""
              style="object-fit: contain"
            />
          </div>
          <h5 class="text-center" style="color: #010d4b">
            Open an account and start trading in 2 minutes!
          </h5>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-2">
        <div
          class="row rounded-4 bg-light cont m-3 py-3 px-0 col-lg-5 col-md-7 col-sm-11 shadow"
        >
          <div class="mt-3 mt-lg-0">
            <form @submit.prevent="handleFormSubmit" class="m-2">
              <div class="row">
                <div class="col-lg-6 col-sm-12 form-group">
                  <input
                    type="text"
                    v-model="formData.firstName"
                    name="name"
                    class="form-control1"
                    id="f-name"
                    placeholder="First Name*"
                    required
                    style="color: #010d4b"
                  />
                </div>
                <div class="col-lg-6 col-sm-12 form-group mt-2 mt-md-0">
                  <input
                    type="text"
                    v-model="formData.lastName"
                    class="form-control1"
                    name="name"
                    id="l-name"
                    placeholder="last Name*"
                    required
                    style="color: #010d4b"
                  />
                </div>
              </div>

              <div class="form-group mt-2 mt-md-0">
                <input
                  type="email"
                  v-model="formData.email"
                  class="form-control1"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  required
                  style="color: #010d4b"
                />
              </div>

              <div class="form-group mt-2">
                <input
                  type="text"
                  id="phone"
                  v-model="formData.phone"
                  class="form-control1"
                  data-mdb-input-mask="+48 999-999-999"
                  style="color: #010d4b"
                  placeholder="+00 0000-000-000"
                />
              </div>
              <div class="form-input">
                <input
                  type="text"
                  placeholder="قسيمة (اختياري)"
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>

              <div
                class="d-flex justify-content-center row platforms-container"
              >
                <label class=""> Select Trading Platform<sup>*</sup></label>
                <div class="bg-platforms2 col-5 rounded">
                  <label class="m-1 p-1 text-center"
                    ><img
                      src="https://s6.imgcdn.dev/RgVOq.png"
                      width="50"
                      alt="MT4"
                      style="object-fit: contain"
                    />
                    <p>Real Money Account MT4</p></label
                  >
                </div>

                <div class="bg-platforms2 col-5 rounded">
                  <label class="m-1 p-1 text-center">
                    <img
                      src="https://s6.imgcdn.dev/RgfEB.png"
                      class=""
                      width="50"
                      alt="MT5"
                      style="object-fit: contain"
                    />
                    <p>Real Money Account MT5</p></label
                  >
                </div>
              </div>

              <div class="d-flex justify-content-center mt-4">
                <a
                  v-on:click="isHidden = !isHidden"
                  class="btn btn-outline-light"
                >
                  Not sure? Check out our comparison table
                </a>
              </div>

              <div v-if="!isHidden" class="d-flex justify-content-center">
                <img
                  src=" https://s6.imgcdn.dev/RgWiu.webp"
                  class=""
                  style="object-fit: contain"
                />
              </div>

              <span class="text-muted">
                <p class="fx m-2">
                  By submitting this form, I acknowledge that I have read,
                  understood and agree to the Client Agreement and give my
                  consent for MultiBank Group to contact me for marketing
                  purposes.
                </p>
              </span>
              <hr />
              <div class="row d-flex justify-content-center">
                <i class="bi bi-google icon-c m-2"></i>
                <i class="bi bi-facebook icon-c m-2"></i>
                <i class="bi bi-linkedin icon-c m-2"></i>
              </div>

              <div class="form-group mt-2"></div>
              <div class="my-3">
                <div class="text-center">
                  <button
                    class="f-button p-2"
                    type="submit"
                    style="color: #010d4b"
                  >
                    REAL MONEY ACCOUNT
                  </button>
                  <span class="text-muted">
                    <p class="fx m-2">
                      You will now be onboarded through MEX Atlantic
                      Corporation, a wholly owned subsidiary of MultiBank Group,
                      with Company No. 354945 (License Number: 1811316) and
                      regulated by CIMA.
                    </p>
                  </span>
                  <div class="form-input err-msg-container">
                    <div
                      class=""
                      v-for="(item, idx) in err_msg"
                      :key="'error_' + idx"
                    >
                      * {{ item }}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3 row text-center">
        <p class="fx m-2 col-8 text-center text-muted">
          MEX Atlantic Corporation, a wholly owned subsidiary under MEX Group
          Worldwide Limited, Company No. 354945 is regulated by CIMA (License
          Number 1811316). High Risk Investment Warning: Trading foreign
          exchange and/or contracts for differences on margin carries a high
          level of risk, and may not be suitable for all investors. The
          possibility exists that you could sustain a loss in excess of your
          deposited funds. Please refer to specific risk disclosure during the
          account opening process.
        </p>
      </div>
    </div>
    <div>
      <!-- <form @submit.prevent="handleFormSubmit">
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
      </form> -->
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  MULTIBANK_SIGNUP,
  FETCH_CREATIVE_DETAILS,
} from "../../utils/store/action.names";

@Component({
  name: "MultibankTest",
  components: {},
  layout: "page-layout",
})
export default class MultibankTest extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, MULTIBANK_SIGNUP)) multibankSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ci: "",
    uai: "",
    ani: "",
    interest: "MultiBank",
  };
  err_msg = [];

  handleFormSubmit() {
    this.err_msg = [];

    this.formData["user_ip"] = this.user_ip;
    this.multibankSignup(this.formData)
      .then((d) => {
        console.log(d);
        var loginUrl = d.login_url;
        location.href = loginUrl;
        //       this.$router.push({
        //         name: "thank-you",
        //         query: { redirect_uri: loginUrl },
        //       });
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

    var brand = "multibank";
    var creative_name = "Multibank Test";
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

<style>
.cont {
  border: 0.0625rem solid #bb914a;
  border-radius: 1.0625rem;
}

.f-button {
  background-image: linear-gradient(
    90deg,
    #ffe098 0%,
    #ebbe64 25%,
    #bb914a 50%,
    #ebbe64 75%,
    #ffe098 100%
  );
  background-position: left center;

  border: 0.0625rem solid #bb914a;
  border-radius: 0.4375rem;
  background-color: #bb914a;
  background-size: 200% auto;
  -webkit-transition: background-position 300ms ease;
  transition: background-position 300ms ease;
  cursor: pointer;
  text-align: center;
  width: 100%;
}

.f-button:hover {
  background-image: linear-gradient(
    90deg,
    #ffe098 0%,
    #ebbe64 25%,
    #bb914a 50%,
    #ebbe64 75%,
    #ffe098 100%
  );
  background-position: right center;

  border: 0.0625rem solid #bb914a;
  border-radius: 0.4375rem;
  background-color: #bb914a;
}

.err-msg-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: red;
}

.form-control1 {
  background-color: #fff;
  border: 0.0625rem solid #b7b8c6;
  border-radius: 0.3125rem;
  -webkit-box-shadow: 0 0.1875rem 0.6875rem rgba(16, 57, 175, 0.0588235294);
  box-shadow: 0 0.1875rem 0.6875rem rgba(16, 57, 175, 0.0588235294);
  display: block;

  font: inherit;
  font-size: 1rem;
  font-weight: normal;
  color: #010d4b;
  outline: none;
  writing-mode: horizontal-tb !important;
  padding-block: 1px;
  padding-inline: 2px;
  margin: 5px;
  width: 100%;
  padding: 5px;
}
.fx {
  font-size: 12px;
}
.form-control1:hover {
  border: 0.0625rem solid #313ab9;
}
.form-control1:active {
  border: 0.0625rem solid #313ab9;
}
.form-control1::before {
  border: 0.0625rem solid #313ab9;
}
.icon-c {
  font-size: 20px;
  color: #ffffff;
  float: left;
  width: 44px;
  height: 44px;
  background: #010d4b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.icon-c:hover {
  font-size: 20px;
  color: #010d4b;

  background-image: linear-gradient(
    90deg,
    #ffe098 0%,

    #bb914a 50%
  );
}
.plat-img2 {
  display: none;
}

.bg-platforms2:hover {
  background-color: #010d4b;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
}

.btn-outline-light {
  color: #000;
  border-color: #010d4b;
}
.btn-outline-light:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  background-color: #010d4b !important;
  border-color: #010d4b;
}

select {
  background-color: #fff;
  border: 0.0625rem solid #b7b8c6;
  border-radius: 0.3125rem;
  -webkit-box-shadow: 0 0.1875rem 0.6875rem rgba(16, 57, 175, 0.0588235294);
  box-shadow: 0 0.1875rem 0.6875rem rgba(16, 57, 175, 0.0588235294);
  display: block;

  font: inherit;
  font-size: 1rem;
  font-weight: normal;
  color: #010d4b;
  outline: none;
  writing-mode: horizontal-tb !important;
  padding-block: 1px;
  padding-inline: 2px;

  width: 100%;
  padding: 5px;
}
</style>
