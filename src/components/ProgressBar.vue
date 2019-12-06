<template>
  <div class="progressContainer">
    <div class="progressItem" :style="{width:barwidth+'%'}"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  props: ["total", "rest", "barwidth"]
};
</script>

<style scoped>
.progressContainer {
  position: relative;
  height: 10px;
  width: 80%;
  background-color: #aaa;
  border-radius: 5px;
  right: -50px;
}
.progressItem {
  position: absolute;
  height: 10px;
  width: 80%;
  background-color: orange;
  border-radius: 5px;
/*   background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  ); */
  background-color: orange;
}
</style>