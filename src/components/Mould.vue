
<template>
  <div>
    <div class="mould">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mould",
  components: {
  }
};
</script>

<style scoped>
.mould {
  background-color: #001529;
  width: 100%;
  height: 849px;
  font-size: 16px;
  border-bottom: 1px dashed #d7d7d7;
  border-left: 1px dashed #d7d7d7;
  border-right: 1px dashed #d7d7d7;
  overflow-x: hidden;
}
</style>