<template>
  <div class=" ">
    <div class="row d-flex justify-content-center m-5" dir="rtl">
      <div
        class="col-lg-4 col-md-6 col-sm-11 py-3"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <img
          src="https://api.flagedu.com/media/images/currency-ideas-worried-hourglass-shadow-PhotoRo.original.png"
          alt="flagedu course"
          class="img-fluid"
        />
      </div>
      <div class="col-lg-6">
        <div class="intro-wrap text-center">
          <h1 class="mb-3 text-dark mt-5">
            <span class="d-block" id="sin-in"> استثمر في نفسك </span>
          </h1>
          <h3 class="text-color">
            قم باستثمارك الاعظم علي الإطلاق وتعلم أساسيات تداول الاسهم
          </h3>
          <h5><span class="typed-words"> </span></h5>

          <div class="row d-flex justify-content-center">
            <div class="col-lg-7 col-md-7 m-3" data-aos="fade-left">
              <form @submit.prevent="handleFormSubmit" class="reservation-form">
                <div class="col-lg-12 text-right">
                  <fieldset class="col-lg-12">
                    <input
                      name="name"
                      v-model="formData.firstName"
                      class="name text-center"
                      placeholder="أدخل اسمك"
                    />
                  </fieldset>
                  <fieldset class="col-lg-12">
                    <input
                      name="email"
                      v-model="formData.email"
                      class="email text-center"
                      placeholder=" البريد الالكتروني"
                    />
                  </fieldset>
                  <button type="submit" href="" class="btn btn-info m-4">
                    اشترك الآن مجاناً
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-dark py-5">
      <div class="col-lg-6 col-md-5 col-sm-11 p-5">
        <img
          src=" https://api.flagedu.com/media/images/1.original_zXc8xvX.png"
          alt="flagedu course"
          class="img-fluid"
        />
      </div>

      <div
        class="col-lg-5 col-md-7 col-sm-11 py-3 text-light text-center m-auto"
      >
        <h1 class="text-color mt-5">
          <strong> تعلم أساسيات تداول الاسهم </strong>
        </h1>

        <h4>تقدم لك الدورة مجاناً</h4>

        <h5 class="text-light">تقدم لك الدورة مجاناً الأساسيات</h5>
        <p class="text-color">
          الأساسيات التي يجب علي كل متداول للاسهم معرفتها
        </p>

        <div class="row course-item m-3">
          <h5 class="course-item">محتويات الدورة</h5>
          <h3 class="text-color course-item">
            انواع الاسهم للشراء <i class="text-light bi bi-check2-circle"></i>
          </h3>
          <h3 class="text-color course-item">
            أوامر السوق <i class="text-light bi bi-check2-circle"></i>
          </h3>
          <h3 class="text-color course-item">
            كيفية اختيار الاسهم <i class="text-light bi bi-check2-circle"></i>
          </h3>
          <h3 class="text-color course-item">
            تحليل أداء السهم <i class="text-light bi bi-check2-circle"></i>
          </h3>
          <h3 class="text-color course-item">
            إيجاد الاسهم المقومة بأقل من قيمتها
            <i class="text-light bi bi-check2-circle"></i>
          </h3>
          <h3 class="text-color course-item">توقيت السوق</h3>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center m-3">
      <div class="col-lg-12 py-3 text-center m-auto">
        <h1 class="text-color mt-5 m-4">لماذا يجب عليك بدء الدورة الآن؟</h1>
        <h3>يمر سوق الاسهم بتقلبات عنيفة</h3>
        <h5 class="m-2">
          لذلك من الضروري أن تسلح نفسك بالخبرة الكافية لتقليل الخسائر المحتملة
        </h5>

        <div class="row d-flex justify-content-center">
          <div
            class="col-lg-2 col-md-5 col-sm-5 m-3 shadow rounded bg-flagedu p-5 course-el"
          >
            <h5 class="">مجانية بالكامل</h5>
            <img
              class="col-12 img-cours"
              src="https://api.flagedu.com/media/images/free.original.png"
            />
          </div>
          <div
            class="col-lg-2 col-md-5 col-sm-5 m-3 shadow rounded bg-flagedu p-5 course-el"
          >
            <h5 class="">قصيرة ومركزة</h5>
            <img
              class="col-12 img-cours"
              src="https://api.flagedu.com/media/images/online-learning_1.original.png"
            />
          </div>
          <div
            class="col-lg-2 col-md-5 col-sm-5 m-3 shadow rounded bg-flagedu p-5 course-el"
          >
            <h5 class="col-12">سهلة ومبسطة</h5>
            <img
              class="col-12 img-cours"
              src="https://api.flagedu.com/media/images/video.original.png"
            />
          </div>
          <div
            class="col-lg-2 col-md-5 col-sm-5 m-3 shadow rounded bg-flagedu p-5 course-el"
          >
            <h5 class="col-12">مقدمة من خبراء</h5>
            <img
              class="col-12 img-cours"
              src="https://api.flagedu.com/media/images/chart.original.png"
            />
          </div>
        </div>

        <div class="py-5 cta-section bg-dark">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h2 class="mb-2 text-white">
                  انضم الآن الي فريق خبراء فلاجيدو
                </h2>
                <p class="mb-4 lead text-white text-white-opacity">
                  احصل علي أفضل التوصيات الاستثمارية من فلاجيدو مجاناٌ اغتنم
                  الفرصة الآن
                </p>
                <p class="mb-0">
                  <a
                    href="#sin-in"
                    class="btn btn-outline-light text-color btn-md font-weight-bold"
                    >ابدأ الآن</a
                  >
                </p>
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
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP)) flageduSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    email: "",
    password: "Flagedu2023!",
    usa_citizen: false,
    phone: "",
    ci: "",
    uai: "",
    ani: "",
    firstName: "",
    lastName: " ",
    interest: "Course Free",
    source: "Course Free",
    afp: "",
  };

  err_msg = [];

  handleSelectedCountry({ name, iso2, dialCode }) {
    this.formData.country = iso2;
  }

  handleFormSubmit() {
    this.err_msg = [];

    if (this.formData["usa_citizen"] == true) {
      this.err_msg.push("USA citizen not allowed to signup!");
      return false;
    }

    // var regularExpression =
    //   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    // if (regularExpression.test(this.formData["password"]) == false) {
    //   this.err_msg.push("Password not in correct format!");
    //   return false;
    // }

    this.formData["user_ip"] = this.user_ip;
    this.flageduSignup(this.formData)
      .then((d) => {
        console.log(d);
        // var loginUrl = d.login_url;
        // location.href = loginUrl;
        this.$router.push({
          name: "thanks2",
          // query: { redirect_uri: loginUrl },
        });
      })
      .catch((e) => {
        this.err_msg = [];
        if (e.response.status === 400) {
          console.log(e.response.data);
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

    var brand = "flagedu";
    var creative_name = "flagedu-courseF";
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
      title: "تداول الاسهم للمبتدئين",

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
* {
  font-family: "Tajawal", sans-serif;
}
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

.img-cours {
  object-fit: contain;
}
.bg-hero {
  background-image: url("https://api.flagedu.com/media/images/currency-ideas-worried-hourglass-shadow.original.jpg");
}
</style>
