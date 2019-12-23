<template>
  <div class="narbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Narbar'
}
</script>

<style scoped>
.narbar {
  width: 100%;
  height: 51px;
  background-color: #233273;
  border-bottom: 1px solid #e9e9e9;
}
.narbar p {
  text-align: center;
  margin: 0px;
  line-height: 51px;
  font-size: 20px;
  font-weight: bold;
}
</style>