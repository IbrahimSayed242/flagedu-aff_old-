<template>
  <div class="modal-backdrop">
    <div
      class="modal-container"
      :class="{ 'open-modal': modalOpen }"
      role="dialog"
      v-on-clickaway="close"
    >
      <div class="modal-body">
        <div class="udpate-wrapper">
          <button class="close-btn" @click="close">
            <img
              src="/images/close.png"
              alt="close icon"
              class="img-fuild"
              width="18"
              height="18"
            />
          </button>

          <div class="profile-card">
            <ValidationObserver
              v-slot="{ invalid }"
              tag="form"
              @submit.prevent="handleAddComissionRule"
            >
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <label>Select Brand</label>
                <select
                  v-model="formData.brand"
                  class="form-select country-select"
                  name="Brand"
                >
                  <option value="">Select brand</option>
                  <option
                    v-for="(item, idx) in getBrands"
                    :key="'brand_' + idx"
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
                  <label>Min FTD Amount</label>
                  <input
                    type="number"
                    name="Min FTD Amount"
                    :class="{
                      'form-control': true,
                      redborder: errors[0],
                    }"
                    class="form-control"
                    placeholder="Min FTD Amount"
                    v-model="formData.ftd_amount"
                  />
                </div>
                <small v-if="errors.length" class="error">
                  {{ errors[0] }}
                </small>
              </ValidationProvider>

              <div class="error mb-3" v-if="error_msg.length > 0">
                <small v-html="error_msg"></small>
              </div>

              <button
                type="submit"
                class="btn btn-primary form-button"
                :disabled="invalid"
              >
                {{ loading ? "Please wait..." : "Submit" }}
              </button>
            </ValidationObserver>
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
  Prop,
  Getter,
  Action,
  Mutation,
  Watch,
} from "nuxt-property-decorator";
import { NS_USER, NS_COMMON } from "@/utils/store/namespace.names";
import { namespaced } from "@/utils/utils";
import { GET_BRANDS } from "@/utils/store/getter.names";
import {
  ADD_COMISSION_RULE,
  UPDATE_COMISSION_RULE,
} from "@/utils/store/action.names";

@Component({
  name: "ComissionRuleAddModal",
  components: {},
})
export default class ComissionRuleAddModal extends Vue {
  @Prop() modalOpen;
  @Prop() user;
  @Prop() data;

  @Getter(namespaced(NS_COMMON, GET_BRANDS)) getBrands;
  @Action(namespaced(NS_USER, ADD_COMISSION_RULE)) addComissionRule;
  @Action(namespaced(NS_USER, UPDATE_COMISSION_RULE)) updateComissionRule;

  formData = {
    brand: "",
    ftd_amount: 0,
  };
  error_msg = [];
  loading = false;

  @Watch("data", { deep: true, immediate: true })
  handleDataChange(val, oldVal) {
    if (val) {
      this.formData.brand = val.brand;
      this.formData.ftd_amount = val.ftd_amount;
    }
  }

  get HOST() {
    return this.$config.HOST;
  }

  handleAddComissionRule() {
    this.loading = true;

    this.formData["user"] = this.user;

    if (this.data) {
      this.updateComissionRule({ id: this.data.id, data: this.formData })
        .then((d) => {
          this.$toast.success("Update successfully!");
          this.loading = false;
          this.close(true);
        })
        .catch((e) => {
          this.loading = false;
          this.error_msg = "";
          var err_msg = "";
          if (e.response.status === 400) {
            for (const [key, value] of Object.entries(e.response.data)) {
              console.log(key, value[0]);
              const err = `<p>${value[0]}</p>`;
              err_msg = err_msg + err;
              console.log("ppp", err_msg);
            }
            this.error_msg = err_msg;
          } else {
            var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
            this.$toast.error(msg);
          }
        });
    } else {
      this.addComissionRule(this.formData)
        .then((d) => {
          this.$toast.success("Added successfully!");
          this.loading = false;
          this.close(true);
        })
        .catch((e) => {
          this.loading = false;
          this.error_msg = "";
          var err_msg = "";
          if (e.response.status === 400) {
            for (const [key, value] of Object.entries(e.response.data)) {
              console.log(key, value[0]);
              const err = `<p>${value[0]}</p>`;
              err_msg = err_msg + err;
              console.log("ppp", err_msg);
            }
            this.error_msg = err_msg;
          } else {
            var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
            this.$toast.error(msg);
          }
        });
    }
  }

  mounted() {}

  close(refresh = false) {
    this.$emit("hideModal", refresh);
  }
}
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.modal-container {
  position: relative;
  min-height: 168px;
  background-color: #1f3241;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  // transform: scale(0);
  opacity: 0;

  @media (max-width: 400px) {
    width: 90%;
  }
}

.close {
  animation: close 0.8s forwards;
}

.udpate-wrapper {
  padding: 50px;
  position: relative;

  .close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    border: none;
    display: none;

    @media (max-width: 430px) {
      display: block;
    }
  }

  .profile-card {
    border: 1px solid white;
    border-radius: 20px;
    padding: 25px 44px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;

    .image-wrapper {
      position: relative;

      .profile-pic {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin-bottom: 30px;
        object-fit: cover;
      }

      .camera-btn {
        position: absolute;
        bottom: 30px;
        right: 0;
        background: linear-gradient(180deg, #dc5ced 0%, #25e1fb 100%);
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 15px;
          height: 15px;
        }
      }
    }

    form {
      width: 100%;

      label {
        font-family: $poppins-font, sans-serif;
        font-weight: 400;
        font-size: 13px;
        margin-bottom: 5px;
        padding-left: 15px;
        color: $primary-color;
      }

      .form-control {
        font-family: $poppins-font, sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: $placeholder-color;
        border: 1px solid rgba(255, 255, 255, 0.6);
      }

      .form-button {
        font-size: 14px;
        padding: 10px 0;
      }
    }

    @media (max-width: 767px) {
      padding: 25px 30px 35px;
      width: 350px;
    }

    @media (max-width: 575px) {
      padding: 80px 25px 100px;
      border: none;
      width: 360px;
    }

    @media (max-width: 400px) {
      width: unset;
    }
  }

  @media (max-width: 767px) {
    padding: 35px;
  }

  @media (max-width: 575px) {
    padding: 0px;
  }
}

// modal overlay show animation
@keyframes bounceUp {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(0.95);
  }
  95% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes close {
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  0% {
    transform: scale(1);
  }
}
// modal overlay show animation
</style>
