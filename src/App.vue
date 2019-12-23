<template>
  <div id="app">
    <Nav></Nav>
<!--     <XXX></XXX>
        <VVV></VVV> -->
  </div>
</template>

<script>
import Nav from "./views/Nav/Nav";
/* import XXX from "./views/modules/fxfa"
import VVV from "./views/modules/fxfa-add-or-update" */
export default {
  components: {
    Nav,
/*     XXX,
    VVV */
  }
};
</script>


<style>
@import "./assets/css/base.css";

#app {
  width: 100%;
  height: 1080px;
  background-color: #0d0d0d;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*   text-align: center; */
  color: #ffffff;
}
</style>
