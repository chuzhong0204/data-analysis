<template>
  <div class="progress">
    <slot name="word"></slot>
    <div
      class="progressContainer"
      :style="{backgroundColor:pstyle.bgc,borderTopRightRadius:pstyle.bdtradius,borderBottomRightRadius:pstyle.bdbradius}"
    >
      <div class="progressItem" :style="{backgroundColor:pstyle.fgc}"></div>
      <slot name="dat"></slot>
      <!--:style="{width:barwidth+'%'}"-->
    </div>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  props: {
    /*     bgc: {
      type: String
    }, */
    /*        props: ["total", "rest", "barwidth"]
     */
    pstyle: {
      type: Object
    }
  }
};
</script>

<style scoped>
.progress {
  width: 100%;
  height: 30px;
}
.progressContainer {
  float: right;
  position: relative;
  left: -15%;
  top: -57px;
  height: 18px;
  width: 60%;
  right: -50px;
  overflow: hidden;
}
.progressItem {
  position: absolute;
  height: 18px;
  width: 70%;
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
}
/* p {
  position: relative;
  text-align: left;
} */
.number {
  text-align: right;
  position: relative;
  left: 55%;
  top: -55px;
}
.dat {
}
</style>