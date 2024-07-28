<template>
  <div>
    <div class="filters">Personal Information</div>
    <div class="main-content">
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="handleUpdateProfile"
      >
        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
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

        <div class="mb-3 form-item">
          <div class="form-input mb-1">
            <input
              type="email"
              name="Email"
              :class="{
                'form-control': true,
              }"
              class="form-control"
              placeholder="Email"
              v-model="formData.email"
              disabled
            />
          </div>
        </div>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <select
            v-model="formData.country"
            class="form-select country-select"
            name="Country"
          >
            <option value="">Select Country</option>
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
          class="mb-3 form-item"
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

        <div tag="div" class="mb-3 form-item">
          <div class="form-input mb-1">
            Referral Link:
            <a
              :href="
                'https://affiliate.flagedu.com/signup?referrer=' +
                getProfile.affiliate_id
              "
              target="_blank"
              >https://affiliate.flagedu.com/signup?referrer={{
                getProfile.affiliate_id
              }}</a
            >
          </div>
        </div>

        <div class="d-grid">
          <button
            type="submit"
            :disabled="invalid"
            class="btn btn-primary btn-block py-2 fw-semibold"
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
import { FETCH_COUNTRY, CHANGE_PROFILE } from "../../utils/store/action.names";
import { NS_USER, NS_COMMON } from "../../utils/store/namespace.names";
import { namespaced } from "../../utils/utils";

@Component({
  name: "PersonalInfo",
  components: {},
})
export default class PersonalInfo extends Vue {
  @Action(namespaced(NS_USER, CHANGE_PROFILE)) changeProfile;

  error_msg = [];
  loading = false;

  handleUpdateProfile() {
    this.loading = true;
    this.changeProfile(this.formData)
      .then((data) => {
        this.loading = false;
        this.error_msg = [];
        this.$toast.success("Profile Updated!");
      })
      .catch((e) => {
        this.loading = false;
        this.error_msg = [];
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            this.error_msg.push(value);
          }
        } else {
          this.$toast.error("Something went wrong!");
          this.close();
        }
      });
  }

  async asyncData({ route, $axios, store, error }) {
    var getProfile = store.state.user.user.profile;

    var formData = {
      full_name: getProfile.full_name ? getProfile.full_name : "",
      email: getProfile.email ? getProfile.email : "",
      country: getProfile.country ? getProfile.country : "",
      phone: getProfile.phone ? getProfile.phone : "",
    };

    var countries = [];
    const countryData = await store
      .dispatch(namespaced(NS_COMMON, FETCH_COUNTRY))
      .then((data) => {
        countries = data;
      })
      .catch((e) => {
        console.log(e);
      });

    return { countries, formData, getProfile };
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
