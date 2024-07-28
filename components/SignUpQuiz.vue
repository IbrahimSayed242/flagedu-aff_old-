<template>
  <div>
    <h6>Please answer the following questions</h6>
    <form class="items" @submit.prevent="handleSubmit">
      <div class="item">
        <div class="title">1. Where are you located (residence)?</div>
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          v-model="formData.quiz1"
        />
      </div>
      <div class="item">
        <div class="title">2. Which GEOs and languages do you cover?</div>
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          v-model="formData.quiz2"
        />
      </div>
      <div class="item">
        <div class="title">
          3. Which marketing methods do you use? Or how do you generate traffic
          to your website?
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Google/FB/IG.. etc & Organic (SEO), PPC, SEM, Others (Please explain)"
          v-model="formData.quiz3"
        />
      </div>
      <div class="item">
        <div class="title">
          4. What do you offer? Sign-ins/education/ranking/social media,
          signals. If you have a website?
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          v-model="formData.quiz4"
        />
      </div>
      <div class="item">
        <div class="title">
          5. Do you have any experience in affiliate programs before, please
          specify if any. Or if you work with any brokers before?
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          v-model="formData.quiz5"
        />
      </div>
      <div class="item">
        <div class="title">
          6. Do you provide any services related to Forex?
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Answer"
          v-model="formData.quiz6"
        />
      </div>
      <div class="item">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Component, Vue, Action, Getter } from "nuxt-property-decorator";
import { NS_USER } from "../utils/store/namespace.names";
import { SUBMIT_QUIZ, FETCH_QUIZ } from "../utils/store/action.names";
import { namespaced, deepCopy } from "../utils/utils";

@Component({
  name: "SignUpQuiz",
  components: {},
})
export default class SignUpQuiz extends Vue {
  @Action(namespaced(NS_USER, SUBMIT_QUIZ)) submitQuiz;
  @Action(namespaced(NS_USER, FETCH_QUIZ)) fetchQuiz;

  formData = {
    quiz1: "",
    quiz2: "",
    quiz3: "",
    quiz4: "",
    quiz5: "",
    quiz6: "",
  };

  handleSubmit() {
    this.formData["email"] = this.$route.query.email;
    this.submitQuiz(this.formData)
      .then((d) => {
        console.log(d);
        this.$toast.success("Your account will be active after review!");
        this.$router.push("/signin");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleFetchQuiz() {
    this.fetchQuiz({ email: this.$route.query.email })
      .then((d) => {
        if (d.quiz1) {
          this.formData.quiz1 = d.quiz1;
        }
        if (d.quiz2) {
          this.formData.quiz2 = d.quiz2;
        }
        if (d.quiz3) {
          this.formData.quiz3 = d.quiz3;
        }
      })
      .catch((e) => {
        this.$router.push("/signin");
      });
  }

  mounted() {
    this.handleFetchQuiz();
  }
}
</script>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  .item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .title {
      font-weight: 700;
    }
    .ans-box {
      margin-left: 20px;
      color: gray;
    }
    button {
      background-color: grey;
      border: none;
      padding: 10px;
      color: white;
    }
  }
}
</style>
