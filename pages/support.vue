<template>
  <div>
    <div class="filters">
      <div class="date-chooser"><h3>Support</h3></div>
      <div class="content">
        <div class="socials">
          <div class="name">Our Socials:</div>
          <div class="platforms">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=201099101772"
              ><i class="bi bi-whatsapp"></i
            ></a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100091551166488&locale=ar_AR"
              ><i class="bi bi-facebook"></i
            ></a>
            <a target="_blank" href="https://t.me/+yHbjrB4-6g85NmU0"
              ><i class="bi bi-telegram"></i
            ></a>
            <a href="mailto:contact@flagedu.com"
              ><i class="bi bi-envelope"></i
            ></a>
          </div>
        </div>
        <div class="address">
          <div class="name">Address:</div>
          <div class="value">
            Level 1, Boulevard Central, Downtown Dubai, Souq Al Bahar C3, United
            Arab Emirates
          </div>
        </div>
        <div class="address">
          <div class="name">Phone number:</div>
          <div class="value">+201099101772</div>
        </div>
        <div class="address">
          <div class="name">Submit your queries:</div>
        </div>
        <div class="form">
          <form
            method="post"
            @submit.prevent="handleFormSubmit"
            v-if="step == 0"
          >
            <div class="item">
              <div class="title">* Full name</div>
              <input type="text" required v-model="formData.full_name" />
            </div>
            <div class="item">
              <div class="title">* Email</div>
              <input type="email" required v-model="formData.email" />
            </div>
            <div class="item">
              <div class="title">* Phone number</div>
              <input type="text" required v-model="formData.phone" />
            </div>
            <div class="item">
              <div class="title">* Message</div>
              <textarea required v-model="formData.message"></textarea>
            </div>
            <div class="item">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div class="submit-message" v-else>
            We received your message! We will reply ASAP.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action, Getter } from "nuxt-property-decorator";
import { NS_COMMON, NS_USER } from "../utils/store/namespace.names";
import { CONTACT_US } from "../utils/store/action.names";
import { GET_PROFILE } from "../utils/store/getter.names";
import { namespaced, deepCopy } from "../utils/utils";

@Component({
  name: "Support",
  components: {},
})
export default class Support extends Vue {
  @Action(namespaced(NS_COMMON, CONTACT_US)) contactUs;
  @Getter(namespaced(NS_USER, GET_PROFILE)) getProfile;

  formData = {
    full_name: "",
    email: "",
    phone: "",
    message: "",
    is_affiliate: true,
  };
  step = 0;
  error_msg = "";

  handleFormSubmit() {
    this.formData["affiliate_id"] = this.getProfile.affiliate_id;
    this.contactUs(this.formData)
      .then((d) => {
        this.step = 1;
      })
      .catch((e) => {
        this.error_msg = "";
        var err_msg = "";
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            const err = `<p>${value}</p>`;
            err_msg = err_msg + err;
          }
          this.error_msg = err_msg;
        } else {
          var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
          this.$toast.error(msg);
        }
      });
  }

  mounted() {
    if (this.getProfile.full_name) {
      this.formData.full_name = this.getProfile.full_name;
    }
    if (this.getProfile.email) {
      this.formData.email = this.getProfile.email;
    }
    if (this.getProfile.phone) {
      this.formData.phone = this.getProfile.phone;
    }
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  i {
    font-size: 20px;
  }
}

.date-chooser {
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.content {
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .socials {
    display: flex;
    gap: 20px;
    .name {
      font-size: 18px;
    }
    .platforms {
      display: flex;
      gap: 20px;
      a {
        color: black;
      }
    }
  }
  .address {
    font-size: 18px;
    display: flex;
    gap: 20px;
  }
}
.form {
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .item {
      .title {
        font-size: 14px;
        font-weight: 700;
      }
      input {
        height: 40px;
        border: 1px solid black;
        width: 300px;
        border-radius: 10px;
        padding-left: 10px;
      }
      textarea {
        height: 100px;
        border: 1px solid black;
        width: 300px;
        border-radius: 10px;
        padding-left: 10px;
        padding-top: 5px;
      }
      button {
        align-items: center;
        background-color: #01aeab;
        color: #fff;
        display: flex;
        font-size: 16px;
        font-weight: 700;
        gap: 10px;
        height: 30px;
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid grey;
        border-radius: 8px;
      }
    }
  }
}
.submit-message {
  font-size: 20px;
  color: red;
}
</style>
