<template>
  <div>
    <div id="nav">
      <div @click.prevent="pushTrack">航迹表</div>
<!--       <router-link to="/track">航迹表</router-link> -->
      <div @click.prevent="pushDetail">威胁力+毁伤+战力</div>
      <div @click.prevent="pushDispatch">航空兵出动情况</div>

<!--       <router-link to="/detail">威胁力+毁伤+战力</router-link>
      <router-link to="/dispatch">航空兵出动情况</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name:'Nav',
  methods:{
    pushTrack(){
      this.$router.replace("/track")
    },
    pushDetail(){
      this.$router.replace("/detail")
    },
    pushDispatch(){
      this.$router.replace("/dispatch")
    }
  }
};
</script>
<style scoped>
#nav {
  position: relative;
  width: 100%;
  height: 61px;
  top: 12px;
}

#nav div{
  position: relative;
  display: inline;
  font-weight: bold;
  color: #00cc66;
  margin: 0px 1%;
  top: 20px;
  left: 41%;
}

#nav div:hover{
  color: rgb(0, 255, 98);
  cursor: pointer;
}
</style>