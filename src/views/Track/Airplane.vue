<template>
  <div class="Airplane">
    <slot>
      <div class="informations" v-for="item in pinfor" :key="item.jizhong">
        <div class="circle">
          <img src="@/assets/img/tabbar/jian-31.jpg" />
          <p>
            <span class="no1">机种： {{item.jizhong}}</span>
            <span class="no2">航向： {{item.hangxiang}}</span>
          </p>
          <p>
            <span class="no3">架数： {{item.jiashu}}</span>
            <span class="no4">坐标： {{item.zuobiao}}</span>
          </p>
          <p class="ptime">
            <span>统计时间：{{item.ttime}}</span>
            <span v-if="isShow">首点时间：{{item.stime}}</span>
          </p>
          <div>
            <ProgressBar :pstyle="pstyle1">
              <p slot="word" class="word">高度</p>
              <p slot="dat" class="dat">62%</p>
            </ProgressBar>
            <ProgressBar :pstyle="pstyle2">
              <p slot="word" class="word">速度</p>
              <p slot="dat" class="dat">20%</p>
            </ProgressBar>
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
  data() {
    return {
      pstyle1: {
        bgc: "#F2F2F2",
        bdtradius: "10px",
        bdbradius: "10px",
        fgc: "#009966"
      },
      pstyle2: {
        bgc: "#F2F2F2",
        bdtradius: "10px",
        bdbradius: "10px",
        fgc: "#FF3333"
      }
    };
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
  margin:5% 0 0 5%;
  /*  position: relative;
  left: -35%;
  top: 20px; */
}
/* .no1,.no2,.no3,.no4{
} */
.no1{
  position: relative;
  left: 30%;
  top: -80px;
}
.no2{
  position: relative;
  left: 38%;
  top: -80px;
}
.no3{
  position: relative;
  left: 30%;
  top: -80px;
}
.no4{
  position: relative;
  left: 50%;
  top: -80px;
}
/* p {
  position: relative;
  left: 15%;
  top: -70px;
} */

.ptime {
  position: relative;
  left: 10%;
  top: -60px;
}

.word{
  position: relative;
  left: 10%;
  top: -20px;
}
.dat{
  position: relative;
  left: 80%;
  color: #333333;
  top: -15px;
  font-weight: bolder;
}
</style>