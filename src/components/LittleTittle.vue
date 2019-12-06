<template>
  <div class="littletittle">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "LittleTittle"
};
</script>

<style scoped>
span{
  background-color: #009966;
  border-radius: 20px;
  padding: 7px;
}
</style>