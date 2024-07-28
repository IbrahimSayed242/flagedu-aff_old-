<template>
  <div class="bg-all h-100 m-2" id="top">
    <div class="row d-flex justify-content-center m-5" dir="rtl">
      <div
        class="col-lg-4 col-md-6 col-sm-11 py-3"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <img
          src="  https://api.flagedu.com/media/images/risk.original.png"
          alt="Image"
          class="img-fluid"
        />
      </div>
      <div class="col-lg-6">
        <div class="intro-wrap text-center">
          <h1 class="mb-3 text-dark mt-5 text-hero">
            <span class="d-block">كن أسرع من تقلبات السوق </span>
          </h1>
          <h3 class="text-color">استخدم قوة الأخبار</h3>
          <h5>
            <span class="typed-words">
              لحماية وتدعيم محفظتك الاستثمارية عبر نشرتنا الدورية لأهم الأحداث
              الجارية
            </span>
          </h5>

          <div class="row d-flex justify-content-center">
            <div class="col-lg-12 col-md-8 m-3" data-aos="fade-left">
              <form @submit.prevent="handleFormSubmit" class="reservation-form">
                <div class="col-lg-12">
                  <fieldset>
                    <input
                      name="name"
                      v-model="formData.name"
                      class="name"
                      aria-label="Default select example"
                      placeholder="أدخل اسمك"
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      name="phone"
                      v-model="formData.phone"
                      type="phone"
                      placeholder="رقم الهاتف"
                      class="phone"
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      name="email"
                      class="email"
                      v-model="formData.email"
                      aria-label="Default select example"
                      placeholder=" البريد الالكتروني"
                    />
                  </fieldset>
                </div>
                <button class="btn btn-info px-5 m-4 fs-3" type="submit">
                  ابدأ الآن
                </button>
              </form>
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
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center bg-dark py-5">
      <div class="col-lg-12 col-md-7 col-sm-11 py-3 text-center m-auto">
        <img
          src="https://api.flagedu.com/media/images/news_1_1.original.png"
          width="300"
          alt="Image"
          class="col-lg-8 col-md-7 col-sm-11 my-5"
        />
        <h1 class="text-color"><strong> إسبق المخاطر بخطوة </strong></h1>
        <h5 class="text-light">
          تمكنك <span class="text-color">نشرتنا المجانية </span> من معرفة
          الأحداث المؤثرة علي إستثماراتك
        </h5>

        <h3 class="text-light mb-5">
          وتجنب مخاطر التقلبات المفاجأة في الاسواق
        </h3>
      </div>
    </div>

    <div class="row d-flex justify-content-center m-3">
      <div class="col-lg-6 py-3 text-center m-auto">
        <h1 class="text-color mt-5 m-4">إسبق الفرص الذهبية قبل صعودها</h1>
        <p>
          تعرف علي أخبار الشركات المختلفة التي من شأنها الصعود بأسهم الشركات
          والاسواق واقتنص فرص الشراء الذهبية
        </p>

        <p>وتجنب مخاطر التقلبات المفاجأة في الاسواق</p>
        <h2>تعرف علي إتجاهات الأسواق لحظة بلحظة</h2>
        <a href="#top" class="btn btn-info m-4"> اشترك الآن مجاناً</a>
      </div>

      <div class="col-lg-5 col-md-6 col-sm-11 py-3">
        <img
          src="https://api.flagedu.com/media/images/2.original.png"
          alt="Image"
          class="img-fluid"
        />
      </div>
    </div>

    <div class="py-5 cta-section bg-dark">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h2 class="mb-2 text-white">انضم الآن الي فريق خبراء فلاجيدو</h2>
            <p class="mb-4 lead text-white text-white-opacity">
              احصل علي أفضل التوصيات الاستثمارية من فلاجيدو مجاناٌ اغتنم الفرصة
              الآن
            </p>
            <p class="mb-0">
              <a
                href="#"
                class="btn btn-outline-light text-color btn-md font-weight-bold"
                >ابدأ الآن</a
              >
            </p>
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
  FETCH_CREATIVE_DETAILS,
  FLAGEDU_SIGNUP,
} from "../../utils/store/action.names";

@Component({
  name: "NewsLetter",
  components: {},
  layout: "page-layout",
})
export default class NewsLetter extends Vue {
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
    name: "",
    // lastName: "",
    interest: "Flagedu News",
    afp: "",
    company: "Flagedu",
  };
  err_msg = [];
  handleFormSubmit() {
    this.err_msg = [];

    if (this.formData["usa_citizen"] == true) {
      this.err_msg.push("USA citizen not allowed to signup!");
      return false;
    }
    // if (this.formData["lastName"] == "") {
    //   lastName = " ";
    // }

    var regularExpression =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (regularExpression.test(this.formData["password"]) == false) {
      this.err_msg.push("Password not in correct format!");
      return false;
    }

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
    var creative_name = "flagedu-news";
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
      title: "اخبار فلاجيدو الحصريه",

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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&display=swap");

* {
  font-family: "Tajawal", sans-serif;
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
  background-color: #0560521c;
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

.text-hero {
  font-size: 55pt;
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

.bg-f {
  background-color: #3dffef7c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233DFFF0'/%3E%3Cstop offset='1' stop-color='%231C8B89'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233DFFF0'/%3E%3Cstop offset='1' stop-color='%232B4350'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");

  background-size: cover;
}
</style>
