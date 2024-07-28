<template>
  <div dir="rtl"
    >
    <div class=" " style="background: url(https://s6.imgcdn.dev/RIgHw.jpg);height: auto;padding: 55px 0px;padding-bottom: 0px;background-size: cover;" >
      <div class=" row m-lg-5 m-md-2 m-sm-1  d-flex justify-content-center m-2">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-right  ">
          <h1 class="m-2" style="color: #fff; font-size: 44px;">أفضل الأسهم العالمية متاحة
<span
              style="color:#fff;font-weight: bold;"><br>

              الأن للتداول ب %0 عمولة
              
                <br>
                
            </span></h1>


          <h3 class="topic1" style="color:#64faee;margin-top:60px;">

            افتح حساب الآن وكن مؤهلاً للحصول
            <br>
على توزيعات أرباح 
أنجح الشركات <br>
العالمية مع إيڤست


          </h3>

          


          <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-5">


     
            <ul>


              <li class="fs-5 text-light"><i class="bi bi-arrow-down-left-circle-fill color2"></i> تملك %100
                للتداول</li>
              <li class="fs-5 text-light"><i class="bi bi-arrow-down-left-circle-fill color2"></i> بعمولة %0
                عالية </li>
              <li class="fs-5 text-light"><i class="bi bi-arrow-down-left-circle-fill color2"></i> تكاليف أضافية %0</li>

            </ul>

            <img src="https://api.flagedu.com/media/images/stocksball12.original_APyPHtD.png" class="img-coin col-lg-8 col-sm-5 mx-5">
          </div>
        </div>






        <div class="col-lg-4 col-md-7  col-sm-9 col-xs-12  " id="sin-in">

          <div class="bg-light rounded py-5 px-4 my-3">
            <img class="text-center mx-5" src="https://api.flagedu.com/media/images/spanish_Logo.original.png"
              style="width:70%; text-align: center; ">
            <p class="color text-center">سجّل الآن مجاناً وابدأ التداول
            
            </p>

            <form @submit.prevent="handleFormSubmit">
              <div class="form-input ">

                <input v-model="formData.firstName" type="text" placeholder="الاسم الاول " required />
              </div>
              <div class="form-input ">

                <input v-model="formData.lastName" type="text" placeholder="اسم العائلة " />
              </div>
              <div class="form-input">

                <input v-model="formData.email" type="email" placeholder="البريد الالكتروني" required />
              </div>
              <div class="form-input">

                <input v-model="formData.password" type="password" placeholder=" كلمه المرور" required />
              </div>
              <div class="form-input text-end">
                <label>اختر الدولة</label>
                <vue-country-code :enabledCountryCode="true" :dropdownOptions="{ disabledDialCode: true }"
                  :disabled="true" @onSelect="handleSelectedCountry">
                </vue-country-code>
              </div>
              <div class="form-input">

                <input v-model="formData.phone" type="text" placeholder="رقم الهاتف" required />
              </div>
              <div class="form-input">
                
                <input
                v-model="formData.coupon" 
                  type="text"
                   placeholder="قسيمة (اختياري)"
                  class="rounded-2 p-2 bg-form2 border-1 border-light"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">ارغب في تلقي الرسائل التسويقية</label>
              </div>
              <div class="form-input">
                <button type="submit" class="btn-reg">تسجيل</button>
              </div>
            </form>
          </div>

        </div>


      </div>
      <p>   خاضع للأحكام و الشروط  </p>

    </div>











    <div class="row d-flex justify-content-center"
      style="background-color: #fff; height: auto;padding-bottom: 0px;background-size: cover;">
      <div class="col-12 text-light text-right p-5 ">
        <h1 class="text-center dark-evest" style="font-size: 44px;"><strong> لماذا إيڤست؟ </strong> </h1>

      </div>


        <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
        <img src="https://s6.imgcdn.dev/RIN9u.png" width="100%">
       </div>

       <div class="col-lg-3 col-md-4 col-sm-6 rounded text-center m-2">
        <img src="https://s6.imgcdn.dev/RIMug.png" width="100%">
       </div>

       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src="https://s6.imgcdn.dev/RIChq.png" width="100%">
       </div>


       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
        <img src="https://s6.imgcdn.dev/RIIPB.jpg" width="100%">
       </div>

       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
        <img src="https://s6.imgcdn.dev/RIudN.png" width="100%">
       </div>

       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src="https://s6.imgcdn.dev/RIc1v.png" width="100%">
       </div>
     
</div>

<div class="row d-flex justify-content-center" style="background: url(https://lpevest.com/islamic_v1_af/assets/img/back.png);height: auto;padding: 55px 0px;padding-bottom: 0px;background-size: cover;"  >
      <div class="col-12  text-light text-right p-5 ">
        <h1 class="text-center dark-evest" style="font-size: 44px;"><strong> أهم ما يميّز إيڤست</strong> </h1>
        <div class="row"> 
<img class="col-1 img-e"  src="https://s6.imgcdn.dev/RIHnL.png"  style="object-fit:contain ">
       <p class=" text-center col-8 m-auto  text-e" >في إيڤست، ستحصل على كافة البيانات و الأدوات اللازمة لتستطيع من خلالها تداول عقود الفروقات مع 0% عمولة وبدون تكاليف أضافية    </p>
       <img class="col-1  img-e "   src="https://s6.imgcdn.dev/RIXxa.png"  style="object-fit:contain" >
      </div>
    </div>
</div>






<div class=" pt-5" style="background-color: #fff; height: auto;padding-bottom: 0px;background-size: cover;">
  
  <div class="my-5 " ><h1 class="text-center dark-evest my-5" style="font-size: 36px;"><strong class="my-5">   أهم ما يميّز إيڤست   </strong> </h1> </div>
<div class="row my-5 d-flex justify-content-center ">
      <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src="https://s6.imgcdn.dev/RI33v.jpg" width="100%" style="object-fit:contain">
       <p>  أنتقال سريع ومرن عبر زوايا الموقع
منصة متقدمة وسهلة الأستخدام
دعم مباشر متعدد اللغات 24/7 </p>
       </div>


       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2 " >
       <img src=" https://s6.imgcdn.dev/RId0g.jpg" width="100%" style="object-fit:contain">
       <p>  أنتقال سريع ومرن عبر زوايا الموقع
منصة متقدمة وسهلة الأستخدام
دعم مباشر متعدد اللغات 24/7 </p>
       </div>
    






   


      




 
<div class=" my-5" > </div>

  <h1 class="text-center dark-evest mt-5" ><strong>     لماذا عليك تداول الأسهم مع ايفست؟ </strong> </h1>  
      
      <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src="https://s6.imgcdn.dev/RImRB.jpg" width="100%" style="object-fit:contain">
      
       </div>



       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src=" https://s6.imgcdn.dev/RIeTq.jpg" width="100%" style="object-fit:contain">
     
       </div>


       <div class="col-lg-3 col-md-4 col-sm-6  rounded text-center m-2">
       <img src="  https://s6.imgcdn.dev/RIbwN.jpg" width="100%" style="object-fit:contain">
   
       </div>
     
     </div>
     
      <div class="col-12 rounded  text-center m-2 my-5 justify-content-center ">



       <a class="btn btn-info px-5 text-center my-5" href="#sin-in">اضغط هنا للتسجيل</a >

      </div>

    </div>













    






















      <footer
        style="background: url(https://api.flagedu.com/media/images/stripbg.original.jpg);height: auto;padding-bottom: 0px;background-size: cover;">
        <div class="container p-5">
          <div class="row">
            <div class="col-md-12 ar-dir" style="text-align: right;">
              <p class="text-light">

                ينطوي تداول العقود مقابل الفروقات على مخاطر وبالتالي فإن تداول هذه الأدوات المالية يتطلّب معرفة وفهم لها
                وللمخاطر المترتبة على التداول بالإضافة لفهم أن هذه المخاطر غير مناسبة للجميع. يحتوي التّداول بالرافعة
                المالية على مخاطر قد تصل إلى خسارة إجمالي الأموال المستثمرة خلال فترة زمنية قصيرة نسبياً.
                <br><br>تحصّل evest عوائدها بشكلٍ أساسي من خلال فروقات الأسعار بين سعر البيع والشّراء. بإمكانك التّحقق من
                الرسوم والنفقات المرتبطة بالتّداول من خلال <a
                  href="https://mena.evest.com/إبدا-التداول/رسوم-افيست/?lang=ar#/" target="_blank"> الضغط هنا</a>.
                <br><br>evest هي علامة تجارية مملوكة بالكامل وتتم إدارتها من قبل شركة اتريافايننشيل المحدودة
                (Atriafinancial LTD) وهي شركة مسجّلة في فانواتو من قبل لجنة الخدمات المالية فانواتو (VFSC) .
                <br><br>إن التفويض الممنوح من قبل VFSC لتشغيل منصة تداول لا يشكّل تأكيداً فيما يخص جودة التّداول أو أدوات
                التداول المقدمة على المنصة أو أدنى تأكيد بأن الاستثمار آمن أوة موصىً به. عنوان المكتب هو: 1276 ،بناية
                جوفانت، طريق كومول، بورتفيال، جمهورية فانواتو.
                <br><br>
                لمزيد من المعلومات يرجى التواصل معنا عبر البريد الإلكترونيلمزيد من المعلوماتلمزيد من المعلومات يرجى
                التواصل معنا عبر البريد الإلكتروني <a
                  href="https://lpevest.com/cdn-cgi/l/email-protection#47343237372835330722312234336924282a"><span
                    class="__cf_email__"
                    data-cfemail="a8dbddd8d8c7dadce8cddecddbdc86cbc7c5">[email&#160;protected]</span></a> أو عن طريق الرقم
                المجاني في الإمارات العربية المتّحدة <a href="tel:+97180003111248"
                  style="direction:ltr; unicode-bidi: embed;">971-800-0311-1248</a> أو الرقم المجاني في المملكة العربية
                السعودية <a href="tel:+9668008501019" style="direction:ltr; unicode-bidi: embed;">966-8008-501-019</a> أو
                في قبرص على الرّقم <a href="tel:+35722090134"
                  style="direction:ltr; unicode-bidi: embed;">357-2209-0134</a>
              <p>حقوق النشر © 2021 جميع الحقوق محفوظة</p>
              </p>
            </div>
          </div>
        </div>
      </footer>


    </div>

</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "../../utils/utils";
import { NS_THIRD_PARTY, NS_COMMON } from "../../utils/store/namespace.names";
import {
  FLAGEDU_SIGNUP,
  EXNESS_SIGNUP,
  FETCH_CREATIVE_DETAILS,
  EVEST_SIGNUP2,
} from "../../utils/store/action.names";

@Component({
  name: "EvestAll",
  components: {},
  layout: "page-layout",
})
export default class EvestAll extends Vue {
  @Action(namespaced(NS_THIRD_PARTY, EVEST_SIGNUP2)) evestSignup2;
  @Action(namespaced(NS_THIRD_PARTY, FLAGEDU_SIGNUP)) flageduSignup;
  @Action(namespaced(NS_THIRD_PARTY, EXNESS_SIGNUP)) exnessSignup;

  @Action(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS)) fetchCreativeDetails;

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    usa_citizen: false,
    ci: "",
    uai: "",
    ani: "",
    password: "@Flagedu2023",
    coupon: "",
    interest: "Evest-Stocks",
    source:"Evest Stocks  ",
    coupon: "",
  };

  handleFormSubmit() {
    this.formData["user_ip"] = this.user_ip;
    this.exnessSignup(this.formData)
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
    var creative_name = "Evest-Pass";
    var ci = null;

    const getCreative = await store
      .dispatch(namespaced(NS_COMMON, FETCH_CREATIVE_DETAILS), {
        brand: brand,
        creative_name: creative_name,
      })
      .then((data) => {
        ci = data.id;
      })
      .catch((e) => { });

    return { ci, user_ip };
  }
  head() {
    return {
      title: "ايفست استثمر بالاسهم بدون عموله",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "إمتلك مستقبلك: استثمر بالأسهم بدون عمولة مع إيفست!افتح حساب الآن وادخل عالم الاستثمار المباشر. استمتع بتداول الأسهم العالمية بدون عمولة، منصة سهلة، أدوات تحليلية متقدمة، تعليم شامل، ودعم على مدار الساعة. ابدأ رحلتك اليوم!",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "إمتلك مستقبلك: استثمر بالأسهم بدون عمولة مع إيفست!افتح حساب الآن وادخل عالم الاستثمار المباشر. استمتع بتداول الأسهم العالمية بدون عمولة، منصة سهلة، أدوات تحليلية متقدمة، تعليم شامل، ودعم على مدار الساعة. ابدأ رحلتك اليوم!",
        },
      ],
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&display=swap');

body {
  background-color: #01e4b3;
}

*{

  font-family: 'Tajawal', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  font-family: 'Tajawal', sans-serif;

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      height: 40px;
      width: 280px;
      padding-right: 10px;
      text-align: end;
      border-radius: 5px;
      border-color: #99a09e;

    }

    input:hover {
      border-color: #2faf8b;

    }
  }
}


@media screen and (max-width: 480px) {
  form {
    .form-input input {
      height: 40px;
      width: 200px;
      padding-right: 10px;
    }
  }
}

@media screen and (max-width: 1159px) {
  form {
    .form-input input {
      height: 40px;
      width: 200px;
      padding-right: 10px;
    }
  }

}

@media screen and (max-width: 991px) {
  .img-coin {
    width: 83%;

  }

}

.img-e{
  width: 5%;}
  .text-e{
  font-size:20px;
} 
@media screen and (max-width: 977px) {
.img-e{
  width: 7%;
  .text-e{
  font-size:10px;
}
}}

@media screen and (max-width: 477px) {
.img-e{
  width: 16%;
  .text-e{
  font-size: 8px;
}
}
}
.btn-reg {
  width: 200px;
  color: rgb(255, 255, 255);
  font-weight: normal;
  text-align: center;
  border-radius: 20px;
  background: #49a7a7;
  font-size: 30px;
  padding: 7px 16px;
  font-style: normal;
  margin-bottom: 0px;
  margin-top: 15px;
  border-width: 0px;
  border-color: rgb(255, 255, 255);
}

.btn-reg:hover {
  width: 210px;
  color: #ffffff;
  background: #1b6161;
}

.color {
  color: #00837f;
}

.color2 {
  color: rgb(100, 250, 238);
}

.dark-evest {
  color: #022b3b;
}

body {
  min-width: 500px;
}

.btn-info{
  background-color: #025856;
  color: #ffffff;
  border-color: #ffffff;
}
.btn-info:hover{
  background-color: rgb(5, 145, 140);
}


</style>


