<template>
  <div dir="rtl">
    <section class="speedyui speedyui-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 my-2">
            <div class="hero-content text-sm-center">
              <p>إيفي تريد – افتح الباب لنجاح تداول</p>
              <img
                src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707109431/logo_3_waarbf.png"
                alt="eve trade"
              />
              <h1
                class="mb-3 fw-bolder display-4 text-right text-sm-center"
                style="line-height: 75px"
              >
                مرحبًا بك في <span class="text-flagedu"> إيفي تريد </span> –
                وسيط التداول الرائد عالميًا!
              </h1>

              <p
                class="text-secondary mb-4 fs-6 pe-md-5 me-md-5 text-sm-center"
              >
                هل حلمت يومًا بتجربة تداول فريدة وناجحة؟ هل تبحث عن فرص
                للاستثمار في أسواق المال العالمية؟ إذاً، فأنت في المكان المناسب!
                إيفي تريد هو وجهتك المثالية للتداول والاستثمار، حيث تلتقي
                الاحترافية بالابتكار والتميز بالمرونة.
              </p>

              <a
                href="#sin-in"
                class="btn btn-md px-5 py-3 btn-primary shadow-lg"
                >ابدأ الان</a
              >
              <a
                href="https://flagedu.com/companies"
                class="l-more ms-3 text-decoration-none fw-semibold mx-3 d-inline-block"
              >
                <span class="text-flagedu icon"> تعرف علي المزيد</span>
                <i class="text-flagedu bi bi-arrow-left mx-1"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 my-2">
            <figure class="hero-img-wrap my-2">
              <img
                src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707050154/banner-img_dtnzcs.png"
                class="img-eve"
                width="100%"
                alt="eve trade"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!--     hero end  -->

    <div class="bg-x p-5" id="sin-in">
      <div class="row mt-5 justify-content-center">
        <div class="col-11 col-md-11 col-lg-8 bg-light shadow pt-5 row pb-3">
          <p class="text-center mb-4 fs-2">افتح حساب حقيقي معنا</p>
          <hr />
          <p class="text-center mb-4 fs-5 d-md-none">
            حساب إسلامي خالي من العمولات والربا
          </p>

          <div class="col-6 d-none d-md-block">
            <div class="row">
              <img
                class="col-10 m-auto col-lg-8"
                src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707057864/halal-certificate_u6lzsw.png"
              />
            </div>
            <p class="text-center mb-4 fs-5">
              حساب إسلامي خالي من العمولات والربا
            </p>

            <ul style="list-style: none" class="">
              <li class="my-3">
                <i class="bi bi-patch-check text-info m-2"></i> هوامش تبدأ من
                0.0 نقطة
              </li>
              <li>
                <i class="bi bi-patch-check text-info m-2"></i>

                رافعة مالية تصل إلى 1: 400
              </li>
              <li class="my-3">
                <i class="bi bi-patch-check text-info m-2"></i> مدير حساب الشخصي
              </li>
              <li>
                <i class="bi bi-patch-check text-info m-2"></i>
                تقارير التحليل الفني
              </li>
              <li class="my-3">
                <i class="bi bi-patch-check text-info m-2"></i>
                إمكانية استخدام الأدوات التعليمية
              </li>
              <li class="my-3">
                <i class="bi bi-patch-check text-info m-2"></i>
                استخدام جميع المنصات
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6 m-auto">
            <form @submit.prevent="handleFormSubmit">
              <div class="row">
                <p class="fs-3">معلومات شخصية</p>

                <div class="form-group">
                  <div class="input-group">
                    <span class="gro"
                      ><i class="bi bi-person" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="formData.firstName"
                      style="border-width: 1px 0px 1px 1px"
                      type="text"
                      class="form-control rounded-0"
                      name="firstname"
                      placeholder="الاسم الأول"
                    />
                  </div>

                  <div class="input-group mt-3">
                    <span class="gro"
                      ><i class="bi bi-person" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="formData.lastName"
                      style="border-width: 1px 0px 1px 1px"
                      type="text"
                      class="form-control rounded-0"
                      name="lasttname"
                      placeholder="الكنية"
                    />
                  </div>

                  <div class="input-group mt-3">
                    <span class="gro"
                      ><i class="bi bi-envelope" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="formData.email"
                      style="border-width: 1px 0px 1px 1px"
                      type="email"
                      class="form-control rounded-0"
                      name="email"
                      placeholder="االبريد الالكتروني"
                    />
                  </div>

                  <div class="input-group mt-3">
                    <span class="gro"
                      ><i class="bi bi-phone" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="formData.phone"
                      type="number"
                      class="form-control rounded-0"
                      name="phone"
                      placeholder="الهاتف"
                    />
                  </div>
                  <div class="input-group mt-3">
                    <span class="gro"
                      ><i class="bi bi-shield-check" aria-hidden="true"></i
                    ></span>
                    <input
                      style="border-width: 1px 0px 1px 1px"
                      type="text"
                      class="form-control rounded-0"
                      name="Coupon"
                      placeholder="قسيمة (اختياري)"
                    />
                  </div>
                </div>
              </div>

              <div class="my-3">
                <div class="text-center">
                  <button class="btn btn-primary px-5" type="submit">
                    ارسال
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3 p-3">
      <div class="row align-items-center flex-sm-wrap justify-content-center">
        <div class="col-lg-5 my-2">
          <div class="hero-content">
            <h1 class="fw-bolder fs-3">
              <span class="text-flagedu"> من نحن </span>
            </h1>

            <span class="text-flagedu display-6">حولنا </span>

            <span>
              نقدم لكم تاريخ إيفي تريد وقصة نجاحنا الرائدة في عالم التداول.
              تعرّف على مهمتنا في تمكين المتداولين من التكنولوجيا الحديثة
              والخدمات اللا مثيل لها. نحن في إيفي تريد نفتخر بأن نكون وسيط
              التداول الرائد عالميًا. منذ تأسيسنا في عام ٢٠٠٥، واجهنا العديد من
              التحديات والنجاحات التي شكلت رؤيتنا وقيمنا. نحن فريق من الخبراء
              والمحترفين في مجال التداول، نسعى جاهدين لتزويد عملائنا بتجربة
              تداول استثنائية وفريدة.
            </span>
            <p></p>

            <a
              href="#"
              class="l-more ms-3 text-decoration-none fw-semibold mx-3 d-inline-block"
            >
              <span class="text-flagedu icon"> تعرف علي المزيد</span>
              <i class="text-flagedu bi bi-arrow-left mx-1"></i>
            </a>
          </div>
        </div>

        <div class="col-sm-5 col-md-3 bg-x p-3 m-1">
          <figure class="hero-img-wrap my-2 row">
            <img
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707059551/S02-img02_qpwxdb.jpg"
              class=" "
              alt="eve trade"
            />
            <h4 class="m-3">هدفنا</h4>
            <p>
              هدفنا هو تمكين العملاء من الوصول إلى الأسواق المالية العالمية
              وتقديم الدعم والتدريب اللازم لهم لتحقيق نجاح مستدام في تداولهم.
            </p>
          </figure>
        </div>
        <div class="col-sm-5 col-md-3 bg-x p-3 m-1">
          <figure class="hero-img-wrap my-2 row">
            <img
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707059552/S02-img01_igeft6.jpg"
              class=""
              alt="eve trade"
            />

            <h4 class="m-3">قيمنا</h4>
            <p>
              الاحترافية: نعمل بمهنية عالية ونسعى لتقديم خدمات ذات جودة عالية
              لعملائنا. الشفافية: نؤمن بالشفافية ونتعامل مع عملائنا بنزاهة وصدق.
            </p>
          </figure>
        </div>
      </div>
    </div>

    <div class="">
      <div class="d-flex flex-column justify-content-center p-5 text-center">
        <h2 class="fs-1 mr-3">أخبار السوق</h2>
        <p class="fs-6 mr-4">
          ضع أصبعك على نبض الأخبار المالية وتابع آخر التحديثات الاقتصادية.
          تحليلاتنا المميزة ستساعدك في فهم تأثير الأحداث على الأسواق
        </p>

        <div class="row justify-content-center">
          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">تحليلات الأسواق المالية</p>
          </div>

          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">الأخبار الاقتصادية الفورية</p>
          </div>

          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">التحليل الفني والأساسي</p>
          </div>

          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">دورات تعليم التداول</p>
          </div>

          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">مقالات وموارد تعليمية</p>
          </div>

          <div class="col-5 col-md-3 bg-light p-4 border rounded-pill m-2">
            <p class="m-auto">تدريب وتعليم المبتدئين</p>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="row p-5">
        <h2 class="fs-1 mr-3">منصة التداول</h2>
        <p class="fs-6 mr-4">
          استكشف منصتنا المتقدمة واحصل على وصول سهل وسريع إلى الأسواق المالية.
          استفد من أدوات التداول المتطورة والبيانات الحية لاتخاذ قرارات معلومة.
        </p>

        <img
          class="d-none d-sm-block"
          src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707060450/eve_trade_vgpkjp.png"
          alt="eve trade"
        />

        <img
          class="d-sm-none"
          src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707061123/eve_eqlukc.png"
          alt="eve trade"
        />
      </div>
    </div>

    <footer class="bg-footer">
      <div class="row p-5">
        <h2 class="fs-1 text-light text-center">
          موقعنا مؤمن بواسطة بروتوكول المقابس الآمنة SSL.
        </h2>
        <p class="fs-6 m-2 text-light text-center">
          2023حقوق النشر © حواء للتجارة. كل الحقوق محفوظة.
          <br />
          Eve Invest هي علامة تجارية مملوكة لشركة TIGER TRADING LIMITED، ومرخصة
          لممارسة الوساطة المالية في جزيرة موالي المستقلة، ومرخصة ومنظمة من قبل
          هيئة MWALI INTERNATIONAL SERVICES AUTHORITY بموجب رقم التسجيل
          [HY00823429].
        </p>
        <br />
        <p class="m-2 text-light text-center">تنصل:</p>
        <br />
        <p class="text-light text-center">
          تحذير المخاطر وإخلاء المسؤولية القانونية: في حين أن تداول الأسهم
          المحلية والعالمية أو الفوركس أو العقود مقابل الفروقات يمكن أن يكون
          مربحًا، إلا أنه ينطوي على مخاطر عالية بخسارة استثمارك، خاصة عند
          التداول على الهامش. يجب على العملاء ممارسة العناية الواجبة والحذر عند
          اتخاذ قرارات التداول الخاصة بهم. يتحمل العملاء مسؤولية التعلم واكتساب
          المعرفة والخبرة اللازمة لاستخدام منصة التداول وكل ما هو مطلوب للتداول
          السليم. يجب أن يدرك العملاء أن مخاطر التداول قد تتجاوز المبالغ
          المودعة. كما يجب على العملاء أن يفهموا أن المعرفة والخبرة لا تضمن
          الربح حيث يمكن أن تتأثر الأسواق بعوامل غير متوقعة قد تؤدي إلى خسائر
          العملاء، مثل الأزمات الاقتصادية و/أو السياسية أو غيرها. في أي حال من
          الأحوال، لن نتحمل المسؤولية عن أي قرارات تداول أو انتهاكات للقواعد
          و/أو اللوائح القانونية أو افتقار العملاء إلى المعرفة و/أو الخبرة. يتم
          توفير أداة المخزون كمرجع فقط.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  EVETRADE_SIGNUP,
  FETCH_CREATIVE_DETAILS,
} from "../../utils/store/action.names";

@Component({
  name: "EveTrade1",
  components: {},
  layout: "page-layout",
})
export default class EveTrade extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, EVETRADE_SIGNUP)) eveTradeSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ci: "",
    uai: "",
    ani: "",
    interest: "EveTrade ",
  };
  err_msg = [];

  handleFormSubmit() {
    this.err_msg = [];

    this.formData["user_ip"] = this.user_ip;
    this.eveTradeSignup(this.formData)
      .then((d) => {
        console.log(d);
        // var loginUrl = d.login_url;
        // location.href = loginUrl;
        this.$router.push({
          name: "thank-eve",
          // query: { redirect_uri: loginUrl },
        });
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

    var brand = "evetrade";
    var creative_name = "EveTrade Campaign1";
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

  head() {
    return {
      title: "Eve Trade | Campaign",
    };
  }
}
</script>

<style>
* {
  font-family: "Readex Pro", sans-serif;
}
#app {
  text-align: center;
  color: #00adee;
  margin-top: 60px;
}
.bg-flagedu {
  background-color: #2b4350;
}
.btn-primary {
  background-color: #1c8b89;
  border-color: #2b4350;
}
.btn-primary:hover {
  background-color: #2b4350;
  border-color: #1c8b89;
}
.text-flagedu {
  color: #1c8b89;
}
.bf-flagedu-light {
  background-color: #1c8b89;
}
h1 {
  line-height: 5rem;
}
.bg-g {
  background: rgba(9, 137, 137, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(9, 137, 137, 0.21);
}

.border-x {
  border-style: solid;
  border-color: #1c8b89;
  border-radius: 10px;
}

.gro {
  padding: 6px 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
  color: #858080;
  text-align: center;
  background-color: transparent;
  border-radius: 0;
  border-width: 1px 1px 1px 0px;
  border-color: #d2d2d2;
  border-style: solid;
  background-color: white;
}
.bg-x {
  background-image: url("https://res.cloudinary.com/dt9k74vof/image/upload/v1707058480/bg_ljfjkp.png");
}

.bg-footer {
  background-image: url("https://res.cloudinary.com/dt9k74vof/image/upload/v1707061456/footer-bg_atsxis.jpg");
}
/* add important */

.form-control {
  color: #131415 !important;

  border-width: 1px 0px 1px 1px;
  border-color: #d2d2d2;
  border-style: solid;
  background-color: white;
  padding: 5px;
  &:focus {
    border-color: #d2d2d2;
  }
}
.input-group {
}
:focus .input-group {
  border-color: #000000;
  border-style: solid;
}
</style>
