<template>
  <div class="bg-1">
    <div class="row d-flex justify-content-center mb-4" dir="rtl">
      <div class="col-12 d-flex justify-content-center">
        <div
          class="col-lg-4 col-md-6 col-sm-11 py-3 mt-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center "
        >
          <img
            src="https://s6.imgcdn.dev/RSzVl.webp"
            alt="flagedu signals"
            class="img-fluid"
            id="sin-in"
          />
        </div>
      </div>

      <div class="col-lg-6 m-auto">
        <div class="intro-wrap text-center">
          <h1 class="mb-3 text-hero mt-2 font-weight-bold">
            <strong> دع أرباحك تصل إلي الفضاء الخارجي </strong>
          </h1>
          <h5 class="text-color text-light">
            احصل علي أبرز توصيات خبراء التداول وشاهد أرباحك تصل إلي آفاق غير
            مسبوقة
          </h5>
          <h5><span class="typed-words"> </span></h5>

          <div class="row d-flex justify-content-center mx-1">
            <div class="col-lg-9 col-md-7 m-3" data-aos="fade-left">
              <form @submit.prevent="handleFormSubmit" class="reservation-form">
                <div class="col-lg-12 text-right">
                  <fieldset class="col-lg-12 text-center">
                    <input
                      name="name"
                      v-model="formData.name"
                      class="name text-center"
                      aria-label="Default select example"
                      placeholder="  اسمك "
                    />
                    <input
                      name="email"
                      v-model="formData.email"
                      class="email text-center text-light"
                      placeholder=" البريد الالكتروني"
                    />
                    <input
                      name="phone"
                      v-model="formData.phone"
                      type="phone"
                      placeholder="رقم الهاتف"
                      class="phone text-center"
                    />
                  </fieldset>
                  <button
                    type="submit"
                    class="btn btn-info px-2 fs-5 m-2 text-light col-lg-7 col-md-8 col-sm-9"
                    href="#"
                  >
                    تسجيل
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-light py-5" dir="rtl">
      <div class="col-lg-6 col-md-5 col-sm-11 p-5 m-auto">
        <img
          src="https://s6.imgcdn.dev/RGiqn.webp "
          alt="flagedu signals"
          class="img-fluid"
        />
      </div>

      <div
        class="col-lg-5 col-md-7 col-sm-11 py-3 text-light text-center m-auto justify-content-center"
      >
        <img
          class="m-auto d-flex"
          src="https://s6.imgcdn.dev/99vtn.webp"
          width="100"
        />
        <h2 class="text-color mt-5">
          <strong>هل تريد من يرشدك مجاناً؟</strong>
        </h2>
        <h5 class="text-dark">
          إشترك في جروب التليجرام وشاهد أرباحك تصعد تلقائياً
        </h5>

        <button
          href="#sin-in"
          class="btn btn-info text-color btn-md font-weight-bold"
        >
          ابدأ الآن
        </button>
      </div>

      <div class="row m-5">
        <p class="fs-4 text-dark">إتبع الخطوات:</p>

        <div
          class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-2 p-2 course-el text-light"
        >
          <p class="fs-5">انضم الآن لجروب التليجرام</p>
          <p class="">انضم لمجمتمعنا عبر التلجيرام</p>
          <img class="col-12 img-sig" src="https://s6.imgcdn.dev/RGavw.png" />
        </div>

        <div
          class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-2 p-2 course-el text-light"
        >
          <p class="fs-5">توصيات مجانية</p>
          <p class="">أحصل على توصيات مجانية مقدمة من خبرائنا</p>
          <img class="col-12 img-sig" src="https://s6.imgcdn.dev/Rt8Qv.png" />
        </div>

        <div
          class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-2 p-2 course-el text-light"
        >
          <h5 class="fs-5">افتح حساب تجريبي</h5>
          <p class="">أفتح حساب تجريبي وقم بتعلم التداول</p>
          <img class="col-12 img-sig" src=" https://s6.imgcdn.dev/RtJSN.png" />
        </div>

        <div
          class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-2 p-2 course-el text-light"
        >
          <h5 class="fs-5">اجني الارباح</h5>
          <p class="">بعد التعلم افتح حساب حقيقي وابدأ بجني الارباح</p>
          <img class="col-12 img-sig" src="https://s6.imgcdn.dev/RtXOn.png" />
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center shadow bg-2">
      <div class="col-lg-12 py-3 text-center m-auto">
        <p class="text-light mt-5 m-4 fs-1">هل تريد من يرشدك مجاناً؟</p>
        <h3>إشترك في جروب التليجرام وشاهد أرباحك تصعد تلقائياً</h3>
        <div class="row d-flex justify-content-center">
          <img
            class="col-lg-3 col-md-4 col-sm-3 col-xs-3"
            src="https://s6.imgcdn.dev/RGGd9.webp"
          />
        </div>

        <a
          href="https://t.me/+yHbjrB4-6g85NmU0"
          class="btn btn-info text-color btn-md font-weight-bold mb-3 px-4"
        >
          <i class="bi bi-telegram"></i> أنضم الآن
        </a>
      </div>
    </div>
    <div>
      <div>
        <div class="py-5 cta-section bg-light">
          <div class="  ">
            <div class="row text-center">
              <div class="col-md-12">
                <h2 class="mb-2 text-hero" dir="rtl">
                  10 أعوام من الخبرة التداولية تبحث عمن يستخدمها
                </h2>
                <p class="mb-4 lead text-dark">
                  سجل الآن وتداول بخبرة حتي ولو كنت مبتدئاً
                </p>
                <p class="mb-0">
                  <a
                    href="#sin-in"
                    class="btn btn-info text-color btn-md font-weight-bold"
                    >ابدأ الآن</a
                  >
                </p>

                <img
                  class="col-lg-7 col-md-5 mb-0"
                  src="https://s6.imgcdn.dev/RGqvo.webp "
                  style="object-fit: contain"
                />
              </div>
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
  name: "Course",
  components: {},
  layout: "page-layout",
})
export default class Course extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, EVEST_SIGNUP))
  evestSignup;
  @Action(namespaced(NS_THIRD_PARTY, EXNESS_SIGNUP))
  exnessSignup;
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP))
  flageduSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    email: "",
    password: "@Flagedu2023",
    usa_citizen: false,
    phone: "",
    ci: "",
    uai: "",
    ani: "",
    name: "",
    lastName: " ",
    interest: "Signals ",
    afp: "",
  };

  err_msg = [];

  handleSelectedCountry({ name, iso2, dialCode }) {
    this.formData.country = iso2;
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
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var brand = "flagedu";
    var creative_name = "signals";
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
  head() {
    return {
      title: "توصيات فلاجيدو",

      script: [
        {
          src: "https://analytics.tiktok.com/i18n/pixel/events.js",
          async: true,
        },
        {
          hid: "tiktok-analytics",
          innerHTML: `
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;
            var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
            ttq.setAndDefer=function(t,e){
              t[e]=function(){
                t.push([e].concat(Array.prototype.slice.call(arguments,0)))
              }
            };
            for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){
              for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
              return e
            };
            ttq.load=function(e,n){
              var i="https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              var o=document.createElement("script");
              o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
              var a=document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(o,a)
            };
            ttq.load('CKIJ5CRC77UFTHK7CPP0');
            ttq.page();
          }(window, document, 'ttq');
        `,
        },
      ],
    };
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
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&display=swap");

.course-item {
  text-align: right;
}
.logo-img {
  width: 200px;
}

.img-hero {
  width: 90%;
}

.img-hero:hover {
  transform: scale(1.1);
}
a {
  font-weight: 900;
}
.text-color {
  color: #1c8b89;
}

.bg-flagedu {
  background-color: #85d3c53a;
}
.btn-info {
  background-color: #1c8b89;
  border: none;
  color: #f9f9f9;
}
.btn-info:hover {
  background-color: #12b1ae;
  border: none;
  color: #f9f9f9;
}
.card-img {
  width: 150px;
  height: auto;
}
.bg-cards {
  padding: 30px;
  background-color: rgba(214, 219, 219, 0.425);
}
.bg-cards:hover {
  transform: scale(1.1);
}

.reservation-form input,
.reservation-form select {
  width: 100%;
  height: 46px;
  background-color: transparent;
  border-radius: 23px;
  border: 0.5px solid #e0e0e0;
  padding: 0px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 20px;
  margin-top: 10px;
}
::placeholder {
  color: rgba(255, 255, 255, 0.979);
  opacity: 0.5; /* Firefox */
}

.reservation-form input.date {
  color: #aaa;
}
.co-li {
  list-style-type: none;
}

.comm {
  width: 200px;
}

.course-el:hover {
  transition: transform 0.2s;
}

.course-el:hover {
  transform: scale(1.1);
}

.img-sig {
  object-fit: contain;
  width: 50px;
  position: relative;
  top: -36%;
}
.bg-hero {
  background-image: url("https://api.flagedu.com/media/images/currency-ideas-worried-hourglass-shadow.original.jpg");
}

.bg-1 {
  background-image: url("https://s6.imgcdn.dev/RGXCn.webp");
  background-repeat: no-repeat;
  height: auto;
  padding: 55px 0px;
  padding-bottom: 0px;
  background-size: cover;
}
.bg-2 {
  background: rgb(0, 221, 217);
  background: linear-gradient(
    143deg,
    rgba(0, 221, 217, 1) 0%,
    rgba(52, 7, 92, 0.9976365546218487) 100%
  );
}
.icon-c {
  font-size: 20px;
  color: #087179;
  float: left;
  width: 44px;
  height: 44px;
  background: #d6e9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.text-hero {
  font-size: 42px;
  margin: 10px;
  background: -webkit-linear-gradient(#023e42, #030000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
