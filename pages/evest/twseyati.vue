<template>
  <div class="bac">
    <div class="text-dark font-weight-bold" dir="rtl">
      <div v-if="!finish">
        <img
          class="mt-4 p-3 img-Qu"
          src="https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349717/logo_qggbez_wx524w.svg"
          width="200"
          hieght="150 "
        />
        <!-- Quiz content -->
        <div
          class="big d-flex flex-column justify-content-center mt-md-5 mt-1 back-t pt-3 m-auto"
        >
          <!-- Quiz questions -->
          <form class="form-group row m-3 col-lg-6 col-md-7 col-11 m-auto">
            <!-- Question 1 -->
            <div v-show="step === 1" class="cunt">
              <h2 class="m-5 qu">أخبرنا أين تعيش وسنجد لك وسيط مناسب</h2>
              <input
                v-model="country"
                type="text"
                class="form-control col-5 rounded-pill px-4 py-md-4 py-2 fs-5 my-4 bg-light text-dark"
                placeholder="اسم الدولة"
              />
            </div>
            <!-- Question 2 -->
            <div v-show="step === 2" class="invest p-2">
              <h2 class="m-3">ما هو الاستثمار الذي ترغب البدء فيه؟</h2>
              <div class="row d-flex flex-wrap justify-content-center">
                <div
                  v-for="(option, index) in questions[step - 1].options"
                  :key="index"
                  :class="[
                    'col-lg-3',
                    'col-md-4',
                    'col-md-5',
                    'rounded-pill',
                    'bg-light',
                    'm-2',
                    'p-3',
                    'fs-5',
                    'hover',
                    'hover-x-' + (index + 1),
                    { selected: answers[step - 1].includes(option) },
                  ]"
                  @click="toggleOption(index, option)"
                >
                  {{ option }}
                </div>
              </div>
              <p class="m-3">يمكنك اختيار اكثر من واحد</p>
            </div>
            <!-- Question 3 -->
            <div v-show="step === 3" class="money">
              <h2 class="m-3">
                ما هو المبلغ المناسب لك لكي تبدأ الاستثمار اليوم؟
              </h2>
              <div class="row d-flex flex-wrap justify-content-center">
                <div
                  v-for="(option, index) in questions[step - 1].options"
                  :key="index"
                  :class="[
                    'col-lg-3',
                    'col-md-4',
                    'col-md-5',
                    'rounded-pill',
                    'bg-light',
                    'm-2',
                    'p-3',
                    'fs-5',
                    'hover',
                    'align-center',
                    'hover-y-' + (index + 1),
                    { selected: answers[step - 1].includes(option) },
                  ]"
                  @click="toggleOption(index, option)"
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <!-- Thank you message -->
            <div v-show="step === 4" class="thank">
              <h2 class="m-3">شكراً لك</h2>
              <p class="fs-3">اضغط التالي ليتم تحويلك لصفحة التسجيل</p>
            </div>
          </form>

          <!-- Next/Previous buttons -->
          <div class=" ">
            <button
              v-if="step === 1 || step === 2 || step === 3 || step === 4"
              class="next text-dark fs-5 mx-2 my-3"
              @click="nextStep"
            >
              التالي
            </button>

            <button
              v-if="step === 2 || step === 3 || step === 4"
              type="button"
              class="prv1 text-dark fs-5 mx-2 my-3"
              @click="prevStep"
            >
              السابق
            </button>
          </div>
        </div>
      </div>
      <!-- Registration form -->
      <div
        v-show="step === 4 && finish"
        class="form-c text-dark font-weight-bold p-3 vh-100"
        dir="rtl"
      >
        <div id="form" class="text-dark font-weight-bold p-3" dir="rtl">
          <div class="">
            <img
              class="m-2 m-md-5"
              src="https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349717/logo_qggbez_wx524w.svg"
              width="150"
              hieght="120 "
              style="object-fit: contain"
            />
            <!-- Registration form content -->
            <div class="d-flex justify-content-center align-items-center">
              <form
                @submit.prevent="handleFormSubmit"
                class="form-group m-2 m-lg-5 m-md-5 col-lg-9 col-md-12 row bg-form-card p-2 p-lg-5 p-md-5"
              >
                <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                  <label for="name" class="m-2 fs-2">الاسم</label>
                  <input
                    class="col-12 rounded-pill border bordr-dark border-1 px-md-4 py-md-3 fs-md-5 px-2 py-1 fs-6 fs-lg-4 m-md-1"
                    type="text"
                    id="name"
                    v-model="formData.firstName"
                    required
                    placeholder="الاسم"
                  />
                </div>

                <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                  <label for="country " class="m-2 fs-2">اسم العائله</label>
                  <input
                    class="col-12 rounded-pill border bordr-dark border-1 px-md-4 py-md-3 fs-md-5 px-2 py-1 fs-6 fs-lg-4 m-md-1"
                    type="text"
                    id="country"
                    v-model="formData.lastName"
                    required
                    placeholder="اسم العائله"
                  />
                </div>
                <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                  <label for="email" class="m-2 fs-2">البريد الالكتروني</label>
                  <input
                    class="col-12 rounded-pill border bordr-dark border-1 px-md-4 py-md-3 fs-md-5 px-2 py-1 fs-6 fs-lg-4 m-md-1"
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                  <label for="phone" class="m-2 fs-2"> الهاتف</label>
                  <!-- <label>اختر الدولة</label> -->
                  <vue-country-code
                    :enabledCountryCode="true"
                    :dropdownOptions="{ disabledDialCode: true }"
                    :disabled="true"
                    @onSelect="handleSelectedCountry"
                  >
                  </vue-country-code>
                  <input
                    class="col-12 rounded-pill border bordr-dark border-1 px-md-4 py-md-3 fs-md-5 px-2 py-1 fs-lg-4 fs-6 m-md-1"
                    type="text"
                    id="phone"
                    v-model="formData.phone"
                    required
                    placeholder="رقم الهاتف"
                  />
                </div>
                <button
                  class="rounded-pill text-light bg-dark fs-5 mx-auto col-5 p-3 mt-5"
                  type="submit"
                >
                  تسجيل
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
  name: "Twseyati",
  components: {},
  layout: "page-layout",
})
export default class Twseyati extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, EVEST_SIGNUP)) evestSignup;
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP)) flageduSignup;
  @Action(namespaced(NS_THIRD_PARTY, EXNESS_SIGNUP)) exnessSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    ci: "",
    uai: "",
    ani: "",
    password: "@Flagedu2023",
    interest: "Twsyati",
    source: "Twsyati",
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
    var creative_name = "twseyati";
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
  data() {
    return {
      step: 1,
      country: "",
      finish: false,
      questions: [
        {
          question: "ما هو الاستثمار الذي ترغب البدء فيه؟",
          options: ["المعادن", "المؤشرات", "الغاز", "الاسهم"],
        },
        {
          question: "ما هو الاستثمار الذي ترغب البدء فيه؟",
          options: ["المعادن", "المؤشرات", "العملات", "الاسهم", "غير ذلك"],
        },
        {
          question: "ما هو المبلغ المناسب لك لكي تبدأ الاستثمار اليوم؟",
          options: [
            "أقل من 50000 دولار",
            "لغاية 25000 دولار",
            "اقل من 1000 دولار",
            "اقل من 5،000 دولار",
            "اقل من 250 دورلار",
          ],
        },
        {
          question: "ما هو المبلغ المناسب لك لكي تبدأ الاستثمار اليوم؟",
          options: [
            "أقل من 50000 دولار",
            "لغاية 25000 دولار",
            "اقل من 1000 دولار",
            "اقل من 5،000 دولار",
            "اقل من 250 دورلار",
          ],
        },
        {
          question: "ما هو المبلغ المناسب لك لكي تبدأ الاستثمار اليوم؟",
          options: ["أقل من 500000 دولار", "لغاية 25000 دولار"],
        },
      ],
      answers: [
        [], // Answer array for question 1
        [], // Answer array for question 2
        [], // Answer array for question 3
        [], // Answer array for question 4
        [], // Answer array for question 5
        // Add more answer arrays for additional questions if needed
      ],
    };
  }

  nextStep() {
    console.log("Next step method called");
    console.log("Step after next:", this.step);
    if (this.finish) {
      return; // If finish is true, do nothing
    }
    if (this.step < 4) {
      if (this.step === 1 && !this.country) {
        alert("الرّجاء إدخال المعلومات");
        return;
      }
      this.step++;
    } else if (this.step === 4) {
      console.log("Setting finish state to true...");

      this.finish = true;
    }
  }
  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }
  toggleOption(optionIndex, option) {
    // Check if the option is already selected
    const index = this.answers[this.step - 1].indexOf(option);
    if (index === -1) {
      // Option is not selected, add it to the selected options
      this.answers[this.step - 1].push(option);
    } else {
      // Option is already selected, remove it from the selected options
      this.answers[this.step - 1].splice(index, 1);
    }
  }

  submitForm() {
    // Handle form submission here
    console.log("Form submitted with data:", this.formData);
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
* {
  font-family: "Tajawal", sans-serif;
}

.bac {
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #9ecf3b;
}
a,
button {
  color: #fff;
}

button {
  background: #fff;
  border: solid 1px;
  border-radius: 2em;
  padding: 0.5em 2em;
}

.hover:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px #323a67;
}

.active {
  background-color: #c2210f;
}

.back-t {
  background-image: url(https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349768/earth-layer_jadxvo_a6shpb.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80%;
  height: 400px;
}
@media (max-width: 700px) {
  .back-t {
    width: 90%;

    height: auto;
  }
}

.back-invest {
  background-image: url(https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349798/bulls_wffqct_oi9cll.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.back-money {
  background-image: url(https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349823/stocks-bg_svid4a_rjodhn.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.img-Qu {
  object-fit: contain;
}

.hover-2:hover {
  box-shadow: 0px 0px 10px #323a67;
  cursor: pointer;
}

.selected {
  border: 3px solid green;
}

.form-c {
  background-image: url(https://res.cloudinary.com/dmjbdeydm/image/upload/v1729349869/Targeted-Page-1_szszqf_tmcnbx.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.bg-form-card {
  background: linear-gradient(90deg, #81bd00 22.6%, #ebffd9 171.96%);
}
input::placeholder {
  font-size: large;
  opacity: 0.5;
  color: rgb(73, 73, 73);
}

* {
  font-family: "Tajawal", sans-serif;
}

.bg-form-card {
  background: linear-gradient(90deg, #81bd00 22.6%, #ebffd9 171.96%);
  margin: 50px 20px;
}
</style>
