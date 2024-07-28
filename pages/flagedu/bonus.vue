<template>
  <div class=" ">
    <div class="row d-flex justify-content-center bg-1" dir="rtl">
      <div
        class="col-lg-7 col-md-6 col-sm-11 py-3 mt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center "
      >
        <img
          src="https://s6.imgcdn.dev/RviqS.webp"
          alt="flagedu signals"
          class="img-fluid mr-4"
          id="sin-in"
        />
      </div>

      <div class="col-lg-5 m-auto">
        <div class="intro-wrap text-center">
          <img
            class="m-auto d-flex"
            src="https://s6.imgcdn.dev/99vtn.webp"
            width="100"
          />
          <h1 class="mb-3 text-hero mt-2 font-weight-bold text-center">
            <strong> الترحيب الذي يليق بك </strong>
          </h1>
          <h5 class="text-color text-dark text-center">
            أحصل علي بونص ترحيبي يصل إلي<br />
            100% من حجم إيداعك الأولي مجاناً
          </h5>
          <h5><span class="typed-words"> </span></h5>

          <div class="row d-flex justify-content-center mx-4 mb-5">
            <div class="col-lg-11 col-md-11 bg-4 rounded m-2 shadow">
              <form
                @submit.prevent="handleFormSubmit"
                class="reservation-form d-flex justify-content-center"
              >
                <div class="col-lg-10 p-4 row">
                  <fieldset>
                    <input
                      name="name"
                      v-model="formData.name"
                      class="name text-right"
                      aria-label="Default select example"
                      placeholder=" ادخل اسمك "
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      name="email"
                      v-model="formData.email"
                      class="email text-right"
                      aria-label="Default select example"
                      placeholder=" البريد الالكتروني"
                    />
                  </fieldset>

                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-info px-3 fs-5 m-2 text-light col-lg-7 col-md-8 col-sm-9"
                      href="#"
                    >
                      أحصل عليه الآن
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-light py-4" dir="rtl">
      <div class="col-lg-6 col-md-5 col-sm-11 p-5 m-auto">
        <h2 class="text-color mt-5">
          <strong> هل تريد مضاعفة رأس مالك الحالي؟ </strong>
        </h2>
        <h5 class="text-dark">
          تداول بأكثر من رصيدك عبر بونص مجاني يصل إلي 100% من إيداعك الأولي
        </h5>

        <img
          src="https://s6.imgcdn.dev/RWYau.webp "
          alt="flagedu signals"
          class="img-fluid"
        />
      </div>

      <div
        class="col-lg-5 col-md-7 col-sm-11 py-3 text-light text-center m-auto justify-content-center"
      >
        <div class="row m-5">
          <p class="fs-4 text-dark">إتبع الخطوات:</p>

          <div
            class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-dark p-2 course-el"
          >
            <p class="fs-5">سجل الآن</p>
            <p class="">قم بالتسجيل على Flagedu وانطلق في رحلتك التعليمية.</p>
            <img class="col-12 img-sig" src="https://s6.imgcdn.dev/RG1qt.png" />
          </div>

          <div
            class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-dark p-2 course-el"
          >
            <p class="fs-5">قم بالإيداع</p>
            <p class="">
              املأ حساب التداول الخاص بك عبر Flagedu مع وسيطك المفضل.
            </p>
            <img class="col-12 img-sig" src="https://s6.imgcdn.dev/RtFDo.png" />
          </div>

          <div
            class="col-lg-3 col-md-5 col-sm-5 col-xs-5 m-2 shadow rounded bg-dark p-2 course-el"
          >
            <h5 class="fs-5">احصل على هدية</h5>
            <p class="">
              استمتع بمكافأة تتراوح بين 20% و100%، حصرياً من خلال شراكتنا.
            </p>
            <img class="col-12 img-sig" src="https://s6.imgcdn.dev/RG74T.png" />
          </div>
        </div>

        <button
          href="#sin-in"
          class="btn btn-info text-light btn-md font-weight-bold"
        >
          ابدأ الآن
        </button>
      </div>
    </div>

    <div class="row d-flex justify-content-center bg-5">
      <div class="col-lg-12 pt-3 text-center m-auto">
        <p class="text-light mt-5 m-4 fs-1">
          دع إيداعاتك تمر عبر بوابة المضاعفة
        </p>
        <h3>ضاعف قدرتك التداولية عبر مكافأة ترحيبية</h3>
        <a
          href="#sin-in"
          class="btn btn-info text-light btn-md font-weight-bold mb-3 px-4"
        >
          ضاعف أرباحك
        </a>
        <div class="row d-flex justify-content-center">
          <img
            class="col-lg-7 col-md-8 col-sm-8 col-xs-8 mb-0"
            src="https://s6.imgcdn.dev/RWwYa.webp"
          />
        </div>
      </div>
    </div>
    <div>
      <div>
        <div class="py-5 bg-6">
          <div class="  ">
            <div class="row text-center d-flex justify-content-center">
              <p class="mb-2 fs-1 text-color">؟Flagedu لماذا</p>

              <div
                class="rounded m-1 text-light bg-4 p-3 col-lg-4 col-md-4 col-sm-8 m-2"
              >
                <h3>تمكين تعليمي</h3>
                <i class="bi bi-journal-bookmark fs-1 text-color"></i>
                <p>
                  في Flagedu، نؤمن بتزويدك بالمعرفة. استكشف مكتبتنا الواسعة من
                  المقالات، ومقاطع الفيديو، والرسوم التوضيحية التي تغطي مجموعة
                  من المواضيع المتعلقة بالتداول والاستثمار.
                </p>

                <a
                  href="#sin-in"
                  class="btn btn-outline-light btn-md font-weight-bold"
                >
                  تعلم الآن
                </a>
              </div>

              <div
                class="rounded col-lg-4 col-md-4 col-sm-8 m-1 text-light bg-4 p-3"
              >
                <h3>مراجعات شاملة للوسطاء</h3>
                <i class="bi bi-star fs-1 text-color"></i>
                <p>
                  في Flagedu، نؤمن بتزويدك بالمعرفة. استكشف مكتبتنا الواسعة من
                  المقالات، ومقاطع الفيديو، والرسوم التوضيحية التي تغطي مجموعة
                  من المواضيع المتعلقة بالتداول والاستثمار.
                </p>

                <a
                  href="#sin-in"
                  class="btn btn-outline-light btn-md font-weight-bold"
                >
                  المزيد
                </a>
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
    name: "",
    lastName: " ",
    interest: "Bonus  Offer",
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
    var creative_name = "bonus";
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
      title: "مكافأت التسجيل من خلال فلاجيدو",

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
  /* From https://css.glass */
  background: rgba(16, 78, 86, 0.71);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(16, 78, 86, 0.3);
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
  background: url(https://s6.imgcdn.dev/RWCS9.webp);
  height: auto;
  padding: 55px 0px;
  padding-bottom: 0px;
  background-size: cover;
}
.bg-3 {
  background-color: #33f0ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%2333F0FF'/%3E%3Cstop offset='1' stop-color='%23089792'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2327f0fe'/%3E%3Cstop offset='1' stop-color='%23088f94'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%231af1fd'/%3E%3Cstop offset='1' stop-color='%23088391'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%230ef1fc'/%3E%3Cstop offset='1' stop-color='%2309778e'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%2305f0f8'/%3E%3Cstop offset='1' stop-color='%23096c8b'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%2305e4ea'/%3E%3Cstop offset='1' stop-color='%23096188'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%2306d9dc'/%3E%3Cstop offset='1' stop-color='%23095685'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%2307cdce'/%3E%3Cstop offset='1' stop-color='%23094c82'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2307c0bf'/%3E%3Cstop offset='1' stop-color='%230a4380'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2308b2af'/%3E%3Cstop offset='1' stop-color='%230a397d'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%2308a4a1'/%3E%3Cstop offset='1' stop-color='%230a307a'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23089792'/%3E%3Cstop offset='1' stop-color='%230A2877'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.bg-4 {
  background: rgba(16, 78, 86, 0.54);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2px);
  -webkit-backdrop-filter: blur(0.2px);
  border: 1px solid rgba(16, 78, 86, 0.3);
}

.bg-6 {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(98,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23057F74'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(100,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238F256F'/%3E%3Cstop offset='1' stop-color='%2314F0FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='14.19'%3E%3Cpath transform='translate(-90.3 -1.1999999999999993) rotate(-6.6 1409 581) scale(0.914788)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4.73' transform='translate(-133.5 75) rotate(3.000000000000001 800 450) scale(0.998658)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(5.099999999999998 -49.5) rotate(10.5 401 736) scale(0.998658)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4.3'%3E%3Cpath transform='translate(450 8.999999999999998) rotate(-2.2499999999999996 150 345) scale(1.001596)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='9.46' transform='translate(-85.5 -207) rotate(-10.800000000000011 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-231.6 56.4) rotate(-1.7999999999999972 1400 132) scale(0.805)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  background-size: cover;
}
.bg-5 {
  background-color: #43ded7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2343DED7'/%3E%3Cstop offset='1' stop-color='%23007079'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2343DED7'/%3E%3Cstop offset='1' stop-color='%23096563'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");

  background-size: cover;
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
  background: -webkit-linear-gradient(#ffffff, rgb(1, 240, 248));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
