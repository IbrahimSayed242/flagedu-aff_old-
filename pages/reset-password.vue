<template>
  <div class="container">
    <div
      class="auth-wrapper d-flex justify-content-center align-items-center py-5"
    >
      <div class="card-wrapper">
        <div class="text-center mb-3">
          <img
            v-if="step === 0"
            src="/images/logo.png"
            alt="logo"
            class="auth-logo mb-4"
          />
          <img
            v-if="step === 1"
            src="/images/success.png"
            alt="logo"
            class="mb-4"
            height="80"
          />

          <h1 v-if="step === 0 && stage === 1" class="text-white fw-semibold">
            Verification
          </h1>
          <h1 v-if="step === 0 && stage === 2" class="text-white fw-semibold">
            Forgot Password
          </h1>
          <h1 v-if="step === 1" class="text-white fw-semibold">Successful</h1>
        </div>

        <ValidationObserver v-slot="{ invalid }" v-if="step === 0">
          <form
            method="post"
            name="myform"
            class="signin_validate"
            @submit.prevent="handleForgetPassword"
          >
            <p
              v-if="stage === 1"
              class="text-secondary text-center px-0 px-md-4"
            >
              Enter your 6-digit code received on your email.
            </p>
            <p v-else-if="stage === 2" class="text-secondary text-center">
              Set a new password for your account to log in and access all the
              features.
            </p>

            <div
              v-if="stage === 1"
              class="mt-4 mb-2 d-flex justify-content-center align-items-center otp-input-wrapper"
            >
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                separator=""
                :num-inputs="6"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-complete="handleOnComplete"
              />
            </div>

            <ValidationProvider
              vid="password"
              :rules="{ required }"
              v-slot="{ errors }"
              tag="div"
              v-if="stage === 2"
              class="mb-4"
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
                  placeholder="New password"
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
              v-if="stage === 2"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="password"
                  name="Confirm Password"
                  ref="newPasswordInput"
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
                    ? "Password mismatch"
                    : errors[0]
                }}
              </small>
            </ValidationProvider>

            <div class="row d-flex justify-content-between mt-4 mb-2">
              <div class="mb-3 mb-0" v-if="error_msg">
                <p class="error" v-html="error_msg"></p>
              </div>

              <div
                class="mb-2 d-flex justify-content-center align-items-center text-active timer"
                v-if="stage === 1"
              >
                <span class="minute">00</span>:<span class="second">{{
                  countDown > 9 ? countDown : "0" + countDown
                }}</span>
              </div>

              <p
                v-if="stage === 1"
                class="text-secondary text-center resend-code"
              >
                Didn't receive a code!
                <a
                  href="#"
                  class="text-active"
                  @click.prevent="handleCodeResend"
                  :class="disableResend ? 'disable-link' : ''"
                >
                  Resend</a
                >
              </p>
            </div>

            <button
              v-if="stage === 1"
              @click="handleVerifyCodeForForgetPassword"
              class="btn btn-primary form-button mt-1"
              type="button"
            >
              {{ loading ? "Please wait..." : "Continue" }}
            </button>

            <button
              v-else-if="stage === 2"
              type="submit"
              class="btn btn-primary form-button mt-4"
              :disabled="invalid"
            >
              {{ loading ? "Please wait..." : "Reset Password" }}
            </button>
          </form>
        </ValidationObserver>
        <p class="text-secondary text-center px-0 px-md-4" v-if="step === 1">
          Your password has been successfully reset
        </p>
        <p class="have-account text-center text-white">
          Back to Login?
          <NuxtLink to="/signin" class="text-active">Sign In</NuxtLink>
        </p>
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
} from "nuxt-property-decorator";
import { NS_USER } from "../utils/store/namespace.names";
import {
  SEND_VERIFICATION_CODE,
  FORGET_PASSWORD,
  VERIFY_CODE_FOR_FORGET_PASSWORD,
} from "../utils/store/action.names";
import { namespaced } from "../utils/utils";

@Component({
  name: "ResetPassword",
  layout: "auth-layout",
})
export default class ResetPassword extends Vue {
  @Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;
  @Action(namespaced(NS_USER, FORGET_PASSWORD)) forgetPassword;
  @Action(namespaced(NS_USER, VERIFY_CODE_FOR_FORGET_PASSWORD))
  verifyCodeForForgetPassword;

  error_msg = "";
  email = "";
  mode = "";
  step = 0;
  stage = 1;
  showPasswordOne = false;
  showPasswordTwo = false;
  loading = false;
  countDown = 60;
  disableResend = true;

  formData = {
    code: "",
    password: "",
    password2: "",
  };

  verify_error_msg = "";

  handleOnComplete(val) {
    this.formData.code = val;
  }

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
      this.$refs.newPasswordInput.type = "text";
    } else {
      this.$refs.newPasswordInput.type = "password";
    }
  }

  handleVerifyCodeForForgetPassword() {
    this.loading = true;

    if (this.formData.code.length < 1) {
      this.loading = false;
      var msg = `<div class='t-custom-class'><div>أدخل رمز otp!</div></div>`;
      this.$toast.error(msg);
      return false;
    } else {
      this.countDown = 0;
      this.countDownTimer();
      this.disableResend = false;
    }

    let data = {
      email: this.email,
      code: this.formData.code,
    };

    this.verifyCodeForForgetPassword(data)
      .then((data) => {
        this.loading = false;
        let verifyStatus = data.verify_status;
        if (verifyStatus == true) {
          var msg = `<div class='t-custom-class'><div>تم مطابقة OTP بنجاح!</div></div>`;
          this.$toast.success(msg);
          this.stage = 2;
        } else {
          var msg = `<div class='t-custom-class'><div>OTP غير صحيح!</div></div>`;
          this.$toast.error(msg);
          this.verify_error_msg = data.verify_error_msg;
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
          var msg = `<div class='t-custom-class'><div>هناك خطأ ما!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  handleForgetPassword() {
    this.loading = true;
    this.formData["email"] = this.email;
    this.forgetPassword(this.formData)
      .then((data) => {
        this.loading = false;
        var msg = `<div class='t-custom-class'><div>تم تغيير كلمة المرور الخاصة بك بنجاح!</div></div>`;
        this.$toast.success(msg);
        this.step = 1;
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
          var msg = `<div class='t-custom-class'><div>هناك خطأ ما!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  handleCodeResend() {
    this.sendVerificationCode({
      email: this.email,
      reason: "forget_password",
    })
      .then((data) => {
        this.countDown = 60;
        this.countDownTimer();
        this.disableResend = true;
        var msg = `<div class='t-custom-class'><div>تم إرسال رمز التحقق بنجاح!</div></div>`;
        this.$toast.success(msg);
      })
      .catch((e) => {
        this.error_msg = "";
        var err_msg = "";
        for (const [key, value] of Object.entries(e.response.data)) {
          const err = `<p>${value}</p>`;
          err_msg = err_msg + err;
        }
        this.error_msg = err_msg;
      });
  }

  countDownTimer() {
    if (this.countDown > 0) {
      setTimeout(() => {
        this.countDown -= 1;
        this.countDownTimer();
      }, 1000);
    } else {
      this.disableResend = false;
    }
  }

  created() {
    this.countDownTimer();
  }

  mounted() {
    if (this.$route.query) {
      this.email = this.$route.query.email;
      this.mode = this.$route.query.mode;
    }
    if (this.email === undefined || this.mode === undefined) {
      this.$router.push({ name: "signin" });
    }
  }

  head() {
    return {
      title: "Reset Password",
    };
  }
}
</script>

<style lang="scss" scoped>
.text-secondary {
  margin-bottom: 2rem;
}

.timer {
  font-size: 16px;

  .second {
    width: 20px;
  }
}

.disable-link {
  pointer-events: none;
}
.resend-code {
  cursor: pointer;
}
</style>
