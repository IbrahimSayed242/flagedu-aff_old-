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
            <ValidationObserver tag="form">
              <button
                @click.prevent="close(true)"
                type="button"
                class="btn btn-primary form-button"
              >
                Yes
              </button>
              <button
                @click.prevent="close(false)"
                type="button"
                class="btn btn-primary form-button"
              >
                No
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

@Component({
  name: "YesNoModal",
  components: {},
})
export default class YesNoModal extends Vue {
  @Prop() modalOpen;

  close(status = false) {
    this.$emit("hideModal", status);
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
        margin-top: 20px;
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
