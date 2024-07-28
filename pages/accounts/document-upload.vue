<template>
  <div>
    <div class="filters">Document Upload</div>
    <div class="main-content">
      <form
        @submit.prevent="handleSubmit"
        v-if="!myDocument || !myDocument.gov_id || !myDocument.contract"
      >
        <div class="mb-3 form-item">
          <div class="mb-3">
            <label for="govID" class="form-label"
              >Select your government ID (PDF only):</label
            >
            <input
              ref="govIDRef"
              class="form-control"
              @change="handleGovIdChange"
              type="file"
              id="govID"
              accept="application/pdf"
            />
          </div>
          <div class="mb-3">
            <label for="contract" class="form-label"
              >Select Contract (PDF only):</label
            >
            <input
              ref="contractRef"
              class="form-control"
              type="file"
              id="contract"
              accept="application/pdf"
              @change="handleContractChange"
            />
          </div>
        </div>

        <div class="error mb-3" v-if="error_msg.length > 0">
          <small v-for="(msg, index) in error_msg" :key="index">
            {{ msg[0] }}
          </small>
        </div>

        <div class="d-grid">
          <button
            type="submit"
            class="btn btn-primary btn-block py-2 fw-semibold"
          >
            {{ loading ? "Please wait..." : "Upload" }}
          </button>
        </div>
      </form>
      <div v-if="myDocument">
        <p v-if="myDocument.status == 0">Status: Pending</p>
        <p v-if="myDocument.status == 1">Status: Accepted</p>
        <p v-if="myDocument.status == 2">Status: Rejected</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import {
  UPLOAD_DOCUMENT,
  UPDATE_DOCUMENT,
  FETCH_DOCUMENT,
} from "../../utils/store/action.names";
import { NS_USER } from "../../utils/store/namespace.names";
import { namespaced } from "../../utils/utils";

@Component({
  name: "DocumentUpload",
  components: {},
})
export default class DocumentUpload extends Vue {
  @Action(namespaced(NS_USER, UPLOAD_DOCUMENT)) uploadDocument;
  @Action(namespaced(NS_USER, UPDATE_DOCUMENT)) updateDocument;
  @Action(namespaced(NS_USER, FETCH_DOCUMENT)) fetchDocument;

  error_msg = [];
  loading = false;
  govId = null;
  contract = null;
  myDocument = null;

  handleGovIdChange() {
    this.govId = this.$refs.govIDRef.files[0];
  }

  handleContractChange() {
    this.contract = this.$refs.contractRef.files[0];
  }

  handleSubmit() {
    if (!this.govId) {
      this.$toast.error("Please select government ID!");
      return;
    }

    if (!this.contract) {
      this.$toast.error("Please select contract pdf!");
      return;
    }

    this.loading = true;

    var formData = new FormData();
    formData.append("gov_id", this.govId);
    formData.append("contract", this.contract);

    this.uploadDocument(formData)
      .then((data) => {
        this.loading = false;
        this.myDocument = data;
        var msg = `Successfully submitted the documents!`;
        this.$toast.success(msg);
        this.govId = null;
        this.contract = null;
      })
      .catch((e) => {
        this.loading = false;
        this.error_msg = [];
        if (e.response.status === 400) {
          for (const [key, value] of Object.entries(e.response.data)) {
            this.error_msg.push(value);
          }
        } else {
          var msg = `Something went wrong!`;
          this.$toast.error(msg);
        }
      });
  }

  handleFetchDocument() {
    this.loading = true;
    this.fetchDocument()
      .then((d) => {
        this.loading = false;
        this.myDocument = d;
      })
      .catch((e) => {
        this.loading = false;
        console.log(e);
      });
  }

  mounted() {
    this.handleFetchDocument();
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
input {
  border: 1px solid #f1f1f1 !important;
  color: black !important;
  &:focus {
    border: 1px solid #f1f1f1 !important;
    color: black !important;
  }
}
</style>
