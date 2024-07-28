<template>
  <div dir="rtl">
    <nav class="navbar navbar-light bg-light shadow">
      <div class="container-fluid">
        <a href="https://falgedu.com"
          ><img
            src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704012431/copy/avatrade/logo-ava_y5jnoq.png"
            alt="avatrade"
        /></a>

        <div class="m-3">
          <div
            id="LiveChat"
            class="text-center col-6"
            onclick="openChatWindow()"
          >
            <span class="bi bi-chat-dots"></span>
            <span class="phoneAndChat"> المحادثة المباشرة </span>
          </div>
        </div>
      </div>
    </nav>

    <main class="bg-hero mt-0">
      <div class="row m-0">
        <div class="col-lg-5 col-md-10 col-sm-10 col-xs-10 sm-m-2 m-md-5">
          <h1 class="display-3 mt-5" style="font-weight: 700">مكافأة خاصة!</h1>
          <p class="fs-4">
            هل تريد بدء التداول؟ <br />لدينا بونص حصري لك. احصل على 20٪ بونص على
            إيداعك الأول!
          </p>
          <h3>*للعملاء الجدد فقط، تُطبَّق الشروط والأحكام.</h3>
        </div>

        <div
          class="col-lg-4 col-md-6 col-sm-9 col-xs-11 md-my-0 sm-my-4 rounded bg-form form-ava mt-5 py-3 mx-auto"
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
                  class="rounded-2 p-2 bg-form2 border-1 border-light p-3"
                />
              </div>
              <div class="form-input">
                <label class="text-muted"> هاتف</label>
                <input
                  v-model="formData.phone"
                  type="text"
                  placeholder="+00 000 000 0000"
                  class="rounded-2 p-2 bg-form2 border-1 border-light p-3"
                />
              </div>
              <div class="form-input">
                <label class="text-muted">الايميل</label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="ex: 0C7Zd@example.com"
                  class="rounded-2 p-2 bg-form2 border-1 border-light p-3"
                />
              </div>
              <div class="form-input">
                <input
                  type="text"
                  placeholder="قسيمة (اختياري)"
                  class="rounded-2 p-2 bg-form2 border-1 border-light p-3"
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
                <button class="btn bg-g px-4 mt-3 fs-4" type="submit">
                  تسجيل
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <diV class="row">
      <div class="col-lg-7 col-md-9 col-sm-11 m-3">
        <h3 class="m-3 text-primary">تعرف على المزيد حول المؤشرات</h3>
        <p>
          المؤشرات عبارة عن مجموعة من الأصول مجمعة معًا لتعطيك فكرة عن صحة
          الاقتصاد أو القطاع. هل سترتفع قيمة المؤشر أم ستنخفض؟ يمكنك توقع حركات
          كل مؤشر. يحد التداول عبر الاقتصادات والقطاعات الأوسع نطاقًا تعرضك
          للمخاطرة ويتيح لك استثمارا متنوعا ما يعني عدم الاضطرار إلى التداول في
          أصل محدد بعينه.
        </p>
      </div>
    </diV>

    <div class="col-lg-7 col-md-9 col-sm-11 m-3">
      <h3 class="m-3 text-primary">عائد تداول المؤشرات على الأسهم</h3>
      <p>
        عائد تداول المؤشرات على الأسهم ربما سمعت أشخاصًا يتحدثون عن تداول مؤشر
        ستاندرد آند بورز500؟ هذا مؤشر رائد يجمع أفضل 500 شركة تتداول في بورصات
        الولايات المتحدة. تقدم لنا قيمة هذا المؤشر صورة واضحة عن صحة الاقتصاد
        العالمي. تشمل المؤشرات الرئيسية الأخرى مؤشر فوتسي100 في المملكة المتحدة،
        مؤشر نيكاي 225 في اليابان ومؤشر داكس30 في ألمانيا.
      </p>

      <h4 class="m-2">اتجاهات أكثر توافقا</h4>

      توفر المؤشرات طريقة أكثر توازناً واستقراراً للاستثمار في معنويات واتجاهات
      السوق السائدة. باستثمار واحد، ستحصل بشكل فعال على العديد من الأصول دفعة
      واحدة. تمنحك المؤشرات ميزة التنويع من خلال تعريضك لمنطقة بأكملها أو مجموعة
      متنوعة من القطاعات دون الحاجة إلى الاعتماد على نتيجة الأسهم الفردية.

      <h4 class="m-2">تعرض أكبر، عمل أقل</h4>
      عادة عند شراء الأسهم، يجب عليك إجراء بحث على الشركة من أجل التنبؤ بالطريقة
      التي سيتحرك بها السهم. يمنحك تداول المؤشرات إمكانية الوصول إلى قطاع أو
      منطقة بأكملها، مما يلغي الكثير من الإجراءات القانونية التي ينطوي عليها
      تداول الأسهم.

      <h4 class="m-3">تداول عندما تنخفض الأسواق أو ترتفع</h4>

      عند تداول المؤشرات كعقود مقابل الفروقات، يمكنك التداول عندما ترتفع قيمة
      المؤشر أو تنخفض. عند تداول الأسهم العادية، تحتاج إلى ارتفاع قيمة السهم من
      أجل تحقيق الربح. يمكنك أيضًا تداول المؤشرات في الأسواق المتقلبة، حيث أنها
      عادة ما تكون أكثر توازناً من الأسهم الفردية.

      <div class="row">
        <img
          class="col-lg-12 d-lg-block d-md-block d-sm-none"
          src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704021908/copy/avatrade/avatrade_zibqec.webp"
          alt="ava trade"
        />

        <img
          class="col-lg-12 d-none d-md-none d-lg-none d-sm-block"
          src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704022724/copy/avatrade/avatrade_2_rzmxe4.webp"
          alt="ava trade"
        />
      </div>

      <h2 class="m-3 text-primary">لماذا تتداول المؤشرات مع أفاتريد؟</h2>

      <h4 class="m-3">فروق أسعار ضيقة</h4>
      تداول المؤشرات العالمية الرئيسية مع فروق أسعار منخفضة تصل إلى 0.5 دولار
      على مؤشر ناسداك 100 ، كاك40 وداو جونز.
      <h4 class="m-3">أكثر من 20 مؤشرا عالميا رئيسيا</h4>

      الاستجابة للأسواق والأحداث العالمية عبر مجموعة تضم أكثر من 20 مؤشرًا في
      جميع أنحاء أوروبا، المملكة المتحدة، الولايات المتحدة وآسيا
      <h4 class="m-3">التنفيذ الفوري</h4>
      تفاعل فورًا مع الأخبار العاجلة على منصة التداول الحائزة على جوائز مع
      التنفيذ الفوري.
      <h4 class="m-3">الاستفادة من السوق سواء كان صاعدا أو هابطا</h4>
      يسمح لك تداول المؤشرات بالشراء والبيع على حد سواء حسب تحركات الأسعار
      اعتمادًا على وجهة نظرك للسوق.
      <h4 class="m-3">لا توجد عمولة</h4>
      يتم تعويض أفاتريد من خلال فرق السعر بين العرض والطلب، ما لم يتم النص على
      خلاف ذلك. لا تتقاضى أفاتريد عمولات عند تداول المؤشرات.
    </div>

    <img
      class="col-lg-12 d-lg-block d-none d-md-block d-sm-none"
      src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704023773/copy/avatrade/avatrade_jzlbb2.png"
      alt="ava trade"
    />

    <img
      class="col-lg-12 d-lg-none d-md-none d-sm-block d-xs-block"
      src="https://res.cloudinary.com/dt9k74vof/image/upload/v1704023773/copy/avatrade/ava3_acneb7.webp"
      alt="ava trade"
    />
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
  name: "Avatrade_lp",
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
    interest: "Ava  Bunos",
    source: "Ava Bonus Landing",
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
    var creative_name = "Ava Bonus";
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

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style scoped lang="scss">
.bg-hero {
  background-image: url(https://res.cloudinary.com/dt9k74vof/image/upload/v1704019480/copy/avatrade/Imag_descktop_hkr0lh.jpg) !important;
  height: auto !important;
  width: 100%;
  background-size: cover;
  margin-top: 10px;
  background-position: top center;
  padding-bottom: 5%;
}

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
      height: 50px;
      width: 100%;
      padding-left: 10px;
      color: #1a1919;
      font-size: 23px;
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

.bg-form {
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

.form-ava {
  position: fixed;
  left: 64px;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .form-ava {
    position: relative;
  }
}

@media (max-width: 767.98px) {
  .form-ava {
    position: relative;
    left: 0px;
  }
}
</style>
