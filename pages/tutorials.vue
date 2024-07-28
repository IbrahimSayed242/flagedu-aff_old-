<template>
  <div>
    <div class="filters">
      <div class="date-chooser"><h3>Tutorials</h3></div>
      <div class="content" v-if="tutorials.length > 0">
        <div
          class="item"
          v-for="(item, idx) in tutorials"
          :key="'video_' + idx"
        >
          <div class="video-block">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="video">
              <lite-youtube :videoid="item.youtube_video_id"></lite-youtube>
            </div>
          </div>
        </div>
      </div>
      <div class="no-video" v-else><h4>Not any tutorials found!</h4></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { NS_COMMON } from "../utils/store/namespace.names";
import { FETCH_TUTORIALS } from "../utils/store/action.names";
import { namespaced, deepCopy } from "../utils/utils";

@Component({
  name: "Tutorials",
  components: {},
})
export default class Tutorials extends Vue {
  @Action(namespaced(NS_COMMON, FETCH_TUTORIALS)) fetchTutorials;

  tutorials = [];

  handleFetchTutorial() {
    this.fetchTutorials().then((d) => {
      this.tutorials = d;
    });
  }

  mounted() {
    this.handleFetchTutorial();
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.item {
  .video-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  .video {
    width: 100%;
    @media (max-width: 1250px) {
    }
    @media (max-width: 950px) {
      width: 80%;
    }
    @media (max-width: 700px) {
      height: auto;
    }
    @media (max-width: 500px) {
    }
    @media (max-width: 400px) {
    }
  }
}
.no-video {
  margin-top: 50px;
}
</style>
