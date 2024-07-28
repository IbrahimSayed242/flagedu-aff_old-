<template>
  <div dir="rtl">
    <nav class="navbar navbar-light bg-light shadow">
      <div class="container-fluid">
        <a class="navbar-brand abs" href="https://falgedu.com"
          ><img
            src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704012431/copy/avatrade/logo-ava_y5jnoq.png"
            alt=""
        /></a>

        <div class="col-lg-5 co-md-7 col-sm-11 col-xs-12 m-3 row">
          <div
            class="text-center col-6 border-left border-primary text-primary"
          >
            <span class="bi bi-telephone-fill text-primary"></span>
            <a href="tel:+1-212-941-9609" id="PhoneNum" class="phoneAndChat"
              >+1-212-941-9609</a
            >
          </div>

          <div
            id="LiveChat"
            class="text-center col-6"
            onclick="openChatWindow()"
          >
            <span class="bi bi-chat-right-dots-fill text-primary"></span>
            <span class="text-primary"> المحادثة المباشرة </span>
          </div>
        </div>
      </div>
    </nav>

    <div class="bg-hero mt-0">
      <div class="row p-3 mx-md-5 mx-sm-0">
        <div class="col-lg-6 col-md-5 col-sm-12 my-5">
          <h1 class="display-4">
            افتح حساب تداول إسلامي! واحصل على مكافأة قد تصل حتى $16,000 دولار!
          </h1>
          <p class="fs-4">
            في آفاتريد يتمتع متداولي الحسابات الاسلامية بنفس المزايا والخصائص
            كما في الحسابات العادية، إلا أنها لا تخضع لأي عمولات إضافية أو فوائد
            ربوية.
          </p>
          <div class="ctext-center row">
            <a
              role="button"
              class="btn bg-g btn-lg m-4 col-8 col-xs-11 xs-m-0"
              href="/"
              >افتح حساب إسلامي</a
            >
          </div>

          <div
            class="col-sm-11 col-md-12 col-lg-12 d-lg-block d-md-block d-sm-none d-none"
          >
            <div id="">
              <h2>مزايا حساب التداول الإسلامي:</h2>
              <ul class="fa-ul fs-6">
                <li>
                  <em
                    aria-hidden="true"
                    class="text-s bi bi-check-circle-fill m-1"
                  ></em>
                  <span>
                    <strong>رافعة مالية عالية </strong>تصل حتى
                    <i class="dc bg-leverage-major">30:1</i>
                  </span>
                </li>
                <li>
                  <em
                    aria-hidden="true"
                    class="text-s bi bi-check-circle-fill m-1"
                  ></em>
                  <span>
                    <strong>مدراء حسابات مخصصون </strong>على مدار ساعات التداول
                  </span>
                </li>
                <li>
                  <em
                    aria-hidden="true"
                    class="text-s bi bi-check-circle-fill m-1"
                  ></em>
                  <span> وسيط مالي <strong>موثوق ومرخص </strong>بالكامل </span>
                </li>
                <li>
                  <em
                    aria-hidden="true"
                    class="text-s bi bi-check-circle-fill m-1"
                  ></em>
                  <span>
                    يتم إيداع الاموال في <strong>حسابات مفصولة</strong>
                  </span>
                </li>
                <li>
                  <em
                    aria-hidden="true"
                    class="text-s bi bi-check-circle-fill m-1"
                  ></em>
                  <span> <strong>أكثر من 250 </strong>أداة مالية للتداول </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 col-sm-8 rounded bg-form mt-5 py-3 mx-auto"
        >
          <div>
            <h2 class="text-center m-3">هيا لنبدأ</h2>
            <form @submit.prevent="handleFormSubmit">
              <div class="form-input">
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="الاسم الاول "
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-input">
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="الاسم الاخير "
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-input">
                <label class=""> هاتف</label>
                <input
                  v-model="formData.phone"
                  type="text"
                  placeholder="+00 000 000 0000"
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-input">
                <label class="">الايميل</label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="ex: 0C7Zd@example.com"
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-input">
                <input
                  type="text"
                  placeholder="قسيمة (اختياري)"
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-input err-msg-container">
                <div
                  class=""
                  v-for="(item, idx) in err_msg"
                  :key="'error_' + idx"
                >
                  * {{ item }}
                </div>
              </div>
              <small class="text-center text-muted col-8"
                >يعني إنشاء حساب أنك توافق على سياسة الخصوصية وتلقي التقارير
                الاقتصادية والمراسلات التسويقية من AvaTrade. يمكنك إلغاء
                الاشتراك من القائمة البريدية في أي وقت.
              </small>

              <div class="form-input">
                <button class="btn bg-g px-4" type="submit">تسجيل</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center m-4">
      <img
        src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704012433/copy/avatrade/lp-pc-award_qdzmgq.jpg"
        class="col-9"
      />
    </div>

    <div class="row flex justify-content-center">
      <div class="col-8 m-4 sm-m-1">
        <p class="text-center">
          يتم تنظيم AVA Trade EU Ltd بواسطة البنك المركزي الأيرلندي رقم (C53877)
          يتم تنظيم Ava Trade Markets Ltd بواسطة لجنة الخدمات المالية B.V.I.
          (SIBA/L/13/1049) يتم تنظيم شركة Ava Capital Markets Australia Pty Ltd
          بواسطة ASIC (رقم 406684) يتم تنظيم شركة Ava Capital Markets Pty من قبل
          هيئة سلوك القطاع المالي في جنوب إفريقيا (FSCA رقم 45984) Ava Trade
          Japan K.K مرخصة ومنظمة في اليابان من قبل وكالة الخدمات المالية (رقم
          الترخيص: 1662) ، ومن قبل جمعية العقود الآجلة المالية في اليابان1574).
          تخضع AVA Trade Middle East Ltd لرقابة هيئة تنظيم الخدمات المالية لسوق
          أبوظبي العالمي (رقم 190018)) شركة DT Direct Investment Hub Ltd هي شركة
          مرخصة من هيئة الأوراق المالية والبورصات القبرصية (رقم 347/17). إيتريد
          مرخصة في إسرائيل من قبل هيئة الأوراق المالية الإسرائيلية ( رقم
          514666577). اقرأ الإفصاح عن المخاطرة في أفاتريد قبل تداول العملات
          الأجنبية أو عقود الفروقات أو خيارات العملات الأجنبية. العقود مقابل
          الفروقات هي أدوات تداول معقدة، وتحمل مخاطر عالية يمكن أن تؤدي إلى
          خسارة الأموال بسرعة بسبب الرافعة المالية. 76% من حسابات المتداولون
          الفرديون يخسرون المال عند تداول عقود الفروقات مع هذا المزود. يجب أن
          تأخذ بعين الاعتبار مدى فهمك لكيفية عمل العقود مقابل الفروقات وفيما إذا
          كنت تستطيع تحمل المخاطر العالية التي قد تؤدي إلى خسارة أموالك.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  AVA_SIGNUP,
  FETCH_CREATIVE_DETAILS,
} from "../../utils/store/action.names";

@Component({
  name: "AvaIslamic",
  components: {},
  layout: "page-layout",
})
export default class Avatrade_lp extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, AVA_SIGNUP)) avaSignup;
  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS))
  fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ci: "",
    uai: "",
    ani: "",
    interest: "Ava  Islamic",
    source: "Ava Islamic Landing",
  };
  err_msg = [];

  handleFormSubmit() {
    this.err_msg = [];

    this.formData["user_ip"] = this.user_ip;
    this.avaSignup(this.formData)
      .then((d) => {
        console.log(d);
        var loginUrl = d.login_url;
        location.href = loginUrl;
        this.$router.push({
          name: "thank-you",
          query: { redirect_uri: loginUrl },
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

    var brand = "ava";
    var creative_name = "Ava Islamic";
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

<style scoped lang="scss">
form {
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  .form-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      margin-bottom: 23px;
      height: 35px;
      width: 100%;
      padding-left: 10px;
      color: #0b0b0b;
    }
    ::placeholder {
      color: #929292;
      opacity: 1;
    }

    ::-ms-input-placeholder {
      color: #999999;
    }
  }
  .err-msg-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: red;
  }
}

.bg-hero {
  background-image: url(https://res.cloudinary.com/dt9k74vof/image/upload/v1704012439/copy/avatrade/Islamic_ar_2000_albqtu.jpg) !important;
  height: auto !important;
  width: 100%;
  background-size: cover;
  margin-top: 10px;
  background-position: top center;
  padding-bottom: 5%;
}

.bg-form {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.38);
}

.bg-form2 {
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.text-s {
  color: #82bb41;
}
.bg-g {
  background-color: #82bb41;
}
</style>
