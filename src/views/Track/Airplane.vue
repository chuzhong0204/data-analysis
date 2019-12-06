<template>
  <div class="Airplane">
    <slot>
      <div class="informations" v-for="item in pinfor" :key="item.jizhong">
        <div class="circle">
          <img src="@/assets/img/tabbar/jian-31.jpg" />
          <p>
            <span>机种： {{item.jizhong}}</span>
            <span>航向： {{item.hangxiang}}</span>
          </p>
          <p>
            <span>架数： {{item.jiashu}}</span>
            <span>坐标： {{item.zuobiao}}</span>
          </p>
          <p class="ptime">
            <span>统计时间：{{item.ttime}}</span>
            <span v-if="isShow">首点时间：{{item.stime}}</span>
          </p>
          <div>
            <ProgressBar></ProgressBar>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
import ProgressBar from "../../components/ProgressBar";
export default {
  name: "Airplane",
  props: {
    purl: {
      type: String
    },
    pinfor: {
      type: Array
    },
    isShow: Boolean
  },
  components: {
    ProgressBar
  }
};
</script>
<style scoped>
.informations {
  width: 100%;
  height: 33%;
  border-bottom: 1px solid #ffffff;
}
img {
  width: 20%;
  border-radius: 50%;
  position: relative;
  left: -30%;
  top: 30%;
}
p {
  position: relative;
  left: 50px;
  top: -70px;
}
.ptime {
  position: relative;
  left: -30%;
}
</style>