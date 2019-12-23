<template>
  <div class="head">
    <img src="../..//assets/img/arrow.png" alt />
    <slot></slot>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Head"
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 10%;
}
.head p {
  position: relative;
  left: 12%;
  font-size: 20px;
  margin: 0px;
  top: 12px;
}
img {
  position: relative;
  left: 5%;
  top: 40px;
}
hr {
  width: 90%;
  position: relative;
  top: 10px;
}
</style>