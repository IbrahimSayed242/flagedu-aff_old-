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
              <div class="formrow">
                <div class="mb-3">
                  <label>Select country</label>
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
                </div>
                <div class="mb-3 form-item extra-top-margin">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="formData.other_country"
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Other country
                    </label>
                  </div>
                </div>
              </div>

              <div class="formrow">
                <div class="mb-3 form-item">
                  <div class="form-input mb-1">
                    <label>Fixed comission</label>
                    <input
                      type="number"
                      name="Fixed comission"
                      :class="{
                        'form-control': true,
                      }"
                      class="form-control"
                      placeholder="Fixed comission"
                      v-model="formData.fixed_comission"
                    />
                  </div>
                </div>

                <div class="mb-3 form-item">
                  <div class="form-input mb-1">
                    <label>Percentage comission</label>
                    <input
                      type="number"
                      name="Percentage comission"
                      :class="{
                        'form-control': true,
                      }"
                      class="form-control"
                      placeholder="Percentage comission"
                      v-model="formData.percentage_comission"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3 form-item extra-top-margin">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="formData.has_range_comission"
                    id="flexCheckDefault1"
                  />
                  <label class="form-check-label" for="flexCheckDefault1">
                    Has Range Comission?
                  </label>
                </div>
              </div>

              <div
                class="mb3 form-extra"
                v-if="formData.has_range_comission && data"
              >
                <div
                  class="item"
                  v-for="(item, idx) in comissionValuesExtra"
                  :key="'ex1_comissions_' + idx"
                >
                  <input
                    type="number"
                    v-model="item.start"
                    placeholder="Start"
                  />
                  <div class="label">To</div>
                  <input type="number" v-model="item.end" placeholder="End" />
                  <div class="label">=</div>
                  <input
                    type="number"
                    v-model="item.comission"
                    placeholder="Comission"
                  />
                  <div class="actions">
                    <i
                      @click.prevent="handleUpdateComissionExtra(item)"
                      style="margin-left: 10px"
                      class="bi bi-check-circle icon"
                    ></i>
                    <i
                      @click.prevent="handleDeleteComissionExtra(item)"
                      class="bi bi-x-circle icon red"
                    ></i>
                  </div>
                </div>

                <div class="item">
                  <input
                    type="number"
                    v-model="extraComissions.start"
                    placeholder="Start"
                  />
                  <div class="label">To</div>
                  <input
                    type="number"
                    v-model="extraComissions.end"
                    placeholder="End"
                  />
                  <div class="label">=</div>
                  <input
                    type="number"
                    v-model="extraComissions.comission"
                    placeholder="Comission"
                  />
                  <div class="actions">
                    <i
                      @click.prevent="handleAddNewComission"
                      style="margin-left: 10px"
                      class="bi bi-check-circle icon"
                    ></i>
                  </div>
                </div>
              </div>

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
import { NS_USER } from "@/utils/store/namespace.names";
import { namespaced } from "@/utils/utils";
import {} from "@/utils/store/getter.names";
import {
  ADD_COMISSION_VALUE,
  UPDATE_COMISSION_VALUE,
  ADD_COMISSION_VALUE_EXTRA,
  FETCH_COMISSION_VALUE_EXTRA,
  DELETE_COMISSION_VALUE_EXTRA,
  UPDATE_COMISSION_VALUE_EXTRA,
} from "@/utils/store/action.names";

@Component({
  name: "ComissionRuleValueModal",
  components: {},
})
export default class ComissionRuleValueModal extends Vue {
  @Prop() modalOpen;
  @Prop() data;
  @Prop() countries;

  @Action(namespaced(NS_USER, ADD_COMISSION_VALUE)) addComissionValue;
  @Action(namespaced(NS_USER, UPDATE_COMISSION_VALUE)) updateComissionValue;
  @Action(namespaced(NS_USER, ADD_COMISSION_VALUE_EXTRA))
  addComissionValueExtra;
  @Action(namespaced(NS_USER, FETCH_COMISSION_VALUE_EXTRA))
  fetchComissionValueExtra;
  @Action(namespaced(NS_USER, DELETE_COMISSION_VALUE_EXTRA))
  deleteComissionValueExtra;
  @Action(namespaced(NS_USER, UPDATE_COMISSION_VALUE_EXTRA))
  updateComissionValueExtra;

  formData = {
    country: "",
    other_country: false,
    fixed_comission: 0,
    percentage_comission: 0,
    has_range_comission: false,
  };
  extraComissions = {
    start: "",
    end: "",
    comission: "",
  };
  comissionValuesExtra = [];
  error_msg = [];
  loading = false;

  handleUpdateComissionExtra(item) {
    this.updateComissionValueExtra({
      data: item,
      detail_id: item.id,
      params: { id: this.data.id },
    })
      .then((d) => {
        this.$toast.success("Successfully Updated!");
        this.handleFetchComissionValueExtra();
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
          }
          this.error_msg = err_msg;
        } else {
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  handleAddNewComission() {
    this.extraComissions["comission_value"] = this.data.id;
    this.addComissionValueExtra(this.extraComissions)
      .then((d) => {
        this.extraComissions = {
          start: "",
          end: "",
          comission: "",
        };
        this.$toast.success("Successfully Added!");
        this.handleFetchComissionValueExtra();
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
          }
          this.error_msg = err_msg;
        } else {
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  handleDeleteComissionExtra(item) {
    this.deleteComissionValueExtra({
      params: {
        id: this.data.id,
      },
      id: item.id,
    }).then((d) => {
      this.$toast.success("Successfully Deleted!");
      this.handleFetchComissionValueExtra();
    });
  }

  handleFetchComissionValueExtra() {
    this.fetchComissionValueExtra({ id: this.data.id }).then((d) => {
      this.comissionValuesExtra = d.results;
    });
  }

  @Watch("data", { deep: true, immediate: true })
  handleDataChange(val, oldVal) {
    if (val) {
      this.handleFetchComissionValueExtra();
      this.formData.country = val.country;
      this.formData.other_country = val.other_country;
      this.formData.fixed_comission = val.fixed_comission;
      this.formData.percentage_comission = val.percentage_comission;
      this.formData.has_range_comission = val.has_range_comission;
    }
  }

  get HOST() {
    return this.$config.HOST;
  }

  handleAddComissionRule() {
    this.loading = true;

    this.formData["rule"] = this.$route.params.comissionId;

    if (this.data) {
      this.updateComissionValue({ id: this.data.id, data: this.formData })
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
      this.addComissionValue(this.formData)
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
  width: 600px;

  @media (max-width: 400px) {
    width: 96%;
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
    width: 100%;

    form {
      width: 100%;
      .formrow {
        display: flex;
        gap: 20px;
        .form-item {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .extra-top-margin {
          margin-top: 29px;
        }
      }

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
      .form-extra {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        .item {
          display: flex;
          gap: 5px;
          input {
            width: 100px;
            height: 30px;
            padding-left: 10px;
            border: 1px solid white;
            border-radius: 10px;
            background-color: transparent;
            color: white;
          }
          .label {
            color: white;
          }
          .actions {
            display: flex;
            gap: 10px;
            .icon {
              font-size: 23px;
              color: white;
              cursor: pointer;
            }
            .red {
              color: red;
            }
          }
        }
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
