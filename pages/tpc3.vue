<template>
  <div class="thank-you-wrapper vh-100 bg-x">
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-11 mar">
          <div class="bg-g text-center rounded shadow mb-5">
            <i class="bi bi-check2-circle text-light ee"></i>
            <img
              class="m-auto d-flex"
              src="https://s6.imgcdn.dev/99RQB.webp"
              width="150"
            />
            <div class="col-12 d-flex justify-content-end">
              <h2 class="m-5 text-light text-right">
                شكرا لك سيتم التواصل معك عبر البريد الالكتروني
              </h2>
            </div>

            <a href="#" class="btn btn-light arrow-icon m-4"> تصفح الكورس</a>
          </div>

          <div class="text-center m-2">
            <p>Flagedu &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";

@Component({
  name: "tpc",
  components: {},
  layout: "page-layout",
})
export default class tpc extends Vue {}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
* {
  font-family: "Tajawal", sans-serif;
}

.thank-you-page-content {
  vertical-align: middle;

  height: 100%;
}

.ee {
  font-size: 53px;
}

@media (max-width: 576px) {
  .tt {
    display: none;
  }
  .img-th {
    width: 50%;
    object-fit: contain;
    bottom: -15%;
  }
}

@media (min-width: 576px) {
  .tx {
    display: none;
  }
}

.bg-g {
  /* From https://css.glass */
  background: rgba(82, 163, 147, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(2.7px);
  border: 1px solid rgba(82, 163, 147, 0.92);
}

body {
  background-color: #26cbff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%232DFCFF' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2326CBFF' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2316c9f9' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300c7f3' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300c5ed' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c2e7' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300c0e0' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300bdda' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2300bbd4' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2300b9cd' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2300b6c7' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2300b3c0' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2300b1ba' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2300aeb3' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300abad' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2300a8a7' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230ea6a0' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2318a39a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%2320A094' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  /*
  background-color: #19898D;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%232bb7cc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%230b3f48' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2328b1c5' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%230a4754' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%2326acbe' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230a4f60' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2323a6b7' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%230d576d' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2321a1b1' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23145e7b' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%231e9baa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%231e6688' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;*/
}

.mar {
  margin-top: 20%;
}
</style>
