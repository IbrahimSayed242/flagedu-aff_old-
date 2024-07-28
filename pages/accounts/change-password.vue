<template>
  <div>
    <div class="filters">Change Password</div>
    <div class="main-content">
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="handleChangePassword"
      >
        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="password"
              name="Current Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Current Password"
              v-model="formData.old_password"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          vid="password"
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="password"
              name="New Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="New Password"
              v-model="formData.new_password"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:password"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="password"
              name="Retype Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Retype Password"
              v-model="formData.new_password2"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <div class="error mb-3" v-if="error_msg.length > 0">
          <small v-for="(msg, index) in error_msg" :key="index">
            {{ msg[0] }}
          </small>
        </div>

        <div class="d-grid">
          <button
            type="submit"
            :disabled="invalid"
            class="btn btn-primary btn-block py-2 fw-semibold"
          >
            {{ loading ? "Please wait..." : "Update" }}
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { CHANGE_PASSWORD } from "../../utils/store/action.names";
import { NS_USER } from "../../utils/store/namespace.names";
import { namespaced } from "../../utils/utils";

@Component({
  name: "ChangePassword",
  components: {},
})
export default class ChangePassword extends Vue {
  @Action(namespaced(NS_USER, CHANGE_PASSWORD)) changePassword;

  error_msg = [];
  loading = false;

  formData = {
    old_password: "",
    new_password: "",
    new_password2: "",
  };

  handleChangePassword() {
    this.loading = true;
    this.changePassword(this.formData)
      .then((data) => {
        this.loading = false;
        var msg = `<div class='t-custom-class'><div>Password changed successfully!</div></div>`;
        this.$toast.success(msg);
        this.formData = {
          old_passwor: "",
          new_password: "",
          new_password2: "",
        };
      })
      .catch((e) => {
        this.loading = false;
        this.error_msg = [];
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            this.error_msg.push(value);
          }
        } else {
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
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
