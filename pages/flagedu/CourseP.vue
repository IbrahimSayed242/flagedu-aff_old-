<template>
  <div class="bg-x" dir="rtl">
    <img
      src="https://api.flagedu.com/media/images/flagedu_1.original_sO8Js2Q.original.png"
      class="logo-img m-1 m-lg-5 m-md-3 m-sm-2"
    />

    <div class=" ">
      <div class="col-lg-12">
        <div class="row d-flex justify-content-center bg-s">
          <img
            class="col-lg-6 col-md-6 col-sm-11 mt-5 mx-2"
            src="https://s6.imgcdn.dev/9p3dS.webp"
          />

          <div class="col-lg-6 col-md-12 text-center p-3 m-auto">
            <h1 class="text-center text-hero1 text-light m-3" id="sin-in">
              استطلع فنون الاستثمار والتحليل الأساسي
            </h1>
            <p class="text-center text-hero2 text-light m-4 fs-5">
              دورتنا الشاملة مصممة لرفع مهاراتك وتحويل نهجك نحو عالم المال
            </p>
            <div class="col-md-12">
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
                      انضم لمجتمعنا الان مجانا
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- cardes   -->

        <div class="row justify-content-center bg-flagedu3 bg-light Shadow p-5">
          <h1 class="text-center m-3">ما الذي ستتعله من هذه الدورة</h1>

          <div class="rounded-5 copytrading col-lg-3 col-md-5 col-sm-5">
            <div class="">
              <small class="rounded-cards-label"> ستتعلم </small>
              <h2 class="rounded-cards-title">تقنيات إدارة المخاطر:</h2>
              <p class="rounded-cards-desc">
                اكتشف تقنيات إدارة المخاطر المتقدمة لحماية استثماراتك وتحسين
                عوائدك.
              </p>
            </div>
            <div class=" ">
              <img
                src="https://s6.imgcdn.dev/9pAPT.png"
                alt="Copy Trading"
                class="img-responsive"
              />
            </div>
          </div>

          <div
            class="rounded-cards social-competitions col-lg-3 col-md-5 col-sm-5 m-3 rounded-5"
          >
            <div class="">
              <small class="rounded-cards-label"> ستتعلم </small>
              <h2 class="rounded-cards-title">استراتيجيات الاستثمار :</h2>
              <p class="rounded-cards-desc">
                اكتشف استراتيجيات الاستثمار الفعّالة التي تثبت جدواها. من الأسهم
                إلى السندات، تعلم كيفية بناء محفظة متنوعة وقوية.
              </p>
            </div>
            <div class="">
              <img
                src="https://s6.imgcdn.dev/9pO9D.png"
                alt="Social Competition"
                class="img-responsive"
              />
            </div>
          </div>

          <div
            class="rounded-cards social-competitions col-lg-3 col-md-5 col-sm-5 m-3 rounded-5"
          >
            <div class="">
              <small class="rounded-cards-label"> ستتعلم</small>
              <h2 class="rounded-cards-title">إتقان التحليل الأساسي:</h2>
              <p class="rounded-cards-desc">
                تعلم فن التحليل الأساسي. قم بتحليل البيانات المالية، وقيم صحة
                الشركات، واتخذ قرارات استثمارية مستنيرة.
              </p>
            </div>
            <div class="">
              <img
                src="https://s6.imgcdn.dev/9ooKD.png"
                alt="Social Competition"
                class="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <!---carousle -->
    </div>

    <div class="d-flex justify-content-center bg-s">
      <div class="container rounded-3 m-2 py-3">
        <div class="row d-flex justify-content-center my-2"></div>

        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-11" dir="rtl">
            <div class="rounded-3 bg-flagedu col-12 p-3 m-3 rounded-5">
              <p class="text-light">لا تفوت الفرصة</p>
              <h1 class="text-light fs-1 mt-1">
                <strong class="mt-5"> إحجز مقعدك الآن </strong>
              </h1>
              <h3 class="text-light mt-2">
                استطلع فنون الاستثمار والتحليل الأساسي
              </h3>
              <P class="text-light">
                افتح أبواب النجاح المالي مع دورتنا الشاملة
              </P>
            </div>

            <div class="d-small mt-5">
              <h5 class="text-light">محتويات الدورة</h5>
              <div class="border rounded-3 m-2 course-item">
                <p class="text-light fs-5 m-2">
                  <i class="text-light bi bi-check2-circle m-2"></i> انت جاهز
                  للاستثمار فكيف تستثمر؟
                </p>
              </div>
              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-2">
                  <i class="text-light bi bi-check2-circle m-2"></i> لماذا
                  الاستثمار الحديث للمدى الطويل هو الأفضل؟
                </p>
              </div>
              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-4">
                  <i class="text-light bi bi-check2-circle m-2"></i> الثقة فى
                  نفسك
                </p>
              </div>
              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-4">
                  <i class="text-light bi bi-check2-circle m-2"></i> تقرير
                  الموازنة
                </p>
              </div>
              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-4">
                  <i class="text-light bi bi-check2-circle m-2"></i> تقرير الدخل
                </p>
              </div>
              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-4">
                  <i class="text-light bi bi-check2-circle m-2"></i> الادارة
                  التنفيذية
                </p>
              </div>

              <div class="border m-2 rounded-3 course-item">
                <p class="text-light fs-5 m-4">
                  <i class="text-light bi bi-check2-circle m-2"></i> كيف احكم
                  على السهم المثالى
                </p>
              </div>
            </div>
          </div>

          <img
            class="col-lg-6 col-md-6 col-sm-11 m-auto"
            src="https://s6.imgcdn.dev/Rhnry.webp"
          />
        </div>

        <h2 class="text-center mt-5 text-light">تتميز الدورة بأنها</h2>
        <div class="d-flex justify-content-center mt-2">
          <li class="co-li fs-4 text-light m-4">
            <i class="bi bi-check-circle-fill text-light m-2"> </i> شاملة
          </li>

          <li class="co-li fs-4 text-light m-4">
            <i class="bi bi-check-circle-fill text-light m-2"></i> مبتكرة
          </li>
          <li class="co-li fs-4 text-light m-4">
            <i class="bi bi-check-circle-fill text-light m-2"></i>داعمة
          </li>
        </div>

        <div class="text-center">
          <a class="btn btn-info px-5 m-2 text-center" href="#sin-in">
            انضم لمجتمعنا</a
          >
        </div>
      </div>
    </div>

    <div class="m-5">
      <div
        class="row shadow bg-flagedu2 rounded-3 d-flex justify-content-center my-5"
        dir="rtl"
      >
        <div class="col-lg-6 col-md-9">
          <img class="img-fet2" src="https://s6.imgcdn.dev/Rhm9t.png" />
        </div>

        <div class="col-lg-6 col-md-12 mt-4 row text-center">
          <h1 class="m-3">لماذا هذا الدورة مفيدة لي؟</h1>

          <div class="col-lg-5 col-md-5 col-sm-11 fet-elemnt">
            <img class="img-fet" src=" https://s6.imgcdn.dev/RwZSN.png" />
            <h3 class="m-3 text-light">منهاج شامل</h3>
            <p class="m-3">منهجنا المنظم يضمن فهمًا شاملاً للأسواق المالية.</p>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-11 fet-elemnt">
            <img class="img-fet" src=" https://s6.imgcdn.dev/RwOQv.png" />
            <h3 class="m-3 text-light">وصول مدى الحياة إلى الموارد</h3>
            <p class="m-3">
              سجل في الدورة واحصل على وصول مدى الحياة إلى مجموعة من الموارد.
            </p>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-11 fet-elemnt">
            <img class="img-fet" src=" https://s6.imgcdn.dev/Rw2gg.png" />
            <h3 class="m-3 text-light">بيئة تعلم تفاعلية</h3>
            <p class="m-3">
              شارك في دراسات الحالة العملية، والاختبارات التفاعلية، والمناقشات
              الحية.
            </p>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-11 fet-elemnt">
            <img class="img-fet" src=" https://s6.imgcdn.dev/RwxOn.png" />
            <h3 class="m-3 text-light">تعلم من الخبراء</h3>
            <p class="m-3">
              تعلم من خبراء صناعة لديهم سنوات من الخبرة العملية في مجال
              الاستثمار والتحليل الأساسي.
            </p>
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center my-4">
        <h1 class="text-center fs-1 mt-3">
          <strong class="mt-4 text-light"> شهادات الثقة </strong>
        </h1>
        <h3 class="text-center text-light m-4"></h3>

        <div class="col-lg-3 col-sm-5 rounded m-2 bg-flagedu2">
          <div class="text-center">
            <img
              src="https://s6.imgcdn.dev/9puWC.webp"
              class="img-hero comm rounded-circle shadow my-3"
              width="100"
              height="100"
            />
            <h4 class="text-light">راشد حميد</h4>
            <i class="bi bi-chat-right-quote fs-3 text-color"></i>

            <p class="text-light">
              لقد تعلمت الكثير من المعلومات المهمة عن الاستثمار والتداول، وأصبحت
              أكثر ثقة في قدرتي على اتخاذ قرارات استثمارية جيدة.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-5 rounded m-2 bg-flagedu2">
          <div class="text-center">
            <img
              src="https://s6.imgcdn.dev/9pcaS.webp"
              class="img-hero comm rounded-circle shadow my-3"
            />
            <h4 class="text-light">عبد العزيز الكافي</h4>
            <i class="bi bi-chat-right-quote fs-3 text-color"></i>
            <p class="text-light">
              أشكر فريق عمل فلاجيدو على اهتمامهم بنجاح الطلاب. لقد لاحظت أنني
              أتلقى تعليقات مفيدة بشكل منتظم، مما يساعدني على تحسين مهاراتي.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-5 rounded m-2 bg-flagedu2">
          <div class="text-center">
            <img
              src="https://s6.imgcdn.dev/9pMcH.webp"
              class="img-hero comm my-3 rounded-circle shadow"
            />
            <h4 class="text-light">سعود آل قحطان</h4>
            <i class="bi bi-chat-right-quote fs-3 text-color"></i>
            <p class="text-light">
              أنا سعيد بمستوى الدعم الذي أتلقاه من فريق عمل فلاجيدو. إنهم دائماً
              على استعداد للمساعدة، ولقد كانوا دائماً متعاونين.
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <a class="btn btn-info coll-lg-2 col-md-2 col-sm-3 fs-5 m-5" href="#">
          شاركنا النجاح
        </a>
      </div>
    </div>

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Flagedu 2023</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  EVEST_SIGNUP,
  FETCH_CREATIVE_DETAILS,
  FLAGEDU_SIGNUP,
} from "../../utils/store/action.names";

@Component({
  name: "CourseP",
  components: {},
  layout: "page-layout",
})
export default class CourseP extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP)) flageduSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;
  err_msg = [];
  formData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    ci: "",
    uai: "",
    ani: "",
    password: "",
    interest: "Course Paid",
    source: "Course Paid",
  };

  handleFormSubmit() {
    this.err_msg = [];

    if (this.formData["usa_citizen"] == true) {
      this.err_msg.push("USA citizen not allowed to signup!");
      return false;
    }
    // if (this.formData["lastName"] == "") {
    //   lastName = " ";
    // }

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
      // const xForwardedFor = headers["x-forwarded-for"];
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var brand = "flagedu";
    var creative_name = "CourseP";
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
      title: "كورس الاستثمار المتقدم",

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

.logo-img {
  width: 121px;
  position: absolute;
  z-index: 2;
  height: auto;
}
.course-item:hover {
  font-size: 33px;
  cursor: default;
}
.img-hero {
  width: 70px;
}

.img-hero:hover {
  transform: scale(1.1);
}
a {
  font-weight: 900;
}
.text-color {
  color: #0e3b3e;
}
.text-color:hover {
  color: #0d5856;
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

.img-cours {
  object-fit: contain;
}

.course-el:hover {
  transition: transform 0.2s;
}

.course-el:hover {
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
@media screen and (max-width: 768px) {
  .d-small {
    display: none;
  }
}

.reservation-form input.date {
  color: #aaa;
}
.co-li {
  list-style-type: none;
}

.comm {
  width: 100px;
}
.bg-flagedu2 {
  background-color: #12b1ae56;
}
.bg-s {
  background: linear-gradient(0deg, #0c3033 15%, #bdd7da 100%);
}
.bg-x {
  background: linear-gradient(0deg, #bdd7da 10%, #0c3033 30%);
}

.bg-flagedu3 {
  background-color: rgba(0, 0, 0, 0.26);
}

.social-competitions {
  background: radial-gradient(
    62.36% 62.14% at 89.13% 90.86%,
    #207d89 0,
    rgba(1, 47, 53, 0.925) 100%
  );

  color: #fff;
  border-radius: 12px;
  padding: 40px 30px 80px;

  flex-direction: column;
  justify-content: space-between;
  direction: rtl !important;
}

.img-responsive {
  display: block;
  max-width: 70%;
  height: auto;
}

.copytrading {
  background: url(https://cloud.xm-cdn.com/static/xm/pages/copy_trading/copy_trading_homepage_bg.png),
    radial-gradient(85.26% 68.21% at 72.69% 17.36%, #292f39 0, #070707 100%);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  border-radius: 12px;
  padding: 40px 30px 80px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.social-competitions:hover {
  transform: scale(1.05);
}
.copytrading:hover {
  transform: scale(1.05);
}
.course-item:hover {
  background-color: #12b1ae;
}

.img-fet {
  width: 50%;
  height: auto;
}
.img-fet:hover {
}

.img-fet2 {
  object-fit: contain;
}
.fet-elemnt:hover {
  scale: 1.05;

  border-radius: 15px;
}
</style>
