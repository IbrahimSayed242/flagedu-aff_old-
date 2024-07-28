<template>
  <img :src="mediaItem" />
</template>

<script>
export default {
  props: {
    mediaItem: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
