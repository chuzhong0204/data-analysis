<template>
  <div>
    <div id="nav">
      <router-link to="/track">航迹表</router-link>
      <router-link to="/detail">威胁力+毁伤+战力</router-link>
      <router-link to="/dispatch">航空兵出动情况</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name:'Nav'
};
</script>
<style scoped>
#nav {
  position: relative;
  width: 100%;
  height: 61px;
  top: 12px;
}

#nav a {
  position: relative;
  font-weight: bold;
  color: #00cc66;
  text-decoration: none;
  margin: 0px 1%;
  top: 20px;
  left: 1.5%;
}

#nav a.router-link-active {
  color: rgb(0, 255, 98);
}
</style>