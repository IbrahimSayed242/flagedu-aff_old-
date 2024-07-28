<template>
  <div>
    <div class="filters">Payment Details</div>
    <div class="main-content">
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="handleSignup"
      >
        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>VAT Identification No.</label>
            <input
              type="text"
              name="Vat ID"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="VAT Identification Number"
              v-model="formData.vat_id"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Account Beneficiary</label>
            <input
              type="text"
              name="Account Beneficiary"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Account Beneficiary"
              v-model="formData.account_beneficiary"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Account Number</label>
            <input
              type="text"
              name="Account Number"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Account Number"
              v-model="formData.account_number"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Bank Name</label>
            <input
              type="text"
              name="Bank Name"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Bank Name"
              v-model="formData.bank_name"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Bank Branch</label>
            <input
              type="text"
              name="Bank Branch"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Bank Branch"
              v-model="formData.bank_branch"
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
            v-model="formData.bank_country"
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
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Bank City</label>
            <input
              type="text"
              name="Bank City"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Bank City"
              v-model="formData.bank_city"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>Swift Code</label>
            <input
              type="text"
              name="Swift Code"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Swift Code"
              v-model="formData.swift_code"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <label>IBAN Number</label>
            <input
              type="text"
              name="IBAN Number"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="IBAN Number"
              v-model="formData.iban_number"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <div class="d-grid">
          <button
            type="submit"
            :disabled="invalid"
            class="btn btn-primary btn-block py-2 fw-semibold"
            @click.prevent="handleUpdatePayment"
          >
            Update
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import {
  FETCH_PAYMENT_DETAIL,
  FETCH_COUNTRY,
  UPDATE_PAYMENT_DETAIL,
  ADD_PAYMENT_DETAIL,
} from "../../utils/store/action.names";
import { NS_USER, NS_COMMON } from "../../utils/store/namespace.names";
import { namespaced } from "../../utils/utils";

@Component({
  name: "PaymentDetails",
  components: {},
})
export default class PaymentDetails extends Vue {
  @Action(namespaced(NS_USER, UPDATE_PAYMENT_DETAIL)) updatePaymentDetail;
  @Action(namespaced(NS_USER, ADD_PAYMENT_DETAIL)) addPaymentDetail;

  handleUpdatePayment() {
    if (this.paymentDetail) {
      var payload = {
        id: this.paymentDetail.id,
        formData: this.formData,
      };
      this.updatePaymentDetail(payload)
        .then((data) => {
          this.$toast.success("Updated successfully!");
          this.formData.vat_id = data.vat_id;
          this.formData.account_beneficiary = data.account_beneficiary;
          this.formData.account_number = data.account_number;
          this.formData.bank_name = data.bank_name;
          this.formData.bank_branch = data.bank_branch;
          this.formData.bank_country = data.bank_country;
          this.formData.bank_city = data.bank_city;
          this.formData.swift_code = data.swift_code;
          this.formData.iban_number = data.iban_number;
        })
        .catch((e) => {
          this.$toast.error("Unknown error occured!");
        });
    } else {
      this.addPaymentDetail(this.formData)
        .then((data) => {
          this.$toast.success("Updated successfully!");
          this.formData.vat_id = data.vat_id;
          this.formData.account_beneficiary = data.account_beneficiary;
          this.formData.account_number = data.account_number;
          this.formData.bank_name = data.bank_name;
          this.formData.bank_branch = data.bank_branch;
          this.formData.bank_country = data.bank_country;
          this.formData.bank_city = data.bank_city;
          this.formData.swift_code = data.swift_code;
          this.formData.iban_number = data.iban_number;
        })
        .catch((e) => {
          this.$toast.error("Unknown error occured!");
        });
    }
  }

  async asyncData({ route, $axios, store, error }) {
    var formData = {
      vat_id: "",
      account_beneficiary: "",
      account_number: "",
      bank_name: "",
      bank_branch: "",
      bank_country: "",
      bank_city: "",
      swift_code: "",
      iban_number: "",
    };
    var paymentDetail = null;

    const getPaymentDetail = await store
      .dispatch(namespaced(NS_USER, FETCH_PAYMENT_DETAIL))
      .then((data) => {
        paymentDetail = data;
      })
      .catch((e) => {
        paymentDetail = null;
      });

    if (paymentDetail) {
      formData.vat_id = paymentDetail.vat_id;
      formData.account_beneficiary = paymentDetail.account_beneficiary;
      formData.account_number = paymentDetail.account_number;
      formData.bank_name = paymentDetail.bank_name;
      formData.bank_branch = paymentDetail.bank_branch;
      formData.bank_country = paymentDetail.bank_country;
      formData.bank_city = paymentDetail.bank_city;
      formData.swift_code = paymentDetail.swift_code;
      formData.iban_number = paymentDetail.iban_number;
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

    return { paymentDetail, countries, formData };
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
}
.main-content {
  height: 100vh;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
form {
  width: 30%;
  .form-item {
    display: flex;
    gap: 10px;
    flex-direction: column;
    .form-input {
      input {
        border: 1px solid gray;
        background: white;
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
