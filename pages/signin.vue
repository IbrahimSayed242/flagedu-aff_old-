<template>
  <div class="container">
    <div
      class="auth-wrapper d-flex justify-content-center align-items-center py-5"
    >
      <div class="card-wrapper">
        <div class="text-center mb-5">
          <img src="/images/logo.png" alt="logo" class="auth-logo mb-4" />
          <h1 class="text-white fw-semibold">Affiliate Sign in</h1>
        </div>
        <ValidationObserver v-slot="{ invalid }" ref="form">
          <form method="post" name="signinForm" @submit.prevent="handleLogin">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="text"
                  name="Username"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Enter email"
                  v-model="formData.username"
                />
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              rules="required|min:8"
              v-slot="{ errors }"
              tag="div"
              class="mb-4"
            >
              <div class="form-input mb-1">
                <input
                  type="password"
                  name="Password"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Password"
                  v-model="formData.password"
                />
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <div class="d-flex flex-column justify-content-between">
              <div>
                <NuxtLink class="form-forget-password" to="/forgot-password">
                  Forget password
                </NuxtLink>
              </div>
              <div class="mt-3" v-if="formData.username">
                <NuxtLink
                  class="form-forget-password"
                  :to="{
                    name: 'validate-otp',
                    query: {
                      email: formData.username,
                      mode: 'verification',
                      step: 1,
                    },
                  }"
                >
                  Answer questions to speed up verification process.
                </NuxtLink>
              </div>
            </div>
            <div
              class="form-input text-center error my-2"
              v-if="error_msg"
              v-html="error_msg"
            ></div>

            <button
              type="submit"
              class="btn btn-primary form-button"
              :disabled="invalid"
            >
              {{ loading ? "Loading" : "Signin" }}
            </button>

            <!-- <div class="social-auth">
              <div class="div-or">Signin or</div>
              <div class="social-icons">
                <div class="google-icon" @click.prevent="loginWithGoogle">
                  <i class="bi bi-google"></i>
                </div>
                <div class="fb-icon" @click.prevent="loginWithFacebook">
                  <i class="bi bi-facebook"></i>
                </div>
              </div>
            </div> -->

            <p class="have-account text-center text-white">
              Don't have an account?
              <NuxtLink to="/signup" class="text-active">Sign Up</NuxtLink>
            </p>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Component,
  Vue,
  Getter,
  Action,
  Mutation,
  namespace,
} from "nuxt-property-decorator";
import { namespaced } from "../utils/utils";
import { NS_USER } from "../utils/store/namespace.names";
import { SIGNIN } from "../utils/store/action.names";
import { SET_TOKEN_ERROR } from "../utils/store/mutation.names";

@Component({
  name: "Signin",
  components: {},
  layout: "auth-layout",
})
export default class Signin extends Vue {
  @Action(namespaced(NS_USER, SIGNIN)) signin;
  // @Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;

  @Mutation(namespaced(NS_USER, SET_TOKEN_ERROR)) setTokenError;

  error_msg = "";
  loading = false;

  formData = {
    username: "",
    password: "",
  };
  // showPasswordOne = false;

  // loginWithGoogle() {
  //   window.location = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?protocol=oauth2&response_type=code&access_type=offline&client_id=559204491251-9rdnbjf2n27ks6u5klvef778icg1j4rm.apps.googleusercontent.com&redirect_uri=https://api.flagedu.com/socialauth/google&scope=openid%20profile%20email%20email%20profile&code_challenge_method&prompt=select_account&service=lso&o2v=1&flowName=GeneralOAuthFlow`;
  // }

  // loginWithFacebook() {
  //   window.location = `https://www.facebook.com/v16.0/dialog/oauth?client_id=1419617315245410&redirect_uri=https://flagedu.com/socialauth/facebook`;
  // }

  // step = 1;
  userProfile = null;

  commonSendVerificationCode(data) {
    // this.sendVerificationCode({
    //   email: data.email,
    //   reason: "verify",
    // }).then((data) => {
    //   if (popup == true) {
    //     var msg = `<div class='t-custom-class'><div>Verification code has been resent to your email successfully!</div></div>`;
    //     this.$toast.success(msg);
    //   }
    // });
  }

  handleLogin() {
    this.loading = true;
    this.signin(this.formData)
      .then((data) => {
        let token = data.token;
        this.userProfile = data;

        if (
          token === null &&
          data.is_email_verified == true &&
          data.user_type == 1
        ) {
          this.$router.push({
            name: "validate-otp",
            query: { email: data.email, mode: "verification", step: 1 },
          });
        }

        if (token === null && data.is_email_verified == false) {
          this.error_msg = `<p>You can't signin!</p>`;
          this.setTokenError();
        } else if (data.user_type != 1) {
          this.error_msg = `<p>You can't signin!</p>`;
          this.setTokenError();
        } else {
          this.$router.push("/");
        }
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
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  head() {
    return {
      title: "Signin",
    };
  }
}
</script>

<style lang="scss" scoped>
.form-remember-me {
  font-weight: 400;
  font-size: 14px;
  color: $primary-color;

  @media (max-width: 350px) {
    font-size: 12px !important;
  }
}
.form-forget-password {
  font-size: 14px;
  font-weight: 400;
  color: #eb794f;

  @media (max-width: 350px) {
    font-size: 12px;
  }
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
