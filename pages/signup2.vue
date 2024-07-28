<template>
  <div class="" dir="rtl">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
    />
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: #2b4350"
    >
      <div class="container-fluid">
        <a class="navbar-brand abs" href="#"
          ><img
            src="https://s6.imgcdn.dev/V2vH2.png"
            alt=""
            srcset=""
            width="100"
            height="100"
            class="mr-3"
          />
        </a>

        <button
          class="navbar-toggler float-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse justify-content-end"
          id="collapseNavbar"
        >
          <ul class="navbar-nav mx-5">
            <li class="nav-item active">
              <a class="nav-link btn" role="button" href="#about-falgedu"
                >من نحن
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn"
                role="button"
                href="https://flagedu.com/common/contact-us"
                data-bs-toggle="collapse"
                >تواصل معنا
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-primary text-light"
                role="button"
                href="#sin-in"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >سجل الآن</a
              >
            </li>
          </ul>

          <ul class="navbar-nav"></ul>
        </div>
      </div>
    </nav>

    <!-- .hero start -->

    <section class="py-5 lg-my-5">
      <div class="container lg-my-5 py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 my-2">
            <div class="hero-content text-sm-center">
              <h1 class="mb-3 fw-bolder display-4 text-right text-sm-center">
                كن شريكاً <span class="text-flagedu"> لفلاجيدو </span> وحقق
                أهدافك
              </h1>

              <p
                class="text-secondary mb-4 fs-6 pe-md-5 me-md-5 text-sm-center"
              >
                احصل على نتائج تسويقية أفضل مع جمهورك المناسب
              </p>

              <p class="fs-4">
                اكتشف كيف يمكن لشراكتك معنا أن تفتح أفقًا جديدًا من الفرص
                المالية، وذلك من خلال تعريف العملاء بمزايا وخدماتنا الفريدة،
                التي تجعلنا خيارًا لا غنى عنه في عالم الأعمال العالمي.
              </p>

              <a
                href="#sin-in"
                class="btn btn-md px-5 py-3 btn-primary rounded-pill shadow-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >ابدأ الان</a
              >
              <a
                href="#"
                class="l-more ms-3 text-decoration-none fw-semibold mx-3 d-inline-block scale"
              >
                <span class="text-flagedu icon"> تعرف علي المزيد</span>
                <i class="text-flagedu bi bi-arrow-left mx-1"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 my-2">
            <figure class="hero-img-wrap my-2">
              <img
                src="https://s6.imgcdn.dev/V2rx8.webp"
                class="img-fluid"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- hero end  -->
    <div class="bg-f pt-5 border-y">
      <div class="container" id="about-falgedu">
        <div class="row align-items-center flex-wrap-reverse mx-3">
          <div class="col-lg-6 d-flex justify-content-center">
            <img class="" />
            <img
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703670887/copy/1_gfjzdk.png"
              class="img-fluid m-auto"
              alt=""
            />
          </div>

          <div class="col-lg-6 my-5 bg-g border-x">
            <div class="hero-content my-3 text-center">
              <h1 class="mb-3 fw-bolder display-4">
                <span class="text-light"> من نحن </span>
              </h1>
              <p class="mb-4 fs-6 pe-md-5 me-md-5"></p>
              <h5 class="text-light">
                <span class="text-light"> فلاجيدو </span> هي منصة عربية مليئة
                بمجموعة من الخبراء في قطاع التداول والاستثمار.
              </h5>
            </div>
            <ul
              class="m-2 list-group list-group-flush bg-transparent"
              dir="rtl"
            >
              <li class="text-light list-group-item bg-transparent scale fs-4">
                <i class="bi bi-check-circle-fill text-flag text-right m-1">
                </i>
                مرجعات وسطاء التداول
              </li>
              <li class="text-light list-group-item bg-transparent scale fs-4">
                <i class="bi bi-check-circle-fill text-flag text-right m-1">
                </i>
                افضل الاسهم للإستثمار
              </li>

              <li class="text-light list-group-item bg-transparent scale fs-4">
                <i class="bi bi-check-circle-fill text-flag text-right m-1">
                </i>
                أخر اخبار الاسواق المالية
              </li>

              <li class="text-light list-group-item bg-transparent scale fs-4">
                <i class="bi bi-check-circle-fill text-flag text-right m-1">
                </i>
                اكاديمية فلاجيدو التعليمية
              </li>

              <li class="text-light list-group-item bg-transparent scale fs-4">
                <i class="bi bi-check-circle-fill text-flag text-right m-1">
                </i>
                دعم خبراء فلاجيدو للمتدولين
              </li>
            </ul>
            <div class="text-center m-2">
              <a
                href="#"
                class="l-more ms-3 text-decoration-none fw-semibold mx-3 d-inline-block scale"
              >
                <span class="text-light fw-bolder icon my-4 py-4">
                  تعرف علي المزيد</span
                >
                <i class="text-flagedu bi bi-arrow-left mx-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center m-4">
      <h2 class="text-center text-flagedu display-4 m-3 fw-bolder">
        اعلن بخطوات بسيطة
      </h2>

      <div
        class="col-lg-3 rounded-3 shadow text-center p-5 m-2 text-flagedu border-x fw-bolder scale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
        <p>سجل معنا</p>
      </div>

      <div
        class="col-lg-3 rounded-3 shadow text-center p-5 m-2 text-flagedu border-x fw-bolder scale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          />
        </svg>
        <p>الاعلان يصل للجمهور المستهدف</p>
      </div>
      <div
        class="col-lg-3 rounded-3 shadow text-center p-5 m-2 text-flagedu border-x fw-bolder scale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-cash-coin"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
          />
          <path
            d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
          />
          <path
            d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"
          />
          <path
            d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
          />
        </svg>

        <p>اربح المال</p>
      </div>
    </div>

    <div class="container" id="sin-in">
      <div class="row mt-5 justify-content-center">
        <div class="col-lg-6">
          <img src=" https://s6.imgcdn.dev/RWYau.webp" />
        </div>

        <div
          class="col-lg-5 m-2 bg-d rounded-3 shadow p-5 align-self-center"
          dir="ltr"
        >
          <p class="text-light text-center mb-4 fs-2">
            ابدأ الآن بتجربتك الاعلان معنا
          </p>
          <div class="row flex justify-content-center">
            <img
              class="col-lg-4 col-md-4 col-5 mb-3"
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703665444/copy/big_dark-01_cbvza1.png"
              alt="flagedu-logo"
              width="200"
              height="120"
            />
          </div>

          <ValidationObserver
            v-slot="{ invalid }"
            tag="form"
            @submit.prevent="handleSignup"
          >
            <ValidationProvider
              :rules="{ required: true }"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="text"
                  name="Full name"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Full name"
                  v-model="formData.full_name"
                />
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="email"
                  name="Email"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Email"
                  v-model="formData.email"
                />
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <select
                v-model="formData.country"
                class="form-select country-select"
                name="Country"
              >
                <option value="">Select country</option>
                <option
                  v-for="(item, idx) in countries"
                  :key="'country_' + idx"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="text"
                  name="Phone"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Phone number"
                  v-model="formData.phone"
                />
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              vid="password"
              ref="password"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="form-input mb-1">
                <input
                  type="password"
                  name="Password"
                  ref="passwordOneInput"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Password"
                  v-model="formData.password"
                />
                <span @click="toggleShowOne"> </span>
              </div>
              <small v-if="errors.length" class="error">
                {{ errors[0] }}
              </small>
            </ValidationProvider>

            <ValidationProvider
              vid="password2"
              rules="required|confirmed:password"
              v-slot="{ errors }"
              tag="div"
              class="mb-4"
            >
              <div class="form-input mb-1">
                <input
                  type="password"
                  name="Confirm Password"
                  ref="passwordTwoInput"
                  :class="{
                    'form-control': true,
                    redborder: errors[0],
                  }"
                  class="form-control"
                  placeholder="Retype password"
                  v-model="formData.password2"
                />
                <span @click="toggleShowTwo"> </span>
              </div>
              <small v-if="errors.length" class="error">
                {{
                  errors.length && formData.password !== formData.password2
                    ? "Password not matched"
                    : errors[0]
                }}
              </small>
            </ValidationProvider>

            <div class="form-check d-flex">
              <input
                type="checkbox"
                class="form-check-input me-2"
                v-model="formData.is_agreed"
              />
              <label class="form-check-label text-white">
                I agree to the
                <a
                  href="/common/terms-and-conditions"
                  target="_blank"
                  class="text-active"
                >
                  Terms of Service
                </a>
                and
                <a
                  href="/common/privacy-policy"
                  target="_blank"
                  class="text-active"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <div class="d-grid">
              <button
                type="submit"
                :disabled="invalid"
                class="btn btn-primary btn-block py-2 fw-semibold"
              >
                Create Account
              </button>
            </div>
          </ValidationObserver>

          <div class="mt-4 text-center">
            <p class="text-white">
              Already have an account?
              <router-link to="/signin" class="text-active fw-semibold">
                Sign In
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center text-flagedu m-5">
      <h2 class="fw-bold text-center m-3">لماذا تصبح شريكًا مع فلاجيدو؟</h2>
      <div class="flip-card col-lg-3 col-sm-6 m-2">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>دعم مخصص</h3>
            <img
              class="col-6"
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703676354/copy/flagedu_wblyin.svg"
              alt=""
            />
          </div>
          <div class="flip-card-back">
            <h3 class="m-3">الدعم المخصص</h3>
            <p class="m-3">
              فريقنا ملتزم بنجاحك احصل على الدعم والتوجيه المخصص في كل خطوة على
              الطريق.
            </p>
          </div>
        </div>
      </div>

      <div class="flip-card col-lg-3 col-sm-6 m-2">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>عمولات عالية</h3>
            <img
              class="col-6"
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703676354/copy/undraw_online_wishes_dlmr_cntpa5.svg"
              alt=""
            />
          </div>
          <div class="flip-card-back">
            <h3 class="m-3">العمولات العالية</h3>
            <p class="m-3">
              اربح ما يصل إلى100% من العمولات مع كل إحالة ناجحة.
            </p>
          </div>
        </div>
      </div>

      <div class="flip-card col-lg-3 col-sm-6 m-2">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>موارد حصرية</h3>
            <img
              class="col-6"
              src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703676354/copy/undraw_instant_support_re_s7un_npv1f2.svg"
              alt=""
            />
          </div>
          <div class="flip-card-back">
            <h3 class="m-3">موارد حصرية</h3>
            <p>تمتع بإمكانية الوصول إلى أحدث الأدوات والمواد التسويقية</p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="carouselExampleControls"
      class="carousel slide pb-5 mx-5 my-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner bg-d rounded-2">
        <div class="carousel-item active">
          <div class="d-flex flex-column" style="align-items: center">
            <p class="mt-5 fs-3 text-flagedu fw-bold">معلنين سابقين</p>

            <div class="text-center col-lg-6 col-md-7 col-sm-10">
              <p>
                مجموعة Exness سنة 2008 كشركة وساطة في الأسواق المالية لتقديم
                خدمة التداول في أدوات مالية<br />
                واسعة بما في ذلك أزواج العملات والمعادن والعملات المشفرة
                والطاقات والمؤشرات والأسهم. كم تقدم الشركة خدمة العملاء ب 15 لغة
                مختلفة.<br />
              </p>
            </div>
            <div class="container-xxl">
              <p style="word-break: keep-all; text-align: center"></p>
            </div>
            <div class="p-2 text-black">
              <div class="flex-shrink-1 bd-highlight rounded-circle">
                <img
                  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703669065/copy/exness_u14rg9.webp"
                  alt=""
                  width="200px"
                  height="250px"
                  class="rounded-3 m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="d-flex flex-column" style="align-items: center">
            <p class="mt-5 fs-3 text-flagedu font-weight-bold">معلنين سابقين</p>

            <div class="text-center col-lg-7 col-md-7 col-sm-10">
              <p>
                شركة إنجوت بروكرز Ingot Brokers هو عنوان الموقع الرسمي ومُسمّى
                العلامة التجارية التابعة للشركة الأم Ingot Global Ltd، التي
                تُعدّ إحدى الشركات المتخصصة في قطاع الخدمات المالية الإلكترونية
                والمزودة لخدمات التداول عبر الإنترنت
              </p>
            </div>
            <div class="container-xxl">
              <p style="word-break: keep-all; text-align: center"></p>
            </div>
            <div class="p-2 text-black">
              <div class="flex-shrink-1 bd-highlight rounded-circle">
                <img
                  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703669067/copy/ingot_y96utm.webp"
                  alt=""
                  width="200px"
                  height="250px"
                  class="rounded-3 m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="d-flex flex-column" style="align-items: center">
            <p class="mt-5 fs-3 text-flagedu font-weight-bold">معلنين سابقين</p>

            <div class="text-center col-lg-7 col-md-7 col-sm-10">
              <p>
                شركة evest هي وسيط تداول الأسهم بالإضافة إلى تداول الفوركس عبر
                الإنترنت، وتداول العقود مقابل الفروقات CFDs.
              </p>
            </div>
            <div class="container-xxl">
              <p style="word-break: keep-all; text-align: center"></p>
            </div>
            <div class="p-2 text-black">
              <div class="flex-shrink-1 bd-highlight rounded-circle">
                <img
                  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703669065/copy/evest_xjj0rq.jpg"
                  alt=""
                  width="200px"
                  height="250px"
                  class="rounded-3 m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="d-flex flex-column" style="align-items: center">
            <p class="mt-5 fs-3 text-flagedu fw-bold">معلنين سابقين</p>

            <div class="text-center col-lg-7 col-md-7 col-sm-10">
              <p>
                MultiBank خبرة طويلة في مجال تزويد خدمات التداول عبر الإنترنت
                تمتد إلى قرابة 20 عاماً؛ إذ تم تأسيس الشركة وإطلاق خدماتها في
                عام 2005، صُنفت كذلك كواحدة من أضخم شركات التداول والخدمات
                المالية.
              </p>
            </div>
            <div class="container-xxl">
              <p style="word-break: keep-all; text-align: center"></p>
            </div>
            <div class="p-2 text-black">
              <div class="flex-shrink-1 bd-highlight rounded-circle">
                <img
                  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703669065/copy/mutibank_aj5zwn.png"
                  alt=""
                  width="200px"
                  height="250px"
                  class="rounded-3 m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="py-5">
      <div class="container d-flex justify-content-center">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-12 text-center">
            <p class="fs-4 text-flagedu ls-md text-uppercase fw-semibold">
              ماذا تنتظر
            </p>

            <h2 class="display-3 mb-3 fw-bold">
              انضم الآن الينا وكن أحد شريكاً لفلاجيدو
            </h2>

            <a
              href="#sin-in"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >انضم الآن
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      dir="ltr"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-d">
          <div
            class="m-2 bg-d rounded-3 shadow p-5 align-self-center"
            dir="ltr"
          >
            <p class="text-light text-center mb-4 fs-2">
              ابدأ الآن بتجربتك الاعلان معنا
            </p>
            <div class="row flex justify-content-center">
              <img
                class="col-lg-4 col-md-4 col-5 mb-3"
                src="https://res.cloudinary.com/dt9k74vof/image/upload/v1703665444/copy/big_dark-01_cbvza1.png"
                alt="flagedu-logo"
                width="200"
                height="120"
              />
            </div>

            <ValidationObserver
              v-slot="{ invalid }"
              tag="form"
              @submit.prevent="handleSignup"
            >
              <ValidationProvider
                :rules="{ required: true }"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <div class="form-input mb-1">
                  <input
                    type="text"
                    name="Full name"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Full name"
                    v-model="formData.full_name"
                  />
                </div>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <div class="form-input mb-1">
                  <input
                    type="email"
                    name="Email"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Email"
                    v-model="formData.email"
                  />
                </div>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <select
                  v-model="formData.country"
                  class="form-select country-select"
                  name="Country"
                >
                  <option value="">Select country</option>
                  <option
                    v-for="(item, idx) in countries"
                    :key="'country_' + idx"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <div class="form-input mb-1">
                  <input
                    type="text"
                    name="Phone"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Phone number"
                    v-model="formData.phone"
                  />
                </div>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <ValidationProvider
                vid="password"
                ref="password"
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <div class="form-input mb-1">
                  <input
                    type="password"
                    name="Password"
                    ref="passwordOneInput"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Password"
                    v-model="formData.password"
                  />
                  <span @click="toggleShowOne"> </span>
                </div>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <ValidationProvider
                vid="password2"
                rules="required|confirmed:password"
                v-slot="{ errors }"
                tag="div"
                class="mb-4"
              >
                <div class="form-input mb-1">
                  <input
                    type="password"
                    name="Confirm Password"
                    ref="passwordTwoInput"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Retype password"
                    v-model="formData.password2"
                  />
                  <span @click="toggleShowTwo"> </span>
                </div>
                <small v-if="errors.length" class="error">
                  {{
                    errors.length && formData.password !== formData.password2
                      ? "Password not matched"
                      : errors[0]
                  }}
                </small>
              </ValidationProvider>

              <div class="form-check d-flex">
                <input
                  type="checkbox"
                  class="form-check-input me-2"
                  v-model="formData.is_agreed"
                />
                <label class="form-check-label text-white">
                  I agree to the
                  <a
                    href="/common/terms-and-conditions"
                    target="_blank"
                    class="text-active"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    href="/common/privacy-policy"
                    target="_blank"
                    class="text-active"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div class="d-grid">
                <button
                  type="submit"
                  :disabled="invalid"
                  class="btn btn-primary btn-block py-2 fw-semibold"
                >
                  Create Account
                </button>
              </div>
            </ValidationObserver>

            <div class="mt-4 text-center">
              <p class="text-white">
                Already have an account?
                <router-link to="/signin" class="text-active fw-semibold">
                  Sign In
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Component,
  Vue,
  Action,
  Getter,
  Mutation,
} from "nuxt-property-decorator";
import { namespaced } from "../utils/utils";
import { NS_USER, NS_COMMON } from "../utils/store/namespace.names";
import { SIGNUP, FETCH_COUNTRY } from "../utils/store/action.names";

@Component({
  name: "Signup",
  components: {},
  layout: "page-layout",
})
export default class Signup extends Vue {
  @Action(namespaced(NS_COMMON, FETCH_COUNTRY)) fetchCountry;
  @Action(namespaced(NS_USER, SIGNUP)) signup;

  formData = {
    full_name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    password2: "",
    is_agreed: "",
    is_affiliate: true,
  };
  error_msg = "";
  password_error = false;
  loading = false;

  showPasswordOne = false;
  showPasswordTwo = false;

  loginWithGoogle() {
    window.location = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?protocol=oauth2&response_type=code&access_type=offline&client_id=559204491251-9rdnbjf2n27ks6u5klvef778icg1j4rm.apps.googleusercontent.com&redirect_uri=https://flagedu.com/socialauth/google&scope=openid%20profile%20email%20email%20profile&code_challenge_method&prompt=select_account&service=lso&o2v=1&flowName=GeneralOAuthFlow`;
  }

  loginWithFacebook() {
    window.location = `https://www.facebook.com/v16.0/dialog/oauth?client_id=1419617315245410&redirect_uri=https://flagedu.com/socialauth/facebook`;
  }

  toggleShowOne() {
    this.showPasswordOne = !this.showPasswordOne;
    if (this.showPasswordOne == true) {
      this.$refs.passwordOneInput.type = "text";
    } else {
      this.$refs.passwordOneInput.type = "password";
    }
  }
  toggleShowTwo() {
    this.showPasswordTwo = !this.showPasswordTwo;
    if (this.showPasswordTwo == true) {
      this.$refs.passwordTwoInput.type = "text";
    } else {
      this.$refs.passwordTwoInput.type = "password";
    }
  }

  handleSignup() {
    this.loading = true;

    if (this.formData.is_agreed == false) {
      var msg = `<div class='t-custom-class'>You Have To Agree To Our Terms Of Service<div></div></div>`;
      this.$toast.error(msg);
      this.loading = false;
      return false;
    }
    const userData = { ...this.formData };
    delete userData["password2"];
    userData["user_ip"] = this.user_ip;
    this.signup(userData)
      .then((data) => {
        this.loading = false;

        this.$router.push({
          name: "validate-otp",
          query: {
            email: this.formData.email,
            mode: "verification",
          },
        });
      })
      .catch((e) => {
        this.loading = false;
        this.error_msg = "";
        var err_msg = "";
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            const err = `<p>${value}</p>`;
            err_msg = err_msg + err;
          }
          this.error_msg = err_msg;
        } else {
          var msg = `<div class='t-custom-class'><div>There was an error!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  async asyncData({ route, $axios, store, req }) {
    var user_ip = "104.28.198.135";
    if (process.server) {
      const headers = req && req.headers ? Object.assign({}, req.headers) : {};
      if (headers["x-forwarded-for"]) {
        user_ip = headers["x-forwarded-for"];
      }
    }

    var countries = [];
    const countryData = await store
      .dispatch(namespaced(NS_COMMON, FETCH_COUNTRY))
      .then((data) => {
        countries = data;
      })
      .catch((e) => {
        console.log(e);
      });

    return {
      user_ip,
      countries,
    };
  }

  mounted() {}

  head() {
    return {
      title: "Signup",
    };
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: #eb794f;
}
.help-text {
  color: #fff;
}
.form-check-input {
  margin-top: 0.26em;
}
.country-select {
  background-color: transparent !important;
  border-radius: 50px;
  color: grey;
}

.social-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .div-or {
    padding-top: 20px;
    color: white;
  }
  .social-icons {
    display: flex;
    gap: 20px;
    .google-icon {
      font-size: 30px;
      color: #4285f4;
      cursor: pointer;
    }
    .fb-icon {
      font-size: 30px;
      color: #3b5998;
      cursor: pointer;
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&display=swap");

* {
  font-family: "Tajawal", sans-serif;
}
img {
  object-fit: contain;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.bg-g {
  background: #2b43506c;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(9, 137, 137, 0.21);
}
.bg-dar {
  background-color: #2b4350a4;
  color: aliceblue;
}
.bg-d {
  background-color: rgba(28, 45, 54, 0.89);
  color: aliceblue;
}
.border-x {
  border-style: solid;
  border-color: #1c8b89;
  border-radius: 10px;
}

.bg-f {
  background-image: url("https://res.cloudinary.com/dt9k74vof/image/upload/v1703667657/copy/flaged_uvfx8l.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
.border-y {
  border-block-end: 1rem solid #1c8b8993;
  writing-mode: horizontal-tb;
}

.flip-card {
  background-color: transparent;
  width: 350px;
  height: 200px;
  border-radius: 15px;
  perspective: 1000px;
}
.scale:hover {
  transform: scale(1.1);
  transition: 0.5s;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 15px;
}
.flip-card-front {
  background-color: #057e7e;
  color: rgb(255, 255, 255);
}

.scale:hover {
  transform: scale(1.05);
  transition: 0.5s;
  cursor: pointer;
}
.text-flag {
  color: #1c8b89;
  &:hover {
    color: #02cfcf;
  }
}

.flip-card-back {
  background-color: #2b4350;
  color: white;
  transform: rotateY(180deg);
}
</style>
